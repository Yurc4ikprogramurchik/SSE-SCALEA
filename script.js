// =========================================
// SSE Scalea
// Общий JS для отдельных RU / IT страниц
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // Определяем язык по URL.
    // /it/... = итальянская версия
    // все остальные страницы = русская версия
    const isItalian =
        window.location.pathname === "/it" ||
        window.location.pathname.startsWith("/it/");

    const currentLang = isItalian ? "it" : "ru";

    // Устанавливаем корректный lang у HTML
    document.documentElement.lang = currentLang;

    // Подсвечиваем активную кнопку языка
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
        const btnLang = btn.dataset.lang;

        if (btnLang) {
            btn.classList.toggle("active", btnLang === currentLang);
        }
    });

});


// =========================================
// Данные, необходимые catalog.js
// =========================================

const translations = {

    ru: {
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

        product_name_13: "Межкомнатная дверь",
        product_name_14: "Межкомнатная дверь",
        product_name_15: "Межкомнатная дверь",
        product_name_16: "Межкомнатная дверь",

        product_name_17: "Окно ПВХ одностворчатое",
        product_name_18: "Окно ПВХ двухстворчатое",
        product_name_19: "Окно ПВХ балконное",

        product_name_20: "Окно ПВХ + роллета",
        product_name_21: "Окно ПВХ + роллета дуб",

        product_name_22: "Алюминиевая персиана",
        product_name_23: "Москитная сетка"
    },


    it: {
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

        product_name_20: "Finestra in PVC con tapparella bianca",
        product_name_21: "Finestra in PVC con tapparella effetto rovere",

        product_name_22: "Persiana in alluminio",
        product_name_23: "Zanzariera"
    }

};


// =========================================
// Язык для catalog.js
// =========================================

const currentLang =
    window.location.pathname === "/it" ||
    window.location.pathname.startsWith("/it/")
        ? "it"
        : "ru";


console.log(
    "SSE Scalea loaded:",
    currentLang.toUpperCase()
);