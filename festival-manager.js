/**
 * Subhash Chand Vivek Kumar Jewellers (सुभाष चन्द विवेक कुमार ज्वेलर्स)
 * Festival Content Automation Engine
 *
 * Implements the Two-Day Replacement Rule:
 * "Two days after the last festival mentioned in the active website content has ended,
 * automatically remove or replace the expired festival sections with content for
 * the next relevant upcoming festival."
 *
 * Timezone: Asia/Kolkata (Indian Standard Time)
 */

(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    const data = require('./festival-data.js');
    module.exports = factory(data);
  } else {
    root.FestivalManager = factory({
      FESTIVAL_CALENDAR_DATA: root.FESTIVAL_CALENDAR_DATA,
      buildCampaignsForYear: root.buildCampaignsForYear,
      getFallbackCampaign: root.getFallbackCampaign
    });
  }
})(typeof window !== 'undefined' ? window : globalThis, function (festivalData) {
  'use strict';

  const WHATSAPP_NUMBER = '917394993006';
  const PHONE_NUMBER = '8574591059';
  let simulatedDateString = null;

  /**
   * Returns ISO date string (YYYY-MM-DD) in Asia/Kolkata timezone.
   */
  function getKolkataDateString(date = new Date()) {
    if (simulatedDateString) {
      return simulatedDateString;
    }
    try {
      const formatter = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      return formatter.format(date);
    } catch (e) {
      // Fallback if Intl timeZone is unsupported
      const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
      const istDate = new Date(utc + (3600000 * 5.5));
      return istDate.toISOString().slice(0, 10);
    }
  }

  /**
   * Adds specified number of days to a YYYY-MM-DD date string.
   */
  function addDays(isoDateStr, days) {
    const [y, m, d] = isoDateStr.split('-').map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    dt.setUTCDate(dt.getUTCDate() + days);
    return dt.toISOString().slice(0, 10);
  }

  /**
   * Compiles multi-year campaigns with calculated start and expiration boundaries.
   * Based on the Two-Day Replacement Rule:
   * A campaign remains active through its lastFestivalDate + 2 full days.
   * On day 3 (lastFestivalDate + 3 days), it has expired and the next campaign is active.
   */
  function getAllCampaignsForYearRange(startYear, endYear) {
    const all = [];
    for (let yr = startYear; yr <= endYear; yr++) {
      if (typeof festivalData.buildCampaignsForYear === 'function') {
        all.push(...festivalData.buildCampaignsForYear(yr));
      }
    }

    // Sort chronologically by lastFestivalDate
    all.sort((a, b) => a.lastFestivalDate.localeCompare(b.lastFestivalDate));

    // Calculate strict two-day expiry boundary
    for (let i = 0; i < all.length; i++) {
      all[i].expiryDate = addDays(all[i].lastFestivalDate, 2);
      all[i].activeStartDate = i === 0 ? addDays(all[i].lastFestivalDate, -30) : addDays(all[i - 1].expiryDate, 1);
    }

    return all;
  }

  /**
   * Selects the active festival campaign for the given date.
   * Follows the two-day replacement rule:
   * Returns the first upcoming/current campaign whose expiryDate (lastFestivalDate + 2 days)
   * has not yet passed.
   */
  function getActiveFestival(forDateStr) {
    const today = forDateStr || getKolkataDateString();
    const currentYear = parseInt(today.slice(0, 4), 10);

    const campaigns = getAllCampaignsForYearRange(currentYear - 1, currentYear + 1);

    for (let i = 0; i < campaigns.length; i++) {
      const camp = campaigns[i];
      // Active if today is <= expiryDate (last festival date + 2 days)
      if (today <= camp.expiryDate) {
        return {
          campaign: camp,
          isFallback: false,
          currentDate: today,
          ruleStatus: {
            lastFestivalDate: camp.lastFestivalDate,
            lastFestivalName: camp.lastFestivalName,
            activeThrough: camp.expiryDate,
            daysUntilExpiry: Math.round((new Date(camp.expiryDate) - new Date(today)) / (1000 * 60 * 60 * 24))
          }
        };
      }
    }

    // Fallback if beyond range
    const fallback = typeof festivalData.getFallbackCampaign === 'function'
      ? festivalData.getFallbackCampaign(currentYear)
      : null;

    return {
      campaign: fallback,
      isFallback: true,
      currentDate: today,
      ruleStatus: null
    };
  }

  /**
   * Safely updates DOM elements with festival campaign data.
   */
  function applyFestivalToDOM(festivalResult) {
    if (typeof document === 'undefined') return;
    if (!festivalResult || !festivalResult.campaign) return;

    const camp = festivalResult.campaign;

    // 1. Top Announcement Bar
    const announceWish = document.querySelector('.announce__wish');
    if (announceWish && camp.announcementWish) {
      announceWish.textContent = camp.announcementWish;
    }

    // 2. Mobile Menu Tag
    const menuHi = document.querySelector('.menu__hi');
    if (menuHi && camp.menuTag) {
      menuHi.textContent = camp.menuTag;
    }

    // 3. Festive Section
    const festiveSection = document.getElementById('festive');
    if (festiveSection) {
      // Eyebrow
      const eyebrow = festiveSection.querySelector('.eyebrow--light');
      if (eyebrow && camp.eyebrow) {
        eyebrow.textContent = camp.eyebrow;
      }

      // Title
      const title = document.getElementById('festive-title');
      if (title && camp.title) {
        title.textContent = camp.title;
      }

      // Blessing
      const blessing = festiveSection.querySelector('.festive__blessing');
      if (blessing && camp.blessing) {
        blessing.textContent = camp.blessing;
      }

      // Visual Image & Caption
      const img = festiveSection.querySelector('.festive__visual img');
      if (img && camp.image) {
        img.src = camp.image;
        if (camp.imageAlt) img.alt = camp.imageAlt;
      }

      const figHi = festiveSection.querySelector('.festive__visual figcaption span[lang="hi"]');
      if (figHi && camp.captionTitle) {
        figHi.textContent = camp.captionTitle;
      }

      const figEn = festiveSection.querySelector('.festive__visual figcaption span:not([lang="hi"])');
      if (figEn && camp.captionSub) {
        figEn.textContent = camp.captionSub;
      }

      // Occasions List
      const occasionsList = festiveSection.querySelector('.occasions');
      if (occasionsList && Array.isArray(camp.occasions) && camp.occasions.length > 0) {
        occasionsList.innerHTML = '';
        camp.occasions.forEach(occ => {
          const li = document.createElement('li');
          const nameSpan = document.createElement('span');
          nameSpan.className = 'occasions__name';
          nameSpan.textContent = occ.name;

          const descSpan = document.createElement('span');
          descSpan.className = 'occasions__desc';
          descSpan.textContent = occ.desc;

          li.appendChild(nameSpan);
          li.appendChild(descSpan);
          occasionsList.appendChild(li);
        });
      }

      // Perks List
      const perksList = festiveSection.querySelector('.perks');
      if (perksList && Array.isArray(camp.perks) && camp.perks.length > 0) {
        perksList.innerHTML = '';
        camp.perks.forEach(text => {
          const li = document.createElement('li');
          li.textContent = text;
          perksList.appendChild(li);
        });
      }

      // Action Button - WhatsApp link with custom greeting
      const waBtn = festiveSection.querySelector('.festive__actions a.btn--gold');
      if (waBtn && camp.whatsappMsg) {
        const encodedMsg = encodeURIComponent(camp.whatsappMsg);
        waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
      }
    }
  }

  /**
   * Initializes automatic festival updates on the website.
   */
  function init() {
    // Check if URL has ?date=YYYY-MM-DD for preview/testing
    if (typeof window !== 'undefined' && window.location && window.location.search) {
      const match = window.location.search.match(/[?&]date=([0-9]{4}-[0-9]{2}-[0-9]{2})/);
      if (match) {
        simulatedDateString = match[1];
        console.log(`[FestivalManager] Running in date preview mode for: ${simulatedDateString}`);
      }
    }

    const currentFestival = getActiveFestival();
    applyFestivalToDOM(currentFestival);

    // Schedule regular check (checks every 5 minutes for midnight transition)
    if (typeof window !== 'undefined') {
      let lastCheckedDate = getKolkataDateString();
      setInterval(() => {
        const currentDate = getKolkataDateString();
        if (currentDate !== lastCheckedDate) {
          lastCheckedDate = currentDate;
          console.log(`[FestivalManager] Midnight transition detected. Updating festival to: ${currentDate}`);
          applyFestivalToDOM(getActiveFestival(currentDate));
        }
      }, 5 * 60 * 1000);
    }

    return currentFestival;
  }

  /**
   * Simulator tool for testing transitions directly from the developer console.
   */
  function setSimulationDate(isoDateStr) {
    simulatedDateString = isoDateStr;
    const res = getActiveFestival(isoDateStr);
    applyFestivalToDOM(res);
    return res;
  }

  return {
    getKolkataDateString,
    addDays,
    getAllCampaignsForYearRange,
    getActiveFestival,
    applyFestivalToDOM,
    setSimulationDate,
    init
  };
});
