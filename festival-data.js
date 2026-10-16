/**
 * Subhash Chand Vivek Kumar Jewellers (सुभाष चन्द विवेक कुमार ज्वेलर्स)
 * Indian Festival Calendar & Campaign Data Store
 *
 * Supports multi-year astronomical dates for North India & Uttar Pradesh
 * (including Gorakhpur's renowned Khichdi Parv / Makar Sankranti at Gorakhnath Dham).
 */

const FESTIVAL_CALENDAR_DATA = {
  // Key festival dates by year (YYYY-MM-DD in Asia/Kolkata)
  years: {
    2025: {
      makar_sankranti: '2025-01-14',
      vasant_panchami: '2025-02-02',
      maha_shivratri: '2025-02-26',
      holi: '2025-03-14',
      ram_navami: '2025-04-06',
      akshaya_tritiya: '2025-04-30',
      hariyali_teej: '2025-07-27',
      raksha_bandhan: '2025-08-09',
      hartalika_teej: '2025-08-26',
      janmashtami: '2025-08-16',
      ganesh_chaturthi: '2025-08-27',
      anant_chaturdashi: '2025-09-05',
      navratri_start: '2025-09-22',
      dussehra: '2025-10-02',
      karwa_chauth: '2025-10-10',
      dhanteras: '2025-10-18',
      diwali: '2025-10-20',
      bhai_dooj: '2025-10-23',
      dev_uthani_ekadashi: '2025-11-01',
      new_year: '2026-01-01'
    },
    2026: {
      makar_sankranti: '2026-01-14',
      vasant_panchami: '2026-01-23',
      maha_shivratri: '2026-02-15',
      holi: '2026-03-04',
      ram_navami: '2026-03-27',
      akshaya_tritiya: '2026-04-19',
      hariyali_teej: '2026-08-15',
      raksha_bandhan: '2026-08-28',
      hartalika_teej: '2026-09-13',
      janmashtami: '2026-09-04',
      ganesh_chaturthi: '2026-09-14',
      anant_chaturdashi: '2026-09-24',
      navratri_start: '2026-10-11',
      dussehra: '2026-10-20',
      karwa_chauth: '2026-10-29',
      dhanteras: '2026-11-06',
      diwali: '2026-11-08',
      bhai_dooj: '2026-11-10',
      dev_uthani_ekadashi: '2026-11-20',
      new_year: '2027-01-01'
    },
    2027: {
      makar_sankranti: '2027-01-14',
      vasant_panchami: '2027-02-11',
      maha_shivratri: '2027-03-06',
      holi: '2027-03-23',
      ram_navami: '2027-04-15',
      akshaya_tritiya: '2027-05-09',
      hariyali_teej: '2027-08-04',
      raksha_bandhan: '2027-08-17',
      hartalika_teej: '2027-09-03',
      janmashtami: '2027-08-25',
      ganesh_chaturthi: '2027-09-04',
      anant_chaturdashi: '2027-09-14',
      navratri_start: '2027-09-30',
      dussehra: '2027-10-09',
      karwa_chauth: '2027-10-18',
      dhanteras: '2027-10-27',
      diwali: '2027-10-29',
      bhai_dooj: '2027-10-31',
      dev_uthani_ekadashi: '2027-11-10',
      new_year: '2028-01-01'
    },
    2028: {
      makar_sankranti: '2028-01-14',
      vasant_panchami: '2028-01-31',
      maha_shivratri: '2028-02-23',
      holi: '2028-03-12',
      ram_navami: '2028-04-03',
      akshaya_tritiya: '2028-04-27',
      hariyali_teej: '2028-07-24',
      raksha_bandhan: '2028-08-05',
      hartalika_teej: '2028-08-23',
      janmashtami: '2028-08-13',
      ganesh_chaturthi: '2028-08-24',
      anant_chaturdashi: '2028-09-03',
      navratri_start: '2028-10-18',
      dussehra: '2028-10-27',
      karwa_chauth: '2028-11-05',
      dhanteras: '2028-11-15',
      diwali: '2028-11-17',
      bhai_dooj: '2028-11-19',
      dev_uthani_ekadashi: '2028-11-28',
      new_year: '2029-01-01'
    },
    2029: {
      makar_sankranti: '2029-01-14',
      vasant_panchami: '2029-01-20',
      maha_shivratri: '2029-02-12',
      holi: '2029-03-01',
      ram_navami: '2029-03-24',
      akshaya_tritiya: '2029-04-16',
      hariyali_teej: '2029-08-12',
      raksha_bandhan: '2029-08-24',
      hartalika_teej: '2029-09-10',
      janmashtami: '2029-09-01',
      ganesh_chaturthi: '2029-09-12',
      anant_chaturdashi: '2029-09-21',
      navratri_start: '2029-10-08',
      dussehra: '2029-10-17',
      karwa_chauth: '2029-10-26',
      dhanteras: '2029-11-04',
      diwali: '2029-11-05',
      bhai_dooj: '2029-11-07',
      dev_uthani_ekadashi: '2029-11-17',
      new_year: '2030-01-01'
    },
    2030: {
      makar_sankranti: '2030-01-14',
      vasant_panchami: '2030-02-08',
      maha_shivratri: '2030-03-03',
      holi: '2030-03-20',
      ram_navami: '2030-04-12',
      akshaya_tritiya: '2030-05-05',
      hariyali_teej: '2030-08-01',
      raksha_bandhan: '2030-08-13',
      hartalika_teej: '2030-08-30',
      janmashtami: '2030-08-20',
      ganesh_chaturthi: '2030-09-01',
      anant_chaturdashi: '2030-09-10',
      navratri_start: '2030-09-27',
      dussehra: '2030-10-06',
      karwa_chauth: '2030-10-15',
      dhanteras: '2030-10-24',
      diwali: '2030-10-26',
      bhai_dooj: '2030-10-28',
      dev_uthani_ekadashi: '2030-11-06',
      new_year: '2031-01-01'
    }
  }
};

