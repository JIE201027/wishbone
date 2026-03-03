// ==========================================
// 🛒 1. 商品資料庫 (以後改內容、加商品，只改這裡！)
// ==========================================
const productData = {
    "m01": {
        name: "正版馴龍高手磁吸吊飾",
        price: 580,
        desc: "環球影城限定款，沒買到會垂心肝的可愛小東西。",

        // 使用反引號 ` 開頭與結尾，裡面可以直接換行
        modalDesc: `(1) 材質：聚酯纖維
        (2) 公仔｜尺寸：約長 6、寬 8、高 8.5cm
        (3) 掛鍊｜尺寸：約高 5cm

        注意：商品為手工測量，可能會有 1cm～2cm 左右誤差。商品照與實品顏色可能會有色差，以實物為準！`, // 彈窗用的詳細文字

        features: [
            "✅ 環球 Potdemiel 蜂蜜罐正版",
            "✅ 磁吸式吊飾，可分開、可黏 TT",
            "✅ 24 小時出貨，台灣現貨不用等"
        ],
        images: [
            "img/馴龍高手/189.png",
            "img/馴龍高手/190.png",
            "img/馴龍高手/191.png",
            "img/馴龍高手/192.png"
        ]
    },
    "m02": {
        name: "8 號球簡約植絨地毯",
        price: 480,
        desc: "簡約植絨美式地毯，有質感的居家裝飾。",

        // 使用反引號 ` 開頭與結尾，裡面可以直接換行
        modalDesc: `(1) 顏色：簡約黑
        (2) 尺寸：60*60cm
        
        注意：商品為手工測量，可能會有 1cm～2cm 左右誤差。商品照與實品顏色可能會有色差，以實物為準！`, // 彈窗用的詳細文字

        features: [
            "✅ 優選植絨：輕膚、觸感舒適、不易掉毛",
            "✅ TPR 乳膠底面：吸水防滑、安全耐用",
            "✅ 24 小時出貨，台灣現貨不用等"
        ],
        images: [
            "img/地毯/8 號球/129.png",
            "img/地毯/8 號球/IMG_0693.jpg",
            "img/地毯/8 號球/O1CN01aLzreD1dhKkfQEl8A_!!2213217363767-0-cib.jpg",
            "img/地毯/8 號球/O1CN01oaSJwg1dhKkUVGdkC_!!2213217363767-0-cib.jpg"
        ]
    },
    "m03": {
        name: "YOU LOOK GOOD 植絨地毯",
        price: 480,
        desc: "請每天重複告訴自己：I LOOK GOOD！",

        // 使用反引號 ` 開頭與結尾，裡面可以直接換行
        modalDesc: `(1) 顏色：黑色、米綠色
        (2) 尺寸：54*64 cm
        
        注意：商品為手工測量，可能會有 1cm～2cm 左右誤差。商品照與實品顏色可能會有色差，以實物為準！`, // 彈窗用的詳細文字

        // 增加選項欄位
        colorOptions: ["簡約黑", "米綠色"],

        features: [
            "✅ 優選植絨：輕膚、觸感舒適、不易掉毛",
            "✅ TPR 乳膠底面：吸水防滑、安全耐用",
            "✅ 24 小時出貨，台灣現貨不用等"
        ],
        images: [
            "img/地毯/You look good/130.png",
            "img/地毯/You look good/131.png",
            "img/地毯/You look good/130.png",
            "img/地毯/You look good/130.png"
        ]
    },
    "m04": {
        name: "暖呼呼毛毛拖",
        price: 480,
        desc: "室內室外皆可穿，冬天不再怕腳冷！",

        // 使用反引號 ` 開頭與結尾，裡面可以直接換行
        modalDesc: `(1) 材質：棉 / 橡膠
        (2) 鞋跟高約：2cm
        
        注意：商品為手工測量，可能會有 1cm～2cm 左右誤差。商品照與實品顏色可能會有色差，以實物為準！`, // 彈窗用的詳細文字

        // 增加顏色選項欄位
        colorOptions: ["米白色", "奶茶色", "經典駝色"],

        // 增加尺寸選項欄位
        sizeOptions: ["36-37（適合22.5-23cm）", "38-39（適合23.5-24cm）", "40-41（適合24.5-25cm）", "42-43（適合25.5-26cm）"],

        features: [
            "✅ 保暖、親膚、舒適，溫暖您整個冬天",
            "✅ 加厚毛絨、時尚簡約，三種顏色可選",
            "✅ 24 小時出貨，台灣現貨不用等"
        ],
        images: [
            "img/暖呼呼毛毛拖/209.png",
            "img/暖呼呼毛毛拖/210.png",
            "img/暖呼呼毛毛拖/219.png",
            "img/暖呼呼毛毛拖/211.png",
            "img/暖呼呼毛毛拖/212.png",
            "img/暖呼呼毛毛拖/213.png",
            "img/暖呼呼毛毛拖/214.png",
            "img/暖呼呼毛毛拖/215.png",
            "img/暖呼呼毛毛拖/216.png",
            "img/暖呼呼毛毛拖/217.png",
            "img/暖呼呼毛毛拖/218.png"
        ]
    },
    "m05": {
        name: "手包式筆袋折疊椅",
        price: 200,
        desc: "出門隨身攜帶，逛街、排隊不再腳酸！",

        // 使用反引號 ` 開頭與結尾，裡面可以直接換行
        modalDesc: `(1) 重量：480g
        (2) 材質：金屬、牛津布
        (3) 摺疊尺寸：約長 27、寬 10.5、高 7cm
        (4) 展開尺寸：約長 27、寬 24、高 27cm
        
        注意：商品為手工測量，可能會有 1cm～2cm 左右誤差。商品照與實品顏色可能會有色差，以實物為準！`, // 彈窗用的詳細文字

        // 增加顏色選項欄位
        colorOptions: ["黑色", "卡其色"],

        features: [
            "✅ 超小體積，方便隨身攜帶",
            "✅ 輕鬆組裝，野餐、排隊都適合",
            "✅ 24 小時出貨，台灣現貨不用等"
        ],
        images: [
            "img/手包式折疊椅/197.png",
            "img/手包式折疊椅/201.png",
            "img/手包式折疊椅/202.png",
            "img/手包式折疊椅/198.png",
            "img/手包式折疊椅/199.png",
            "img/手包式折疊椅/200.png",
            "img/手包式折疊椅/204.png"
        ]
    },
    "m06": {
        name: "外星人 3D 公仔",
        price: 200,
        desc: "簡約植絨美式地毯，有質感的居家裝飾。",

        // 使用反引號 ` 開頭與結尾，裡面可以直接換行
        modalDesc: `(1) 材質：PLA
        (2) 尺寸：約高 22.8cm、寬 7.6cm
        (3) 重量：150g
        
        注意：商品為手工測量，可能會有 1cm～2cm 左右誤差。商品照與實品顏色可能會有色差，以實物為準！`, // 彈窗用的詳細文字

        features: [
            "✅ 可坐可躺、擬真可愛",
            "✅ 全身關節可動、多種姿勢可擺",
            "✅ 24 小時出貨，台灣現貨不用等"
        ],
        images: [
            "img/外星人3D公仔/19.png",
            "img/外星人3D公仔/20.png",
            "img//外星人3D公仔/21.png",
            "img//外星人3D公仔/22.png",
            "/外星人3D公仔/23.png",
            "/外星人3D公仔/O1CN01sFAufZ2FCbqvTYP3M_!!2217503348844-0-cib.jpg"
        ]
    },
};

