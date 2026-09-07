// =========================================
// ===== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ =====
// =========================================

const translations = {
    ru: {
        // ===== НАВИГАЦИЯ =====
        nav_home: "Главная",
        nav_catalog: "Каталог",
        nav_catalog_order: "Товары под заказ",
        nav_services: "Услуги",
        nav_about: "О компании",
        nav_contacts: "Контакты",

        // ===== ГЕРОЙ (SEO) =====
        hero_title: "Окна и двери в Скалеа",
        hero_features: "Надежность · Качество · Эстетика · Безопасность · Лучшая цена · Энергоэффективность · Современный дизайн",

        hero_btn1: "Перейти в каталог",
        hero_btn2: "Связаться",

        // ===== КАРТИНКА =====
        hero_image: "111.png",

        // ===== ПРОДУКТЫ НА ГЛАВНОЙ =====
        products_title: "Товары",

        product1: "Двери ПВХ",
        product1_desc: "",
        product2: "Двери МДФ",
        product2_desc: "",
        product3: "Двери EcoRaido",
        product3_desc: "",
        product4: "Двери межкомнатные",
        product4_desc: "",
        product5: "Окна ПВХ",
        product5_desc: "",
        product6: "Окна ПВХ + роллеты",
        product6_desc: "",
        product7: "Персианы",
        product7_desc: "",
        product8: "Москитные сетки",
        product8_desc: "",

        // ===== ПОДКАТЕГОРИИ =====
        subcat_doors_pvc: "Двери ПВХ",
        subcat_doors_mdf: "Двери МДФ",
        subcat_doors_ecoraido: "Двери EcoRaido",
        subcat_doors_interior: "Двери межкомнатные",
        subcat_windows_pvc: "Окна ПВХ",
        subcat_windows_roller: "Окна ПВХ + роллеты",

        // ===== УСЛУГИ =====
        services_title: "Услуги",

        service1: "Замеры",
        service1_desc: "Профессиональный замер окон и дверей",
        service2: "Подготовка КП",
        service2_desc: "Расчет стоимости заказа",
        service3: "Доставка и установка",
        service3_desc: "Быстрая доставка и качественная установка",
        service4: "Сервисное обслуживание",
        service4_desc: "Обслуживание и ремонт",

        // ===== КАТАЛОГ =====
        catalog_title: "Товары",
        filter_all: "Все",
        filter_doors: "Двери",
        filter_windows: "Окна",
        filter_persiane: "Персианы",
        filter_nets: "Москитные сетки",

        // ===== НАЗВАНИЯ ТОВАРОВ =====
        product_name_1: "Дверь ПВХ",
        product_name_2: "Дверь ПВХ",
        product_name_3: "Дверь ПВХ",
        product_name_4: "Дверь ПВХ",
        product_name_5: "Дверь МДФ",
        product_name_6: "Дверь МДФ",
        product_name_7: "Дверь МДФ",
        product_name_8: "Дверь МДФ",
        product_name_9: "Дверь МДФ с электронным замком",
        product_name_10: "Дверь EcoRaido",
        product_name_11: "Дверь EcoRaido",
        product_name_12: "Дверь EcoRaido с электронным замком",
        product_name_13: "Дверь межкомнатная",
        product_name_14: "Дверь межкомнатная",
        product_name_15: "Дверь межкомнатная",
        product_name_16: "Дверь межкомнатная",
        product_name_17: "Окно ПВХ одностворчатое",
        product_name_18: "Окно ПВХ двухстворчатое",
        product_name_19: "Окно ПВХ балконное",
        product_name_20: "Окно ПВХ + ролета",
        product_name_21: "Окно ПВХ + ролета дуб",
        product_name_22: "Персиана алюминиевая",
        product_name_23: "Москитная сетка",

        // ===== КНОПКИ В КАТАЛОГЕ =====
        btn_sizes: "📋 Размеры и цены",
        badge_text: "🛠️ Изготовление под заказ",
        no_products: "Товары не найдены",
        modal_title: "Размеры и цены",
        modal_size: "Размер",
        modal_price: "Цена",
        modal_no_data: "Информация о размерах отсутствует",

        // ===== О КОМПАНИИ =====
        about_title: "О компании",
        about_subtitle: "SSE — Safe Smart Energy",
        about_text1: "Мы — поставщик качественных окон и дверей. Наша компания работает на итальянском рынке более 3-х лет, предлагая надежные и энергоэффективные решения для частных и коммерческих объектов.",
        about_text2: "Мы выполняем полный спектр услуг, от замеров и подготовки коммерческого предложения до доставки и профессиональной установки приобретённого вами изделия, контролируя качество и надёжность на каждом этапе.",
        about_text3: "Мы используем только современные материалы и технологии, чтобы обеспечить максимальную теплоизоляцию, безопасность, энергоэффективность, долговечность и гарантию ваших окон и дверей.",
        about_text4: "Наши клиенты — это люди, которые ценят качество, надежность и стиль. Мы гордимся тем, что помогаем создавать уют и комфорт в каждом доме. Ваш дом в надёжных руках.",

        value1_title: "Качество",
        value1_desc: "Европейские стандарты и сертификаты",
        value2_title: "Надежность",
        value2_desc: "Долговечные материалы и фурнитура",
        value3_title: "Лучшая цена",
        value3_desc: "Хорошие цены без ущерба для качества",
        value4_title: "Энергоэффективность",
        value4_desc: "Высокая энергоэффективность наших продуктов",

        // ===== КОНТАКТЫ =====
        contact_address_title: "Адрес",
        contact_address: "Италия, г. Скалея (CS), Площадь Гарибальди, 8",
        contact_phone_title: "Телефон",
        contact_email_title: "Email",
        contact_hours_title: "График работы",
        contact_hours: "Пн-Пт: 9:00 - 19:00, Сб: 09:00 - 13:00",
        contact_form_title: "Отправить сообщение",
        contact_form_btn: "Отправить",

        // ===== ORDER CATALOG =====
        order_title: "📄 Товары под заказ",
        order_subtitle: "Просмотрите каталог товаров, доступных под заказ",
        order_download: "📥 Скачать каталог (PDF)",

        // ===== FAQ =====
        faq_title: "Часто задаваемые вопросы",
        faq_q1: "Какие окна вы устанавливаете?",
        faq_a1: "Мы устанавливаем окна ПВХ. Любые размеры и цвета в Скалеа.",
        faq_q2: "Делаете ли вы замеры?",
        faq_a2: "Да, бесплатный замер на объекте в Скалеа.",
        faq_q3: "Есть ли гарантия?",
        faq_a3: "Да, мы даем гарантию на все наши окна и двери до 10 лет.",
        faq_q4: "Сколько времени занимает установка?",
        faq_a4: "Установка окон и дверей обычно занимает 1-3 дня в зависимости от объема работ.",

        // ===== SEO ТЕКСТ =====
        seo_title: "Окна и двери в Скалеа — надежность и качество от SSE",
        seo_text1: "Компания SSE предлагает широкий выбор окон и дверей в Scalea. Мы обеспечиваем высокое качество и энергоэффективность. Наши клиенты ценят нас за надежность, стиль и доступные цены. Установка входных дверей, межкомнатных дверей, окон и москитных сеток — всё в одном месте. Бесплатный замер и доставка по всей Скалее.",
        seo_text2: "Оконные рамы из ПВХ, бронированные двери, окна, изготовленные на заказ. SSE — ваш надежный партнер в Скалеа.",

        // ===== ФУТЕР =====
        footer_title: "ВСЕГДА НА СВЯЗИ",
        footer_address: "Италия, г. Скалея (CS), Площадь Гарибальди, 8",
        footer_copyright: "© 2026 Все права защищены"
    },
    it: {
        // ===== NAVIGAZIONE =====
        nav_home: "Home",
        nav_catalog: "Catalogo",
        nav_catalog_order: "Prodotti su ordinazione",
        nav_services: "Servizi",
        nav_about: "Chi siamo",
        nav_contacts: "Contatti",

        // ===== HERO (SEO) =====
        hero_title: "Finestre e porte in Scalea",
        hero_features: "Affidabilità · Qualità · Estetica · Sicurezza · Miglior prezzo · Efficienza energetica · Design moderno",

        hero_btn1: "Vai al catalogo",
        hero_btn2: "Contattaci",

        // ===== IMMAGINE =====
        hero_image: "113.jpg",

        // ===== PRODOTTI =====
        products_title: "I nostri prodotti",

        product1: "Porte in PVC",
        product1_desc: "",
        product2: "Porte in MDF",
        product2_desc: "",
        product3: "Porte EcoRaido",
        product3_desc: "",
        product4: "Porte interne",
        product4_desc: "",
        product5: "Finestre in PVC",
        product5_desc: "",
        product6: "Finestre in PVC con persiane",
        product6_desc: "",
        product7: "Persiane",
        product7_desc: "",
        product8: "Zanzariere",
        product8_desc: "",

        // ===== SOTTO CATEGORIE =====
        subcat_doors_pvc: "Porte in PVC",
        subcat_doors_mdf: "Porte in MDF",
        subcat_doors_ecoraido: "Porte EcoRaido",
        subcat_doors_interior: "Porte interne",
        subcat_windows_pvc: "Finestre in PVC",
        subcat_windows_roller: "Finestre in PVC con persiane",

        // ===== SERVIZI =====
        services_title: "Servizi",

        service1: "Misurazioni",
        service1_desc: "Misurazione professionale di finestre e porte",
        service2: "Preventivi",
        service2_desc: "Calcolo del costo dell'ordine",
        service3: "Consegna e installazione",
        service3_desc: "Consegna rapida e installazione di qualità",
        service4: "Manutenzione",
        service4_desc: "Manutenzione e riparazione",

        // ===== CATALOGO =====
        catalog_title: "Prodotti",
        filter_all: "Tutti",
        filter_doors: "Porte",
        filter_windows: "Finestre",
        filter_persiane: "Persiane",
        filter_nets: "Zanzariere",

        // ===== NOMI PRODOTTI =====
        product_name_1: "Porta in PVC",
        product_name_2: "Porta in PVC",
        product_name_3: "Porta in PVC",
        product_name_4: "Porta in PVC",
        product_name_5: "Porta in MDF",
        product_name_6: "Porta in MDF",
        product_name_7: "Porta in MDF",
        product_name_8: "Porta in MDF",
        product_name_9: "Porta in MDF con serratura elettronica",
        product_name_10: "Porta EcoRaido",
        product_name_11: "Porta EcoRaido",
        product_name_12: "Porta EcoRaido con serratura elettronica",
        product_name_13: "Porta interna",
        product_name_14: "Porta interna",
        product_name_15: "Porta interna",
        product_name_16: "Porta interna",
        product_name_17: "Finestra in PVC ad un'anta",
        product_name_18: "Finestra in PVC a due ante",
        product_name_19: "Finestra in PVC balcone",
        product_name_20: "Finestra in PVC + persiana bianca",
        product_name_21: "Finestra in PVC + persiana rovere",
        product_name_22: "Persiana in legno",
        product_name_23: "Zanzariera",

        // ===== BOTTONI =====
        btn_sizes: "📋 Dimensioni e prezzi",
        badge_text: "🛠️ Prodotto su ordinazione",
        no_products: "Nessun prodotto trovato",
        modal_title: "Dimensioni e prezzi",
        modal_size: "Dimensioni",
        modal_price: "Prezzo",
        modal_no_data: "Informazioni sulle dimensioni non disponibili",

        // ===== CHI SIAMO =====
        about_title: "Chi siamo",
        about_subtitle: "SSE — Safe Smart Energy",
        about_text1: "Siamo produttori e fornitori di finestre e porte di alta qualità. La nostra azienda opera sul mercato da oltre 10 anni, offrendo soluzioni affidabili ed efficienti dal punto di vista energetico per progetti residenziali e commerciali.",
        about_text2: "Utilizziamo solo materiali e tecnologie moderne per garantire il massimo isolamento termico, sicurezza e durata dei nostri prodotti.",
        about_text3: "I nostri clienti sono persone che apprezzano la qualità, l'affidabilità e lo stile. Siamo orgogliosi di aiutare a creare comfort e intimità in ogni casa.",
        about_text4: "I nostri clienti sono persone che apprezzano la qualità, l'affidabilità e lo stile. Siamo orgogliosi di aiutare a creare comfort e intimità in ogni casa. La vostra casa è in mani sicure.",

        value1_title: "Qualità",
        value1_desc: "Standard e certificazioni europei",
        value2_title: "Affidabilità",
        value2_desc: "Materiali e ferramenta durevoli",
        value3_title: "Miglior prezzo",
        value3_desc: "Buoni prezzi senza compromettere la qualità",
        value4_title: "Efficienza energetica",
        value4_desc: "Alta efficienza energetica dei nostri prodotti",

        // ===== CONTATTI =====
        contact_address_title: "Indirizzo",
        contact_address: "Italia, Scalea (CS), Piazza Garibaldi, 8",
        contact_phone_title: "Telefono",
        contact_email_title: "Email",
        contact_hours_title: "Orario di lavoro",
        contact_hours: "Lun-Ven: 9:00 - 19:00, Sab: 09:00 - 13:00",
        contact_form_title: "Invia messaggio",
        contact_form_btn: "Invia",

        // ===== ORDER CATALOG =====
        order_title: "📄 Prodotti su ordinazione",
        order_subtitle: "Sfoglia il catalogo dei prodotti disponibili su ordinazione",
        order_download: "📥 Scarica il catalogo (PDF)",

        // ===== FAQ =====
        faq_title: "Domande frequenti",
        faq_q1: "Quali finestre installate?",
        faq_a1: "Installiamo finestre in PVC. Qualsiasi dimensione e colore a Scalea.",
        faq_q2: "Fate misurazioni?",
        faq_a2: "Sì, misurazione gratuita sul posto a Scalea.",
        faq_q3: "C'è una garanzia?",
        faq_a3: "Sì, offriamo una garanzia fino a 10 anni su tutte le nostre finestre e porte.",
        faq_q4: "Quanto tempo richiede l'installazione?",
        faq_a4: "L'installazione di finestre e porte richiede solitamente 1-3 giorni a seconda del volume di lavoro.",

        // ===== SEO TESTO =====
        seo_title: "Finestre e porte in Scalea — affidabilità e qualità da SSE",
        seo_text1: "SSE offre un'ampia scelta di finestre e porte a Scalea e in tutta Italia. Lavoriamo con PVC, garantendo alta qualità ed efficienza energetica. I nostri clienti ci apprezzano per affidabilità, stile e prezzi accessibili. Installazione di porte d'ingresso, porte interne, finestre e zanzariere — tutto in un unico posto. Misurazione gratuita e consegna in tutta Scalea.",
        seo_text2: "Telai in PVC, porte blindate, finestre su misura. SSE — il vostro partner affidabile a Scalea.",

        // ===== FOOTER =====
        footer_title: "SEMPRE IN CONTATTO",
        footer_address: "Italia, Scalea (CS), Piazza Garibaldi, 8",
        footer_copyright: "© 2026 Tutti i diritti riservati"
    }
};

// ===== ТЕКУЩИЙ ЯЗЫК =====
let currentLang = localStorage.getItem("lang") || "ru";

// ===== ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ =====
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    // ===== ТЕКСТЫ =====
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // ===== КАРТИНКИ =====
    document.querySelectorAll("[data-i18n-img]").forEach(el => {
        const key = el.dataset.i18nImg;
        if (translations[lang] && translations[lang][key]) {
            el.src = translations[lang][key];
        }
    });

    // ===== КНОПКИ ЯЗЫКА =====
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // ===== ПОДКАТЕГОРИИ =====
    document.querySelectorAll(".subcat-btn").forEach(btn => {
        const key = btn.dataset.i18n;
        if (key && translations[lang] && translations[lang][key]) {
            btn.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    // ===== ОБНОВЛЯЕМ ТОВАРЫ В КАТАЛОГЕ =====
    if (typeof renderProducts === 'function') {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get("category") || "all";
        const subcategory = urlParams.get("subcategory") || null;
        renderProducts(category, subcategory);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setLanguage(currentLang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            setLanguage(this.dataset.lang);
        });
    });
});

console.log("Сайт SSE загружен!");