/**
 * Builds the ordered annual festival campaigns for a given Gregorian year.
 * Each campaign specifies its last festival date, which determines the 2-day
 * replacement window.
 */
function buildCampaignsForYear(year) {
  const dates = FESTIVAL_CALENDAR_DATA.years[year] || {
    makar_sankranti: `${year}-01-14`,
    vasant_panchami: `${year}-02-01`,
    maha_shivratri: `${year}-02-25`,
    holi: `${year}-03-15`,
    ram_navami: `${year}-04-05`,
    akshaya_tritiya: `${year}-04-28`,
    hariyali_teej: `${year}-08-05`,
    raksha_bandhan: `${year}-08-18`,
    hartalika_teej: `${year}-09-05`,
    janmashtami: `${year}-08-25`,
    ganesh_chaturthi: `${year}-09-05`,
    anant_chaturdashi: `${year}-09-15`,
    navratri_start: `${year}-10-05`,
    dussehra: `${year}-10-15`,
    karwa_chauth: `${year}-10-24`,
    dhanteras: `${year}-11-02`,
    diwali: `${year}-11-04`,
    bhai_dooj: `${year}-11-06`,
    dev_uthani_ekadashi: `${year}-11-15`,
    new_year: `${year + 1}-01-01`
  };

  return [
    // 1. Makar Sankranti (Khichdi Parv) & Uttar Pradesh winter festivities
    {
      id: `khichdi_${year}`,
      year: year,
      name: 'Makar Sankranti & Khichdi Parv',
      lastFestivalName: 'मकर संक्रांति (खिचड़ी पर्व)',
      lastFestivalDate: dates.makar_sankranti, // Jan 14
      announcementWish: 'मकर संक्रांति एवं पावन खिचड़ी महापर्व की हार्दिक शुभकामनाएं',
      menuTag: 'मकर संक्रांति · खिचड़ी',
      eyebrow: `Makar Sankranti & Khichdi Parv ${year}`,
      title: 'मकर संक्रांति एवं पावन खिचड़ी पर्व की हार्दिक शुभकामनाएं',
      blessing: 'सुभाष चन्द विवेक कुमार ज्वेलर्स (मोदनवाल परिवार) की ओर से आप सभी सम्मानीय क्षेत्रवासियों को मकर संक्रांति व पावन खिचड़ी महापर्व की अशेष मंगलकामनाएं। सूर्य देव के उत्तरायण आगमन पर आपके जीवन में आरोग्य, ऐश्वर्य, सुख और नव-ऊर्जा का शुभ प्रकाश फैले।',
      image: 'assets/images/traditional-jewellery.jpg',
      imageAlt: 'Makar Sankranti and Khichdi festival pure gold temple jewellery and traditional collection',
      captionTitle: 'सूर्य उत्तरायण पर्व',
      captionSub: 'Makar Sankranti & Khichdi Special',
      occasions: [
        { name: 'मकर संक्रांति (खिचड़ी पर्व)', desc: 'भगवान सूर्य का मकर राशि में प्रवेश • पावन दान व स्वर्ण-रजत आभूषण' },
        { name: 'लोहड़ी व पौष पूर्णिमा', desc: 'नई फसल व नव जीवन का उल्लास • पारंपरिक सोने की चूड़ियाँ व झुमके' },
        { name: 'शुभ उत्तरायण खरीदारी', desc: 'हॉलमार्क स्वर्ण आभूषणों व शुद्ध चाँदी के बर्तनों पर विशेष सौगात' }
      ],
      perks: [
        '100% हॉलमार्क शुद्धता की गारंटी',
        'पारंपरिक व आधुनिक डिजाइनों की विस्तृत श्रृंखला',
        'चाँदी के सिक्के व पूजन पात्र उपलब्ध'
      ],
      whatsappMsg: `Namaste Subhash Chand Vivek Kumar Jewellers, Happy Makar Sankranti & Khichdi Parv ${year}! I would like to enquire about your Gold and Silver collection.`
    },

    // 2. Vasant Panchami & Maha Shivratri
    {
      id: `vasant_shivratri_${year}`,
      year: year,
      name: 'Vasant Panchami & Maha Shivratri',
      lastFestivalName: 'महाशिवरात्रि',
      lastFestivalDate: dates.maha_shivratri,
      announcementWish: 'वसंत पंचमी, सरस्वती पूजन एवं महाशिवरात्रि की हार्दिक शुभकामनाएं',
      menuTag: 'महाशिवरात्रि',
      eyebrow: `Sacred Auspicious Edit ${year}`,
      title: 'वसंत पंचमी, सरस्वती पूजन एवं महाशिवरात्रि की हार्दिक बधाई',
      blessing: 'सुभाष चन्द विवेक कुमार ज्वेलर्स (मोदनवाल परिवार) की ओर से मां वीणावादिनी व देवाधिदेव महादेव के पावन पर्वों की मंगलकामनाएं। भगवान भोलेनाथ व मां पार्वती की असीम कृपा से आपका घर-परिवार सदा सुख, शांति और सौभाग्य से परिपूर्ण रहे।',
      image: 'assets/images/gold-bangles.jpg',
      imageAlt: 'Vasant Panchami and Maha Shivratri handcrafted gold jewellery collection',
      captionTitle: 'शिव-शक्ति व वसंत उत्सव',
      captionSub: 'Vasant & Maha Shivratri Edit',
      occasions: [
        { name: 'वसंत पंचमी (सरस्वती पूजन)', desc: 'विद्या व कला की देवी का वंदन • शुभ स्वर्ण खरीदारी का मुहूर्त' },
        { name: 'महाशिवरात्रि महापर्व', desc: 'शिव-पार्वती पावन विवाह प्रसंग • मंगलसूत्र, कड़े व रुद्राक्ष स्वर्ण आभूषण' },
        { name: 'शुभ लगन व मांगलिक पर्व', desc: 'शुद्ध 22K/18K सोने के नक्काशीदार आभूषण' }
      ],
      perks: [
        'हॉलमार्क सोने व चाँदी के आभूषण',
        'उचित व पारदर्शी मेकिंग चार्ज',
        'कस्टम ज्वेलरी निर्माण की सुविधा'
      ],
      whatsappMsg: `Namaste Subhash Chand Vivek Kumar Jewellers, Har Har Mahadev! I would like to enquire about jewellery for Vasant Panchami and Maha Shivratri.`
    },

    // 3. Holi & Chaitra Navratri / Ram Navami
    {
      id: `holi_navratri_${year}`,
      year: year,
      name: 'Holi & Chaitra Navratri',
      lastFestivalName: 'रामनवमी',
      lastFestivalDate: dates.ram_navami,
      announcementWish: 'रंगोत्सव होली, चैत्र नवरात्रि एवं श्रीरामनवमी की हार्दिक शुभकामनाएं',
      menuTag: 'होली · रामनवमी',
      eyebrow: `Spring Festive Edit ${year}`,
      title: 'रंगोत्सव होली, चैत्र नवरात्रि एवं श्रीरामनवमी की हार्दिक बधाई',
      blessing: 'सुभाष चन्द विवेक कुमार ज्वेलर्स (मोदनवाल परिवार) की ओर से आप सभी को रंगों के पावन पर्व होली एवं चैत्र नवरात्रि की अनंत शुभकामनाएं। मर्यादा पुरुषोत्तम प्रभु श्री राम की कृपा आपके परिवार पर सदैव बनी रहे।',
      image: 'assets/images/gold-earrings.jpg',
      imageAlt: 'Holi and Chaitra Navratri royal gold jhumkas and festive jewellery',
      captionTitle: 'उल्लास व नव संवत्सर',
      captionSub: 'Holi & Navratri Special',
      occasions: [
        { name: 'शुभ रंगोत्सव (होली)', desc: 'खुशियों और प्रेम के रंग • अपनों के लिए खूबसूरत स्वर्ण व रजत उपहार' },
        { name: 'चैत्र नवरात्रि व नववर्ष', desc: 'मां भगवती की नौ दिन की आराधना • शक्ति स्वरूपा हेतु दिव्य आभूषण' },
        { name: 'मर्यादा पुरुषोत्तम रामनवमी', desc: 'प्रभु श्री राम जन्मोत्सव • मंगलकारी सोने के सिक्के व पेंडेंट' }
      ],
      perks: [
        '100% हॉलमार्क सर्टिफाइड आभूषण',
        'होली व नवरात्रि पर विशेष मेकिंग ऑफर',
        'पुश्तैनी कारीगरी व अटूट विश्वास'
      ],
      whatsappMsg: `Namaste Subhash Chand Vivek Kumar Jewellers, Happy Holi and Chaitra Navratri! I would like to enquire about festive jewellery.`
    },

    // 4. Akshaya Tritiya & Summer Vivah Season
    {
      id: `akshaya_tritiya_${year}`,
      year: year,
      name: 'Akshaya Tritiya & Summer Vivah',
      lastFestivalName: 'अक्षय तृतीया',
      lastFestivalDate: dates.akshaya_tritiya,
      announcementWish: 'अक्षय तृतीया एवं वैशाख मास की हार्दिक मंगलकामनाएं — कभी क्षय न होने वाला स्वर्ण',
      menuTag: 'अक्षय तृतीया',
      eyebrow: `Akshaya Tritiya Mahotsav ${year}`,
      title: 'अक्षय तृतीया एवं शुभ विवाह लगन की हार्दिक शुभकामनाएं',
      blessing: 'सुभाष चन्द विवेक कुमार ज्वेलर्स (मोदनवाल परिवार) की ओर से अक्षय तृतीया के पावन पर्व की हार्दिक बधाई। इस दिन खरीदे गए सोने में मां लक्ष्मी का वास होता है, जो पीढ़ी-दर-पीढ़ी अक्षय समृद्धि और सौभाग्य प्रदान करता है।',
      image: 'assets/images/bridal-set.jpg',
      imageAlt: 'Akshaya Tritiya 22K pure hallmark gold jewellery and bridal choker sets',
      captionTitle: 'अक्षय समृद्धि पर्व',
      captionSub: 'Akshaya Tritiya Special',
      occasions: [
        { name: 'अक्षय तृतीया महामुहूर्त', desc: 'अक्षय पुण्य व स्वर्ण खरीदारी का सर्वश्रेष्ठ दिन • अग्रिम बुकिंग जारी' },
        { name: 'वैशाख विवाह लगन', desc: 'शाही ब्राइडल चोकर, रानी हार, मांग टीका व नथ' },
        { name: 'लक्ष्मी-कुबेर सिक्के', desc: 'शुद्ध 24K सोने व 999 चाँदी के सिक्के' }
      ],
      perks: [
        'अक्षय तृतीया पर अग्रिम बुकिंग उपलब्ध',
        '100% शुद्धता की पक्की गारंटी',
        'पारदर्शी वजन व कंप्यूटरीकृत बिलिंग'
      ],
      whatsappMsg: `Namaste Subhash Chand Vivek Kumar Jewellers, Happy Akshaya Tritiya! I want to enquire about advance gold booking for Akshaya Tritiya.`
    },

    // 5. Shravan Maas, Hariyali/Hartalika Teej & Raksha Bandhan
    {
      id: `teej_rakhi_${year}`,
      year: year,
      name: 'Shravan, Teej & Raksha Bandhan',
      lastFestivalName: 'हरतालिका तीज',
      lastFestivalDate: dates.hartalika_teej,
      announcementWish: 'सावन मास, हरियाली तीज, रक्षाबंधन एवं हरतालिका तीज की हार्दिक बधाई',
      menuTag: 'तीज · रक्षाबंधन',
      eyebrow: `Shravan & Teej Edit ${year}`,
      title: 'हरियाली तीज, रक्षाबंधन एवं हरतालिका तीज की हार्दिक शुभकामनाएं',
      blessing: 'सुभाष चन्द विवेक कुमार ज्वेलर्स (मोदनवाल परिवार) की ओर से पावन श्रावण मास, तीज व रक्षाबंधन की हार्दिक शुभकामनाएं। भाई-बहन के पवित्र प्रेम और सुहाग के इस महापर्व पर अपनों को दें शुद्ध सोने और चाँदी की अमूल्य सौगात।',
      image: 'assets/images/gallery-7.jpg',
      imageAlt: 'Teej and Rakhi gold bracelets, bangles and silver rakhis',
      captionTitle: 'स्नेह व सुहाग पर्व',
      captionSub: 'Teej & Rakhi Collection',
      occasions: [
        { name: 'हरियाली व हरतालिका तीज', desc: 'अखंड सौभाग्य व सुहाग का पावन पर्व • पारंपरिक चूड़ियाँ व झुमकी' },
        { name: 'पवित्र रक्षाबंधन', desc: 'भाई-बहन के अटूट रिश्ते का पर्व • शुद्ध चाँदी की राखियाँ व उपहार' },
        { name: 'सावन सोमवार व शिव पूजन', desc: 'शुद्ध चाँदी के बिल्वपत्र, नाग व शिवलिंग पूजा पात्र' }
      ],
      perks: [
        'विशिष्ट डिज़ाइनर चाँदी की राखियाँ',
        'सुहाग के पारंपरिक 22K स्वर्ण आभूषण',
        'सुरुचिपूर्ण गिफ्टिंग पैकिंग'
      ],
      whatsappMsg: `Namaste Subhash Chand Vivek Kumar Jewellers, Happy Teej and Raksha Bandhan! I would like to enquire about your festive gifts and jewellery.`
    },

    // 6. Janmashtami & Ganesh Utsav
    {
      id: `ganesh_utsav_${year}`,
      year: year,
      name: 'Janmashtami & Ganesh Utsav',
      lastFestivalName: 'गणेश विसर्जन / अनंत चतुर्दशी',
      lastFestivalDate: dates.anant_chaturdashi,
      announcementWish: 'श्रीकृष्ण जन्माष्टमी एवं गणेश चतुर्थी की हार्दिक शुभकामनाएं — गणपति बप्पा मोरया',
      menuTag: 'जन्माष्टमी · गणेशोत्सव',
      eyebrow: `Bhakti & Grandeur Edit ${year}`,
      title: 'श्रीकृष्ण जन्माष्टमी एवं गणेश चतुर्थी की हार्दिक बधाई',
      blessing: 'सुभाष चन्द विवेक कुमार ज्वेलर्स (मोदनवाल परिवार) की ओर से नंदलाला के जन्मोत्सव एवं विघ्नहर्ता भगवान श्री गणेश के आगमन की अशेष मंगलकामनाएं। रिद्धि-सिद्धि के दाता आपके समस्त विघ्नों को हरें और जीवन को समृद्धि से भर दें।',
      image: 'assets/images/gold-necklace.jpg',
      imageAlt: 'Janmashtami and Ganesh Utsav auspicious gold and silver ornaments',
      captionTitle: 'रिद्धि-सिद्धि उत्सव',
      captionSub: 'Janmashtami & Ganesh Edit',
      occasions: [
        { name: 'श्रीकृष्ण जन्माष्टमी', desc: 'लड्डू गोपाल जी हेतु सोने-चाँदी के मुकुट, बांसुरी, झूले व छत्र' },
        { name: 'गणेश चतुर्थी व गणेशोत्सव', desc: 'विघ्नहर्ता गणेश जी के शुभ सिक्के, मोदक व दिव्य आभूषण' },
        { name: 'अनंत चतुर्दशी', desc: 'सौभाग्य व रक्षा का पावन दिवस • पारंपरिक स्वर्ण आभूषण' }
      ],
      perks: [
        'लड्डू गोपाल जी के शुद्ध चाँदी के आभूषण',
        'श्री गणेश जी के हॉलमार्क स्वर्ण सिक्के',
        'विश्वास और प्रामाणिकता की अटूट विरासत'
      ],
      whatsappMsg: `Namaste Subhash Chand Vivek Kumar Jewellers, Ganpati Bappa Morya! I would like to enquire about Janmashtami and Ganesh Chaturthi collections.`
    },

    // 7. Shardiya Navratri, Dussehra, Karwa Chauth, Dhanteras & Diwali (Grand Festive Season)
    {
      id: `diwali_festive_${year}`,
      year: year,
      name: 'Diwali & Dhanteras Festive Season',
      lastFestivalName: 'भाई दूज',
      lastFestivalDate: dates.bhai_dooj,
      announcementWish: 'दशहरा, करवाचौथ, धनतेरस एवं दीपावली की हार्दिक शुभकामनाएं',
      menuTag: 'दीपावली · धनतेरस',
      eyebrow: `Festive Celebrations ${year}`,
      title: 'विजयादशमी, करवाचौथ, धनतेरस एवं दीपावली की हार्दिक बधाई',
      blessing: 'सुभाष चन्द विवेक कुमार ज्वेलर्स (मोदनवाल परिवार) की ओर से आप सभी सम्मानीय क्षेत्रवासियों को दीपोत्सव की अशेष शुभकामनाएं। मां महालक्ष्मी व भगवान श्री गणेश की असीम कृपा से आपके घर में सुख, समृद्धि, वैभव और आरोग्य का चिरस्थायी वास हो।',
      image: 'assets/images/diwali-festive-poster.jpg',
      imageAlt: 'Diwali and Dhanteras display: gold necklace, Lakshmi-Ganesh coins and bangles among brass diyas and marigolds',
      captionTitle: 'महालक्ष्मी कृपा पर्व',
      captionSub: 'Dhanteras & Diwali Special',
      occasions: [
        { name: 'विजयादशमी (दशहरा)', desc: 'असत्य पर सत्य की विजय • स्वर्ण आभूषणों की शुभ शुरुआत' },
        { name: 'करवा चौथ', desc: 'अखंड सुहाग का पावन पर्व • मंगलसूत्र, कंगन व उपहार' },
        { name: 'शुभ धनतेरस', desc: 'लक्ष्मी-गणेश स्वर्ण व रजत सिक्के • अग्रिम बुकिंग उपलब्ध' },
        { name: 'शुभ दीपावली व भाई दूज', desc: 'दीपोत्सव, महालक्ष्मी पूजन व भाई-बहन का पवित्र स्नेह' }
      ],
      perks: [
        '100% शुद्धता की गारंटी',
        'उचित व पारदर्शी मेकिंग चार्ज',
        'धनतेरस सिक्कों की अग्रिम बुकिंग'
      ],
      whatsappMsg: `Namaste Subhash Chand Vivek Kumar Jewellers, Happy Diwali & Dhanteras! I would like to enquire about Festive Jewellery collection and advance booking.`
    },

    // 8. Dev Uthani Ekadashi, Winter Vivah & New Year Season
    {
      id: `new_year_${year}`,
      year: year,
      name: 'Winter Wedding Season & Happy New Year',
      lastFestivalName: 'नव वर्ष (New Year)',
      lastFestivalDate: dates.new_year, // Jan 1 of year+1
      announcementWish: `देवउठनी एकादशी, शुभ विवाह लगन एवं नव वर्ष ${year + 1} की हार्दिक शुभकामनाएं`,
      menuTag: `नव वर्ष ${year + 1}`,
      eyebrow: `Winter Wedding & New Year Celebrations`,
      title: `शुभ विवाह लगन एवं नव वर्ष ${year + 1} की हार्दिक बधाई`,
      blessing: `सुभाष चन्द विवेक कुमार ज्वेलर्स (मोदनवाल परिवार) की ओर से आप सभी को देवउठनी एकादशी, मांगलिक विवाह लगन एवं नव वर्ष ${year + 1} की अशेष शुभकामनाएं। आने वाला नया साल आपके जीवन में असीम हर्ष, उत्तम स्वास्थ्य और समृद्धि लेकर आए।`,
      image: 'assets/images/bridal-feature.jpg',
      imageAlt: 'Winter wedding jewellery and New Year fine gold jewellery collection',
      captionTitle: 'मांगलिक विवाह व नव वर्ष',
      captionSub: `Wedding & New Year ${year + 1}`,
      occasions: [
        { name: 'देवउठनी एकादशी व तुलसी विवाह', desc: 'समस्त मांगलिक कार्यों का शुभ आरंभ • संपूर्ण ब्राइडल सेट' },
        { name: 'शीतकालीन विवाह लगन', desc: 'दुल्हन चोकर, कड़े, नथ व अंगूठियों की भव्य रेंज' },
        { name: `नव वर्ष ${year + 1} का स्वागत`, desc: 'नए संकल्प व नई उमंग • शुद्ध स्वर्ण व रजत उपहार' }
      ],
      perks: [
        'हॉलमार्क 916 शुद्धता की गारंटी',
        'विवाह के लिए संपूर्ण आभूषण पैकेज',
        'पारदर्शी तौल व व्यक्तिगत सेवा'
      ],
      whatsappMsg: `Namaste Subhash Chand Vivek Kumar Jewellers, Happy New Year ${year + 1}! I would like to enquire about Winter Wedding and Bridal Jewellery.`
    }
  ];
}

