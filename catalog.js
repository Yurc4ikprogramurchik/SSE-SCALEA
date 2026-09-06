// =========================================
// ===== ТОВАРЫ С ПОДКАТЕГОРИЯМИ =====
// =========================================

const products = [
    // ===== ДВЕРИ ПВХ =====
    { id: 1, category: "doors", subcategory: "doors-pvc", price: "€600", size: "120x210 см", img: "door-pvc-1.jpg", nameKey: "product_name_1" },
    { id: 2, category: "doors", subcategory: "doors-pvc", price: "€500", size: "87x210 см", img: "door-pvc-2.jpg", nameKey: "product_name_2" },
    { id: 3, category: "doors", subcategory: "doors-pvc", price: "€500", size: "90x210 см", img: "door-pvc-3.jpg", nameKey: "product_name_3" },
    { id: 23, category: "doors", subcategory: "doors-pvc", price: "€500", size: "90x210 см", img: "door-pvc-4.jpg", nameKey: "product_name_4" },

    // ===== ДВЕРИ МДФ =====
    { id: 4, category: "doors", subcategory: "doors-mdf", price: "€600", size: "102x216 см", img: "door-mdf-1.jpg", nameKey: "product_name_5" },
    { id: 5, category: "doors", subcategory: "doors-mdf", price: "€700", size: "92x214 см", img: "door-mdf-2.jpg", nameKey: "product_name_6" },
    { id: 6, category: "doors", subcategory: "doors-mdf", price: "€600", size: "102x216 см", img: "door-mdf-3.jpg", nameKey: "product_name_7" },
    { id: 7, category: "doors", subcategory: "doors-mdf", price: "€600", size: "96x216 см", img: "door-mdf-4.jpg", nameKey: "product_name_8" },
    { id: 8, category: "doors", subcategory: "doors-mdf", price: "€950", size: "82x216 см", img: "door-mdf-5.jpg", nameKey: "product_name_9" },

    // ===== ДВЕРИ ECORAIDO =====
    { id: 9, category: "doors", subcategory: "doors-ecoraido", price: "€850", size: "120x210 см", img: "door-eco-1.jpg", nameKey: "product_name_10" },
    { id: 10, category: "doors", subcategory: "doors-ecoraido", price: "€500", size: "90x210 см", img: "door-eco-2.jpg", nameKey: "product_name_11" },
    { id: 11, category: "doors", subcategory: "doors-ecoraido", price: "€1100", size: "120x210 см", img: "door-eco-4.jpg", nameKey: "product_name_12" },

    // ===== ДВЕРИ МЕЖКОМНАТНЫЕ =====
    { id: 12, category: "doors", subcategory: "doors-interior", price: "€250", size: "70x210,80x210,90x210 см", img: "door-interior-1.jpg", nameKey: "product_name_13" },
    { id: 13, category: "doors", subcategory: "doors-interior", price: "€250", size: "70x210,80x210,90x210 см", img: "door-interior-2.jpg", nameKey: "product_name_14" },
    { id: 14, category: "doors", subcategory: "doors-interior", price: "€100", size: "80x210,90x210 см", img: "door-interior-3.jpg", nameKey: "product_name_15" },
    { id: 15, category: "doors", subcategory: "doors-interior", price: "€250", size: "80x210 см", img: "door-interior-4.jpg", nameKey: "product_name_16" },

    // ===== ОКНА ПВХ =====
    { id: 16, category: "windows", subcategory: "windows-pvc", price: "В наличии", size: "", img: "window-pvc-1.jpg", nameKey: "product_name_17" },
    { id: 17, category: "windows", subcategory: "windows-pvc", price: "В наличии", size: "", img: "window-pvc-2.jpg", nameKey: "product_name_18" },
    { id: 18, category: "windows", subcategory: "windows-pvc", price: "В наличии", size: "", img: "window-pvc-3.jpg", nameKey: "product_name_19" },

    // ===== ОКНА ПВХ + РОЛЕТЫ =====
    { id: 19, category: "windows", subcategory: "windows-roller", price: "Под заказ", size: "", img: "window-roller-1.jpg", nameKey: "product_name_20" },
   

    // ===== ПЕРСИАНЫ =====
    { id: 21, category: "persiane", subcategory: "persiane-all", price: "Под заказ", size: "", img: "persiane-1.jpg", nameKey: "product_name_22" },

    // ===== МОСКИТНЫЕ СЕТКИ =====
    { id: 22, category: "nets", subcategory: "nets-all", price: "Под заказ", size: "", img: "net-1.jpg", nameKey: "product_name_23" },
];

