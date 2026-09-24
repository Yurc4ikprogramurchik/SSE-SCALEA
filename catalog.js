// =========================================
// SSE SCALEA — CATALOGO IT
// =========================================

const products = [
    // PORTE PVC
    { id: 1, category: "doors", subcategory: "doors-pvc", price: "€600", size: "120x210 cm", img: "../door-pvc-1.jpg", name: "Porta in PVC" },
    { id: 2, category: "doors", subcategory: "doors-pvc", price: "€500", size: "87x210 cm", img: "../door-pvc-2.jpg", name: "Porta in PVC" },
    { id: 3, category: "doors", subcategory: "doors-pvc", price: "€500", size: "90x210 cm", img: "../door-pvc-3.jpg", name: "Porta in PVC" },
    { id: 23, category: "doors", subcategory: "doors-pvc", price: "€500", size: "90x210 cm", img: "../door-pvc-4.jpg", name: "Porta in PVC" },

    // PORTE MDF
    { id: 4, category: "doors", subcategory: "doors-mdf", price: "€600", size: "102x216 cm", img: "../door-mdf-1.jpg", name: "Porta in MDF" },
    { id: 5, category: "doors", subcategory: "doors-mdf", price: "€700", size: "92x214 cm", img: "../door-mdf-2.jpg", name: "Porta in MDF" },
    { id: 6, category: "doors", subcategory: "doors-mdf", price: "€600", size: "102x216 cm", img: "../door-mdf-3.jpg", name: "Porta in MDF" },
    { id: 7, category: "doors", subcategory: "doors-mdf", price: "€600", size: "96x216 cm", img: "../door-mdf-4.jpg", name: "Porta in MDF" },
    { id: 8, category: "doors", subcategory: "doors-mdf", price: "€950", size: "82x216 cm", img: "../door-mdf-5.jpg", name: "Porta in MDF con serratura elettronica" },

    // PORTE ECORAIDO
    { id: 9, category: "doors", subcategory: "doors-ecoraido", price: "€850", size: "120x210 cm", img: "../door-eco-1.jpg", name: "Porta EcoRaido" },
    { id: 10, category: "doors", subcategory: "doors-ecoraido", price: "€500", size: "90x210 cm", img: "../door-eco-2.jpg", name: "Porta EcoRaido" },
    { id: 11, category: "doors", subcategory: "doors-ecoraido", price: "€1100", size: "120x210 cm", img: "../door-eco-4.jpg", name: "Porta EcoRaido con serratura elettronica" },

    // PORTE INTERNE
    { id: 12, category: "doors", subcategory: "doors-interior", price: "€250", size: "70x210,80x210,90x210 cm", img: "../door-interior-1.jpg", name: "Porta interna" },
    { id: 13, category: "doors", subcategory: "doors-interior", price: "€250", size: "70x210,80x210,90x210 cm", img: "../door-interior-2.jpg", name: "Porta interna" },
    { id: 14, category: "doors", subcategory: "doors-interior", price: "€100", size: "80x210,90x210 cm", img: "../door-interior-3.jpg", name: "Porta interna" },
    { id: 15, category: "doors", subcategory: "doors-interior", price: "€250", size: "80x210 cm", img: "../door-interior-4.jpg", name: "Porta interna" },

    // FINESTRE PVC
    { id: 16, category: "windows", subcategory: "windows-pvc", price: "Disponibile", size: "", img: "../window-pvc-1.jpg", name: "Finestra in PVC ad un'anta" },
    { id: 17, category: "windows", subcategory: "windows-pvc", price: "Disponibile", size: "", img: "../window-pvc-2.jpg", name: "Finestra in PVC a due ante" },
    { id: 18, category: "windows", subcategory: "windows-pvc", price: "Disponibile", size: "", img: "../window-pvc-3.jpg", name: "Portafinestra in PVC" },

    // FINESTRE + TAPPARELLE
    { id: 19, category: "windows", subcategory: "windows-roller", price: "Su ordinazione", size: "", img: "../window-roller-1.jpg", name: "Finestra in PVC con tapparella" },

    // PERSIANE
    { id: 21, category: "persiane", subcategory: "persiane-all", price: "Su ordinazione", size: "", img: "../persiane-1.jpg", name: "Persiana in alluminio" },

    // ZANZARIERE
    { id: 22, category: "nets", subcategory: "nets-all", price: "Su ordinazione", size: "", img: "../net-1.jpg", name: "Zanzariera" }
];