/**
 * Fallback campaign when no festival window matches or during evergreen intervals.
 */
function getFallbackCampaign(year) {
  return {
    id: `evergreen_${year}`,
    year: year,
    name: 'Auspicious Heritage Edit',
    lastFestivalName: 'शुभ मांगलिक उत्सव',
    lastFestivalDate: `${year}-12-31`,
    announcementWish: 'शुद्धता, विश्वास और परंपरा का संगम — सुभाष चन्द विवेक कुमार ज्वेलर्स',
    menuTag: 'मांगलिक आभूषण',
    eyebrow: 'Timeless Heritage & Purity',
    title: 'शुभ मांगलिक अवसर एवं अक्षय शुद्धता के पावन आभूषण',
    blessing: 'सुभाष चन्द विवेक कुमार ज्वेलर्स (मोदनवाल परिवार) की ओर से आपके जीवन के हर विशेष और मांगलिक पल के लिए अशेष शुभकामनाएं। पीढ़ियों के विश्वास और 100% हॉलमार्क शुद्धता के साथ हम आपके हर उत्सव को यादगार बनाते हैं।',
    image: 'assets/images/traditional-jewellery.jpg',
    imageAlt: 'Timeless Indian gold and silver traditional jewellery collection',
    captionTitle: 'विरासत एवं विश्वास',
    captionSub: 'Royal Heritage Edit',
    occasions: [
      { name: 'शुभ विवाह व सगाई', desc: 'शाही ब्राइडल चोकर, रानी हार, मांग टीका व अंगूठियाँ' },
      { name: 'दैनिक व औपचारिक आभूषण', desc: 'हल्के व मजबूत सोने के कड़े, चेन व टॉप्स' },
      { name: 'शुद्ध चाँदी के उपहार व सिक्के', desc: 'जन्मदिन, वर्षगांठ व मांगलिक पूजा हेतु शुद्ध चाँदी' }
    ],
    perks: [
      '100% हॉलमार्क सोना व शुद्ध चाँदी',
      'उचित व पारदर्शी मेकिंग चार्ज',
      'मोदनवाल परिवार की पीढ़ियों की साख'
    ],
    whatsappMsg: 'Namaste Subhash Chand Vivek Kumar Jewellers, I would like to enquire about your jewellery collections.'
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FESTIVAL_CALENDAR_DATA,
    buildCampaignsForYear,
    getFallbackCampaign
  };
}