// =========================================
// ===== ДАННЫЕ РАЗМЕРОВ (РУС + ИТАЛ) =====
// =========================================
const sizeData = {
    // ===== РУССКИЕ КЛЮЧИ =====
    "Окно ПВХ одностворчатое": [
        { size: "90 х 220 см", price: "€400" },
        { size: "80x230 см", price: "€350" },
        { size: "80x140 см", price: "€250" },
        { size: "80x110 см", price: "€200" },
        { size: "70x220 см", price: "€250" },
        { size: "60x120 см", price: "€180" },
        { size: "52x120 см", price: "€160" },
        { size: "50x117,5 см", price: "€160" },
    ],
    "Окно ПВХ двухстворчатое": [
        { size: "150x130 см", price: "€300" },
        { size: "130x140 см", price: "€300" },
        { size: "140x140 см", price: "€300" },
        { size: "120x140 см", price: "€250" },
        { size: "100x140 см", price: "€230" },
        { size: "118x148 см", price: "€250" },
    ],
    "Окно ПВХ балконное": [
        { size: "160x230 см", price: "€700" },
        { size: "140x230 см", price: "€600" },
        { size: "140x200 см", price: "€550" },
        { size: "130x220 см", price: "€500" },
        { size: "120x220 см", price: "€450" },
        { size: "100x230 см", price: "€400" },
    ],
    

    // ===== ИТАЛЬЯНСКИЕ КЛЮЧИ =====
    "Finestra in PVC ad un'anta": [
        { size: "90 х 220 см", price: "€400" },
        { size: "80x230 см", price: "€350" },
        { size: "80x140 см", price: "€250" },
        { size: "80x110 см", price: "€200" },
        { size: "70x220 см", price: "€250" },
        { size: "60x120 см", price: "€180" },
        { size: "52x120 см", price: "€160" },
        { size: "50x117,5 см", price: "€160" },
    ],
    "Finestra in PVC a due ante": [
        { size: "150x130 см", price: "€300" },
        { size: "130x140 см", price: "€300" },
        { size: "140x140 см", price: "€300" },
        { size: "120x140 см", price: "€250" },
        { size: "100x140 см", price: "€230" },
        { size: "118x148 см", price: "€250" },
    ],
    "Finestra in PVC balcone": [
        { size: "160x230 см", price: "€700" },
        { size: "140x230 см", price: "€600" },
        { size: "140x200 см", price: "€550" },
        { size: "130x220 см", price: "€500" },
        { size: "120x220 см", price: "€450" },
        { size: "100x230 см", price: "€400" },
    ],
 
};

// =========================================
// ===== ПОЛУЧАЕМ НАЗВАНИЕ ИЗ ПЕРЕВОДА =====
// =========================================
function getProductName(nameKey) {
    if (currentLang && translations[currentLang] && translations[currentLang][nameKey]) {
        return translations[currentLang][nameKey];
    }
    return nameKey;
}

function getCategoryLabel(category) {
    const labels = { "doors": "Двери", "windows": "Окна", "persiane": "Персианы", "nets": "Москитные сетки" };
    const labelsIt = { "doors": "Porte", "windows": "Finestre", "persiane": "Persiane", "nets": "Zanzariere" };
    if (currentLang === 'it') return labelsIt[category] || category;
    return labels[category] || category;
}

function getBadgeText() {
    return currentLang === 'it' ? "🛠️ Prodotto su ordinazione" : "🛠️ Изготовление под заказ";
}

function getBtnSizesText() {
    return currentLang === 'it' ? "📋 Dimensioni e prezzi" : "📋 Размеры и цены";
}

function getNoProductsText() {
    return currentLang === 'it' ? "Nessun prodotto trovato" : "Товары не найдены";
}

function getPriceText(price) {
    if (price === "В наличии") return currentLang === 'it' ? "In stock" : "В наличии";
    if (price === "Под заказ") return currentLang === 'it' ? "Su ordinazione" : "Под заказ";
    return price;
}

// =========================================
// ===== ПОЛУЧАЕМ ПАРАМЕТРЫ ИЗ URL =====
// =========================================
const urlParams = new URLSearchParams(window.location.search);
const categoryFilter = urlParams.get("category") || "all";
const subcategoryFilter = urlParams.get("subcategory") || null;