let cart = [];

// ==========================================
// 🏗️ 2. 初始化與自動渲染
// ==========================================
function init() {
    renderProducts(); // 第一步：自動把資料庫變成 HTML 卡片
    render();         // 第二步：初始化購物車狀態
}

// 自動生成首頁商品卡片
function renderProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    productList.innerHTML = Object.keys(productData).map(id => {
        const p = productData[id];
        // 處理優點清單 <li>
        const featureHtml = p.features.map(f => `<li>${f}</li>`).join('');

        return `
            <div class="col-md-6 col-lg-4">
                <div class="product-item">
                    <div class="img-wrapper mb-3" onclick="openProductModal('${id}')">
                        <img src="${p.images[0]}" alt="${p.name}">
                        <button class="add-to-cart-overlay add-to-cart" data-id="${id}">加入購物車</button>
                    </div>
                    <h5 class="p-name fw-bold">${p.name}</h5>
                    <p class="text-muted small px-3">${p.desc}</p>
                    
                    <ul>
                        ${featureHtml}
                    </ul>

                    <span class="p-price-display fw-bold">NT$ <span class="p-price">${p.price}</span></span>
                </div>
            </div>
        `;
    }).join('');

    // 渲染完後，才綁定「加入購物車」按鈕點擊事件 (因為按鈕是動態生成的)
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation(); // 阻止觸發彈窗
            const id = btn.dataset.id;
            addToCart({ id, name: productData[id].name, price: productData[id].price });
        };
    });
}

// 1. 在 JS 最上方定義兩個變數，紀錄目前的選取狀態
let selectedColor = "";
let selectedSize = "";