// =========================================
// MISURE E PREZZI
// =========================================

const sizeData = {
    "Finestra in PVC ad un'anta": [
        { size: "90 x 220 cm", price: "€400" },
        { size: "80x230 cm", price: "€350" },
        { size: "80x140 cm", price: "€250" },
        { size: "80x110 cm", price: "€200" },
        { size: "70x220 cm", price: "€250" },
        { size: "60x120 cm", price: "€180" },
        { size: "52x120 cm", price: "€160" },
        { size: "50x117,5 cm", price: "€160" }
    ],

    "Finestra in PVC a due ante": [
        { size: "150x130 cm", price: "€300" },
        { size: "130x140 cm", price: "€300" },
        { size: "140x140 cm", price: "€300" },
        { size: "120x140 cm", price: "€250" },
        { size: "100x140 cm", price: "€230" },
        { size: "118x148 cm", price: "€250" }
    ],

    "Portafinestra in PVC": [
        { size: "160x230 cm", price: "€700" },
        { size: "140x230 cm", price: "€600" },
        { size: "140x200 cm", price: "€550" },
        { size: "130x220 cm", price: "€500" },
        { size: "120x220 cm", price: "€450" },
        { size: "100x230 cm", price: "€400" }
    ]
};


// =========================================
// TESTI CATALOGO IT
// =========================================

function getCategoryLabel(category) {
    const labels = {
        doors: "Porte",
        windows: "Finestre",
        persiane: "Persiane",
        nets: "Zanzariere"
    };

    return labels[category] || category;
}

function getBadgeText() {
    return "🛠️ Prodotto su ordinazione";
}

function getBtnSizesText() {
    return "📋 Misure e prezzi";
}

function getNoProductsText() {
    return "Nessun prodotto trovato";
}


// =========================================
// URL
// =========================================

const urlParams = new URLSearchParams(window.location.search);


// =========================================
// VISUALIZZAZIONE PRODOTTI
// =========================================

function renderProducts(category, subcategory) {
    const grid = document.getElementById("catalogGrid");

    if (!grid) return;

    let filtered = products;

    if (category && category !== "all") {
        filtered = filtered.filter(product => product.category === category);
    }

    if (subcategory) {
        filtered = filtered.filter(product => product.subcategory === subcategory);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-products">${getNoProductsText()}</p>`;
        return;
    }

    const badgeSubcategories = [
        "windows-pvc",
        "windows-roller",
        "persiane-all",
        "nets-all"
    ];

    const badgeCategories = ["persiane", "nets"];

    let showBadge = false;

    if (subcategory && badgeSubcategories.includes(subcategory)) {
        showBadge = true;
    }

    if (category && badgeCategories.includes(category) && !subcategory) {
        showBadge = true;
    }

    if (category === "windows" && !subcategory) {
        showBadge = true;
    }

    let html = "";

    if (showBadge) {
        html += `
            <div class="subcategory-badge">
                <span>${getBadgeText()}</span>

                <div class="badge-social">
                    <a href="https://t.me/SSE_Scalea"
                       class="badge-social-link"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="Telegram">
                        <img src="../icons8-telegram-logo-101.png" alt="Telegram">
                    </a>

                    <a href="https://www.tiktok.com/@blindati.infissi"
                       class="badge-social-link"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="TikTok">
                        <img src="../icons8-tiktok-100.png" alt="TikTok">
                    </a>

                    <a href="https://wa.me/393792275566"
                       class="badge-social-link"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="WhatsApp">
                        <img src="../icons8-whatsapp-logo-100.png" alt="WhatsApp">
                    </a>
                </div>
            </div>
        `;
    }

    html += filtered.map(product => {

        const name = product.name;
        const sizeDataForProduct = sizeData[name];

        return `
            <div class="catalog-card"
                 data-category="${product.category}"
                 data-subcategory="${product.subcategory}"
                 data-name="${name}">

                <img src="${product.img}" alt="${name}">

                <h3>${name}</h3>

                <p class="product-size">${product.size}</p>

                <p class="price">${product.price}</p>

                <span class="category-tag">
                    ${getCategoryLabel(product.category)}
                </span>

                ${
                    sizeDataForProduct
                        ? `<button class="size-btn" data-name="${name}">
                               ${getBtnSizesText()}
                           </button>`
                        : ""
                }

            </div>
        `;
    }).join("");

    grid.innerHTML = html;

    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            openModal(this.dataset.name);
        });
    });

    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(4, 1fr)";
    grid.style.gap = "25px";
}