// =========================================
// ===== ОТОБРАЖЕНИЕ ТОВАРОВ =====
// =========================================
function renderProducts(category, subcategory) {
    const grid = document.getElementById("catalogGrid");
    if (!grid) return;

    let filtered = products;

    if (category && category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    if (subcategory) {
        filtered = filtered.filter(p => p.subcategory === subcategory);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-products">${getNoProductsText()}</p>`;
        return;
    }

    const badgeSubcategories = ["windows-pvc", "windows-roller", "persiane-all", "nets-all"];
    const badgeCategories = ["persiane", "nets"];

    let showBadge = false;

    if (subcategory && badgeSubcategories.includes(subcategory)) showBadge = true;
    if (category && badgeCategories.includes(category) && !subcategory) showBadge = true;
    if (category === "windows" && !subcategory) showBadge = true;

    let html = "";

    if (showBadge) {
        html += `<div class="subcategory-badge"><span>${getBadgeText()}</span><div class="badge-social"><a href="https://t.me/SSE_Scalea" class="badge-social-link" target="_blank" title="Telegram"><img src="icons8-telegram-logo-101.png" alt="Telegram"></a><a href="https://www.tiktok.com/@blindati.infissi" class="badge-social-link" target="_blank" title="TikTok"><img src="icons8-tiktok-100.png" alt="TikTok"></a><a href="https://wa.me/qr/GWACPUALYYKND1" class="badge-social-link" target="_blank" title="WhatsApp"><img src="icons8-whatsapp-logo-100.png" alt="WhatsApp"></a></div></div>`;
    }

    html += filtered.map(product => {
        const name = getProductName(product.nameKey);
        const sizeDataForProduct = sizeData[name] || sizeData[product.nameKey];
        const priceText = getPriceText(product.price);
        return `
            <div class="catalog-card" data-category="${product.category}" data-subcategory="${product.subcategory}" data-name="${name}">
                <img src="${product.img}" alt="${name}">
                <h3>${name}</h3>
                <p class="product-size"> ${product.size}</p>
                <p class="price">${priceText}</p>
                <span class="category-tag">${getCategoryLabel(product.category)}</span>
                ${sizeDataForProduct ? `<button class="size-btn" data-name="${name}">${getBtnSizesText()}</button>` : ''}
            </div>
        `;
    }).join("");

    grid.innerHTML = html;

    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            const name = this.dataset.name;
            openModal(name);
        });
    });

    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(4, 1fr)";
    grid.style.gap = "25px";
}

// =========================================
// ===== МОДАЛЬНОЕ ОКНО =====
// =========================================
function openModal(productName) {
    const overlay = document.getElementById("modalOverlay");
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    if (!overlay) return;

    const modalTitle = currentLang === 'it' ? 'Dimensioni e prezzi' : 'Размеры и цены';
    title.textContent = productName + " — " + modalTitle;

    const data = sizeData[productName];
    if (data) {
        const sizeLabel = currentLang === 'it' ? 'Dimensioni' : 'Размер';
        const priceLabel = currentLang === 'it' ? 'Prezzo' : 'Цена';
        let html = `<table class="size-table"><thead><tr><th>${sizeLabel}</th><th>${priceLabel}</th></tr></thead><tbody>`;
        data.forEach(item => {
            html += `<tr><td>${item.size}</td><td>${item.price}</td></tr>`;
        });
        html += `</tbody></table>`;
        body.innerHTML = html;
    } else {
        const noData = currentLang === 'it' ? 'Informazioni sulle dimensioni non disponibili' : 'Информация о размерах отсутствует';
        body.innerHTML = `<p>${noData}</p>`;
    }

    overlay.classList.add("active");
}

function closeModal() {
    const overlay = document.getElementById("modalOverlay");
    if (overlay) overlay.classList.remove("active");
}

// =========================================
// ===== ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА =====
// =========================================
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("modalClose")?.addEventListener("click", closeModal);
    document.getElementById("modalOverlay")?.addEventListener("click", function(e) {
        if (e.target === this) closeModal();
    });

    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const category = this.dataset.category;
            setActiveCategory(category);
            renderProducts(category, null);
        });
    });

    document.querySelectorAll(".subcat-btn").forEach(btn => {
        btn.addEventListener("click", function() {
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
// ===== ПЕРЕКЛЮЧЕНИЕ КАТЕГОРИЙ =====
// =========================================
const noSubcategories = ["persiane", "nets"];

function setActiveCategory(category) {
    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === category);
    });

    const subcategoriesContainer = document.getElementById("subcategories");

    if (category === "all" || noSubcategories.includes(category)) {
        subcategoriesContainer.style.display = "none";
        document.querySelectorAll(".subcat-btn").forEach(btn => {
            btn.classList.remove("active");
        });
        const url = new URL(window.location);
        url.searchParams.delete("subcategory");
        window.history.pushState({}, "", url);
    } else {
        subcategoriesContainer.style.display = "flex";
        document.querySelectorAll(".subcategory-group").forEach(group => {
            const parent = group.dataset.parent;
            if (parent === category) {
                group.style.display = "flex";
            } else {
                group.style.display = "none";
            }
        });
    }

    const url = new URL(window.location);
    url.searchParams.set("category", category);
    window.history.pushState({}, "", url);
}

function setActiveSubcategory(subcategory) {
    document.querySelectorAll(".subcat-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.subcategory === subcategory);
    });

    const url = new URL(window.location);
    url.searchParams.set("subcategory", subcategory);
    window.history.pushState({}, "", url);

    renderProducts(urlParams.get("category"), subcategory);
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
        document.querySelectorAll(".subcat-btn").forEach(btn => {
            if (btn.dataset.subcategory === subcategory) {
                btn.classList.add("active");
            }
        });
        renderProducts(parentCategory, subcategory);
    }
}