// ==========================================
// 🖼️ 3. 詳情彈窗邏輯 (支援 顏色 + 尺寸)
// ==========================================
function openProductModal(id) {
    const data = productData[id];
    if (!data) return;

    // A. 重置選中狀態
    selectedColor = "";
    selectedSize = "";

    // B. 基本內容填充
    document.getElementById('modal-title').innerText = data.name;
    document.getElementById('modal-price').innerText = `NT$ ${data.price}`;
    document.getElementById('modal-desc').innerText = data.modalDesc || data.desc;

    // C. 渲染顏色選項 (Color Options)
    const colorWrapper = document.getElementById('modal-color-wrapper');
    const colorBtns = document.getElementById('modal-color-btns');
    if (data.colorOptions && data.colorOptions.length > 0) {
        colorWrapper.style.display = 'block';
        colorBtns.innerHTML = data.colorOptions.map(opt => `
            <button type="button" class="btn btn-outline-dark btn-sm option-btn" 
                    onclick="selectColorOption(this, '${opt}')">${opt}</button>
        `).join('');
    } else {
        colorWrapper.style.display = 'none';
    }

    // D. 渲染尺寸選項 (Size Options)
    const sizeWrapper = document.getElementById('modal-size-wrapper');
    const sizeBtns = document.getElementById('modal-size-btns');
    if (data.sizeOptions && data.sizeOptions.length > 0) {
        sizeWrapper.style.display = 'block';
        sizeBtns.innerHTML = data.sizeOptions.map(opt => `
            <button type="button" class="btn btn-outline-dark btn-sm option-btn" 
                    onclick="selectSizeOption(this, '${opt}')">${opt}</button>
        `).join('');
    } else {
        sizeWrapper.style.display = 'none';
    }

    // E. 渲染圖片輪播
    const carouselInner = document.getElementById('modal-images');
    carouselInner.innerHTML = data.images.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100 modal-main-img" alt="${data.name}">
        </div>
    `).join('');

    // F. 加入購物袋按鈕邏輯
    document.getElementById('modal-add-btn').onclick = () => {
        // 防呆檢查
        if (data.colorOptions && !selectedColor) { alert("請選擇顏色！"); return; }
        if (data.sizeOptions && !selectedSize) { alert("請選擇尺寸！"); return; }

        // 組合最終規格字串：例如 (米白色 / 38-39)
        let specs = [];
        if (selectedColor) specs.push(selectedColor);
        if (selectedSize) specs.push(selectedSize);

        const finalName = specs.length > 0 ? `${data.name} (${specs.join(' / ')})` : data.name;

        addToCart({
            id: id,
            name: finalName,
            price: data.price
        });

        const modalEl = document.getElementById('productModal');
        bootstrap.Modal.getOrCreateInstance(modalEl).hide();
    };

    const modalEl = document.getElementById('productModal');
    bootstrap.Modal.getOrCreateInstance(modalEl).show();
}

// ==========================================
// 輔助函式：處理按鈕點擊樣式
// ==========================================
function selectColorOption(btn, value) {
    selectedColor = value;
    updateOptionUI(btn);
}

function selectSizeOption(btn, value) {
    selectedSize = value;
    updateOptionUI(btn);
}

// 共用樣式更新邏輯
function updateOptionUI(btnElement) {
    const allBtns = btnElement.parentElement.querySelectorAll('.option-btn');
    allBtns.forEach(b => {
        b.classList.remove('active', 'btn-dark');
        b.classList.add('btn-outline-dark');
    });
    btnElement.classList.add('active', 'btn-dark');
    btnElement.classList.remove('btn-outline-dark');
}

// ==========================================
// 🛒 4. 購物車邏輯 (核心功能)
// ==========================================
function addToCart(item) {
    cart.push(item);
    render();

    // 購物車圖示跳動動畫
    const cartIcon = document.querySelector('.nav-link.position-relative');
    cartIcon.classList.add('cart-bounce');
    setTimeout(() => cartIcon.classList.remove('cart-bounce'), 400);
}

function render() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total');
    const countDisplay = document.getElementById('cart-count');
    const summaryInput = document.getElementById('cart_summary');

    countDisplay.innerText = cart.length;

    if (cart.length === 0) {
        cartList.innerHTML = '<p class="text-center text-muted">清單目前是空的</p>';
        totalDisplay.innerText = '0';
        if (summaryInput) summaryInput.value = "";
        return;
    }

    cartList.innerHTML = cart.map((item, index) => `
        <div class="cart-item-row">
            <div>
                <span class="fw-bold">${item.name}</span>
                <button class="btn-remove ms-2" onclick="removeItem(${index})">移除</button>
            </div>
            <span>NT$ ${item.price}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDisplay.innerText = total.toLocaleString();

    if (summaryInput) summaryInput.value = cart.map(i => i.name).join(', ');
}

function removeItem(index) {
    cart.splice(index, 1);
    render();
}

document.addEventListener('DOMContentLoaded', init);