// =========================================
// FINESTRA MODALE
// =========================================

function openModal(productName) {
    const overlay = document.getElementById("modalOverlay");
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    if (!overlay || !title || !body) return;

    title.textContent = productName + " — Misure e prezzi";

    const data = sizeData[productName];

    if (data) {
        let html = `
            <table class="size-table">
                <thead>
                    <tr>
                        <th>Misura</th>
                        <th>Prezzo</th>
                    </tr>
                </thead>
                <tbody>
        `;

        data.forEach(item => {
            html += `
                <tr>
                    <td>${item.size}</td>
                    <td>${item.price}</td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;

        body.innerHTML = html;

    } else {
        body.innerHTML =
            `<p>Informazioni sulle misure non disponibili</p>`;
    }

    overlay.classList.add("active");
}


function closeModal() {
    const overlay = document.getElementById("modalOverlay");

    if (overlay) {
        overlay.classList.remove("active");
    }
}


// =========================================
// CARICAMENTO PAGINA
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    document
        .getElementById("modalClose")
        ?.addEventListener("click", closeModal);

    document
        .getElementById("modalOverlay")
        ?.addEventListener("click", function (e) {
            if (e.target === this) {
                closeModal();
            }
        });


    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const category = this.dataset.category;

            setActiveCategory(category);
            renderProducts(category, null);
        });
    });


    document.querySelectorAll(".subcat-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const subcategory = this.dataset.subcategory;

            setActiveSubcategory(subcategory);
        });
    });


    const category = urlParams.get("category") || "all";
    const subcategory = urlParams.get("subcategory") || null;

    setActiveCategory(category);

    if (subcategory) {
        autoOpenSubcategory(subcategory);
    } else {
        renderProducts(category, null);
    }
});


// =========================================
// CATEGORIE
// =========================================

const noSubcategories = [
    "persiane",
    "nets"
];


function setActiveCategory(category) {

    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.classList.toggle(
            "active",
            btn.dataset.category === category
        );
    });

    const subcategoriesContainer =
        document.getElementById("subcategories");

    if (!subcategoriesContainer) return;


    if (
        category === "all" ||
        noSubcategories.includes(category)
    ) {

        subcategoriesContainer.style.display = "none";

        document.querySelectorAll(".subcat-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        const url = new URL(window.location);
        url.searchParams.delete("subcategory");

        window.history.pushState({}, "", url);

    } else {

        subcategoriesContainer.style.display = "flex";

        document
            .querySelectorAll(".subcategory-group")
            .forEach(group => {

                group.style.display =
                    group.dataset.parent === category
                        ? "flex"
                        : "none";
            });
    }


    const url = new URL(window.location);

    url.searchParams.set("category", category);

    window.history.pushState({}, "", url);
}


function setActiveSubcategory(subcategory) {

    document.querySelectorAll(".subcat-btn").forEach(btn => {
        btn.classList.toggle(
            "active",
            btn.dataset.subcategory === subcategory
        );
    });

    const url = new URL(window.location);

    url.searchParams.set("subcategory", subcategory);

    window.history.pushState({}, "", url);

    const category =
        url.searchParams.get("category") || "all";

    renderProducts(category, subcategory);
}


function autoOpenSubcategory(subcategory) {

    let parentCategory = null;

    for (const product of products) {

        if (product.subcategory === subcategory) {
            parentCategory = product.category;
            break;
        }
    }

    if (parentCategory) {

        setActiveCategory(parentCategory);

        document
            .querySelectorAll(".subcat-btn")
            .forEach(btn => {

                if (btn.dataset.subcategory === subcategory) {
                    btn.classList.add("active");
                }
            });

        renderProducts(parentCategory, subcategory);
    }
}