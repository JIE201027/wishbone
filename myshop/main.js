// 強力防止網址出現純井字號
window.addEventListener('hashchange', function (e) {
    if (window.location.hash === '#/' || window.location.hash === '#') {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
});

// 初始化時如果已經有 #，立刻清除
if (window.location.hash === '#/' || window.location.hash === '#') {
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
}


// ==========================================
// 🛒 1. 商品資料庫 (以後改內容、加商品，只改這裡！)
// ==========================================

// 將原本的 productData 改名為 defaultProductData
const defaultProductData = {
    "m01": {
        name: "正版馴龍高手磁吸吊飾",
        category: "bestseller",
        price: 580,
        desc: "環球影城限定款，沒買到會垂心肝的可愛小東西。",

        // 使用反引號 ` 開頭與結尾，裡面可以直接換行
        modalDesc: `(1) 材質：聚酯纖維
(2) 公仔｜尺寸：約長 6、寬 8、高 8.5cm
(3) 掛鍊｜尺寸：約高 5cm

注意：商品為手工測量，可能會有 1cm～2cm 左右誤差。商品照與實品顏色可能會有色差，以實物為準！`, // 彈窗用的詳細文字

        features: [
            "環球 Potdemiel 蜂蜜罐正版",
            "磁吸式吊飾，可分開、可黏 TT",
            "24 小時出貨，台灣現貨不用等"
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
        category: "bestseller",
        price: 480,
        desc: "簡約美式地毯，有質感的居家裝飾。",

        // 使用反引號 ` 開頭與結尾，裡面可以直接換行
        modalDesc: `(1) 顏色：簡約黑
(2) 尺寸：60*60cm
        
注意：商品為手工測量，可能會有 1cm～2cm 左右誤差。商品照與實品顏色可能會有色差，以實物為準！`, // 彈窗用的詳細文字

        features: [
            "優選植絨：輕膚、觸感舒適、不易掉毛",
            "TPR 乳膠底面：吸水防滑、安全耐用",
            "24 小時出貨，台灣現貨不用等"
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
        category: "bestseller",
        price: 480,
        desc: "請每天重複告訴自己：I LOOK GOOD！",

        // 使用反引號 ` 開頭與結尾，裡面可以直接換行
        modalDesc: `(1) 顏色：黑色、米綠色
(2) 尺寸：54*64 cm
        
注意：商品為手工測量，可能會有 1cm～2cm 左右誤差。商品照與實品顏色可能會有色差，以實物為準！`, // 彈窗用的詳細文字

        // 增加選項欄位
        colorOptions: ["簡約黑", "米綠色"],

        features: [
            "優選植絨：輕膚、觸感舒適、不易掉毛",
            "TPR 乳膠底面：吸水防滑、安全耐用",
            "24 小時出貨，台灣現貨不用等"
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
        category: "living",
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
            "保暖、親膚、舒適，溫暖您整個冬天",
            "加厚毛絨、時尚簡約，三種顏色可選",
            "24 小時出貨，台灣現貨不用等"
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
        category: "living",
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
            "超小體積，方便隨身攜帶",
            "輕鬆組裝，野餐、排隊都適合",
            "24 小時出貨，台灣現貨不用等"
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
        category: "accessory",
        price: 200,
        desc: "特色公仔擺設，隨身陪伴的居家裝飾！",

        // 使用反引號 ` 開頭與結尾，裡面可以直接換行
        modalDesc: `(1) 材質：PLA
(2) 尺寸：約高 22.8cm、寬 7.6cm
(3) 重量：150g
        
注意：商品為手工測量，可能會有 1cm～2cm 左右誤差。商品照與實品顏色可能會有色差，以實物為準！`, // 彈窗用的詳細文字

        features: [
            "可坐可躺、擬真可愛",
            "全身關節可動、多種姿勢可擺",
            "24 小時出貨，台灣現貨不用等"
        ],
        images: [
            "img/外星人3D公仔/19.png",
            "img/外星人3D公仔/20.png",
            "img/外星人3D公仔/21.png",
            "img/外星人3D公仔/22.png",
            "img/外星人3D公仔/23.png",
            "img/外星人3D公仔/O1CN01sFAufZ2FCbqvTYP3M_!!2217503348844-0-cib.jpg"
        ]
    },
};

// 建立一個空變數，之後會被 CMS 的資料填滿
let productData = {};

let cart = [];

// ==========================================
// 🏗️ 2. 初始化與自動渲染
// ==========================================
async function init() {
    console.log("正在從 CMS 載入商品資料...");

    try {
        // 1. 讀取 CMS 產出的 json (注意這裡的路徑是相對於 myshop/index.html)
        const response = await fetch('products.json');
        if (!response.ok) throw new Error("尚未建立 products.json 或檔案路徑錯誤");

        const cmsData = await response.json();

        // 2. 轉換格式 (從 CMS 的 Array 轉回你程式碼用的 Object)
        if (cmsData && cmsData.all_products && cmsData.all_products.length > 0) {
            let formattedData = {};

            cmsData.all_products.forEach(p => {
                // 修復圖片路徑：CMS 上傳的可能是 "img/xxx.jpg" 或 "/img/xxx.jpg"
                const fixedImages = p.images.map(imgItem => {
                    // CMS 的 list 裡面如果是單一 image widget，有時會包成物件 {img: "..."}
                    let rawPath = (typeof imgItem === 'object') ? imgItem.img : imgItem;
                    // 確保路徑前面有 / 或是符合你的目錄結構
                    return rawPath.startsWith('http') ? rawPath : (rawPath.startsWith('/') ? rawPath : '/' + rawPath);
                });

                // 修復特點列表 (CMS widget: list 預設會包成 [{item: "..."}])
                const fixedFeatures = p.features.map(f => (typeof f === 'object') ? f.item : f);

                formattedData[p.id] = {
                    ...p,
                    images: fixedImages,
                    features: fixedFeatures
                };
            });

            productData = formattedData;
            console.log("✅ CMS 資料載入並格式化成功:", productData);
        } else {
            throw new Error("CMS 內尚無商品");
        }

    } catch (err) {
        console.warn("ℹ️ 無法從 CMS 讀取資料，使用備份資料庫 (defaultProductData)。原因:", err.message);
        productData = { ...defaultProductData };
    }

    // 2. 初始化時從本地儲存讀取購物車資料
    const savedCart = localStorage.getItem('my_shop_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }

    // 3. 渲染畫面 (現在 productData 有東西了，render 才不會出錯)
    renderProducts('all');
    render();

    // 🎯 4. 綁定分類按鈕點擊事件 (其餘程式碼維持原樣...)
    const filterButtons = document.querySelectorAll('#category-filter button');
    filterButtons.forEach(btn => {
        btn.onclick = function () {
            filterButtons.forEach(b => {
                b.classList.remove('btn-dark', 'active');
                b.classList.add('btn-outline-dark');
            });
            this.classList.remove('btn-outline-dark');
            this.classList.add('btn-dark', 'active');
            const category = this.getAttribute('data-filter');
            renderProducts(category);
        };
    });

    // 5. 其他物流與支付檢查
    checkLogisticsReturn();
    checkPaymentStatus();
}

function checkPaymentStatus() {
    const params = new URLSearchParams(window.location.search);
    // 這裡偵測網址有沒有 ?pay=done
    if (params.get('pay') === 'done') {

        // ✨ 從 localStorage 撈出最後一次下單的收件人資訊（選門市時存的）
        const orderInfo = {
            name: localStorage.getItem('temp_receiver_name') || "已付款客戶",
            phone: localStorage.getItem('temp_receiver_phone') || "未知",
            shipping: "綠界線上支付",
            store: "請參考綠界後台或先前填寫資訊",
            items: cart.map(i => `${i.name} (x${i.qty})`).join(', '),
            total: "請查看綠界款項"
        };

        // 傳送紀錄
        sendToGoogleSheet(orderInfo);

        // 1. 清空變數與本地儲存
        cart = [];
        localStorage.removeItem('my_shop_cart');

        // 2. 重新執行一次 render (讓購物車介面變空)
        render();

        // 3. 彈出成功訊息 (前提是你網頁有引入 SweetAlert2)
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                icon: 'success',
                title: '付款成功！',
                text: '媽媽十塊已收到訂單，我們會盡快出貨',
                confirmButtonColor: '#333'
            });
        } else {
            alert('付款成功！媽媽十塊已收到訂單，我們會盡快出貨');
        }

        // 4. 清理網址列 (把 ?pay=done 拿掉)
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

// 自動生成首頁商品卡片 (支援過濾功能)
function renderProducts(filterCategory = 'all') {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    // 1. 過濾資料
    const filteredIds = Object.keys(productData).filter(id => {
        if (filterCategory === 'all') return true;
        return productData[id].category === filterCategory;
    });

    // 2. 如果沒商品
    if (filteredIds.length === 0) {
        productList.innerHTML = '<div class="col-12 text-center py-5 text-muted">目前此分類尚無商品，敬請期待！</div>';
        return;
    }

    // 3. 渲染 HTML
    productList.innerHTML = filteredIds.map(id => {
        const p = productData[id];

        // ✨ 如果是熱賣商品，顯示 HOT 標籤
        const hotBadge = (p.category === 'bestseller')
            ? `<div class="position-absolute top-0 start-0 bg-danger text-white px-2 py-1" 
                    style="z-index: 5; font-size: 0.7rem; font-weight: bold; border-radius: 0 0 8px 0;">HOT</div>`
            : '';

        return `
            <div class="col-6 col-md-4 mb-4"> <div class="product-item h-100 d-flex flex-column position-relative" data-category="${p.category}"> ${hotBadge}
                    <div class="img-wrapper mb-2 mb-md-3" onclick="openProductModal('${id}')">
                        <img src="${p.images[0]}" alt="${p.name}">
                        <div class="add-to-cart-overlay d-none d-md-flex">查看詳情 / 加入購物車</div>
                    </div>
                    
                    <div class="px-2 px-md-3 flex-grow-1 d-flex flex-column justify-content-between">
                        <h5 class="p-name fw-bold mb-1" style="font-size: clamp(0.9rem, 2vw, 1.1rem);">${p.name}</h5>
                        
                        <div class="mt-auto">
                            <span class="p-price-display fw-bold d-block mb-2 text-center" style="color: #d63384;">
                                NT$ <span class="p-price">${p.price}</span>
                            </span>
                        </div>
                    </div>
                    
                    <div class="px-2 px-md-3 pb-3">
                        <button class="btn btn-outline-dark w-100 fw-bold action-btn" data-id="${id}" style="font-size: 0.85rem;">
                            加入購物車
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 重新綁定事件
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.onclick = () => openProductModal(btn.dataset.id);
    });
}

// 變數紀錄選取狀態
let selectedColor = "";
let selectedSize = "";

// ==========================================
// 🖼️ 3. 詳情彈窗邏輯 (支援 數量、顏色、尺寸)
// ==========================================
function changeModalQty(amt) {
    const qtyInput = document.getElementById('modal-qty');
    let newQty = parseInt(qtyInput.value) + amt;
    if (newQty < 1) newQty = 1;
    qtyInput.value = newQty;
}

// 修改原本的 openProductModal，確保每次打開都重置數量
function openProductModal(id) {
    const data = productData[id];
    if (!data) return;

    // 重置選取狀態
    selectedColor = "";
    selectedSize = "";
    document.getElementById('modal-qty').value = 1;// ✨ 重置數量為 1

    // 1. 基本資訊
    document.getElementById('modal-title').innerText = data.name;
    document.getElementById('modal-price').innerText = `NT$ ${data.price}`;

    // 2. 顯示短描述 (desc)
    document.getElementById('modal-desc').innerText = data.desc;

    // 3. 渲染特點清單 (features)
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

    // 4. 顯示詳細規格 (modalDesc)
    const detailSpecEl = document.getElementById('modal-detail-spec');
    if (detailSpecEl) {
        detailSpecEl.innerText = data.modalDesc || "";
        // 如果你的資料庫有換行，這裡會自動呈現
    }

    // 5. 渲染顏色選項 (Color Options)
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

    // 6. 渲染尺寸選項 (Size Options)
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

    // 7. 渲染圖片輪播
    const carouselInner = document.getElementById('modal-images');
    carouselInner.innerHTML = data.images.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100 modal-main-img" alt="${data.name}">
        </div>
    `).join('');

    // --- 修正 A: 加入購物袋按鈕 (點擊後應該是關閉視窗，不是打開) ---
    document.getElementById('modal-add-btn').onclick = () => {
        if (data.colorOptions && !selectedColor) { alert("請選擇顏色！"); return; }
        if (data.sizeOptions && !selectedSize) { alert("請選擇尺寸！"); return; }

        const qty = parseInt(document.getElementById('modal-qty').value);
        let specs = [];
        if (selectedColor) specs.push(selectedColor);
        if (selectedSize) specs.push(selectedSize);

        const finalName = specs.length > 0 ? `${data.name} (${specs.join(' / ')})` : data.name;

        addToCart({
            id: id,
            name: finalName,
            price: data.price,
            qty: qty
        });

        // 加入後自動關閉視窗
        const modalEl = document.getElementById('productModal');
        const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
        bsModal.hide(); // ✨ 這裡應該是 hide，因為已經加進購物車了
    };

    // --- 修正 B: 函式最後，「立即」打開視窗 ---
    const modalEl = document.getElementById('productModal');
    const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl); // ✨ 使用 getOrCreateInstance 避免重複初始化
    bsModal.show(); // ✨ 讓視窗跳出來！
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
// 🛒 4. 購物車邏輯 (核心功能 - 支援數量計算)
// ==========================================

function addToCart(item) {
    // 檢查購物車是否已有相同「名稱」(包含規格) 的商品
    const existingItem = cart.find(i => i.name === item.name);

    if (existingItem) {
        // 如果已存在，直接增加數量
        existingItem.qty += item.qty;
    } else {
        // 如果不存在，整筆加入
        cart.push(item);
    }

    // ✨ 新增：每次加入商品後，把購物車存起來
    localStorage.setItem('my_shop_cart', JSON.stringify(cart));

    render();

    // 購物車圖示跳動動畫
    const cartIcon = document.querySelector('.nav-link.position-relative');
    if (cartIcon) {
        cartIcon.classList.add('cart-bounce');
        setTimeout(() => cartIcon.classList.remove('cart-bounce'), 400);
    }
}

function render() {
    const cartList = document.getElementById('cart-items');
    const subtotalDisplay = document.getElementById('cart-subtotal');
    const shippingFeeDisplay = document.getElementById('shipping-fee');
    const totalDisplay = document.getElementById('cart-total');
    const finalTotalDisplay = document.getElementById('final-total'); // ✨ 1. 新增變數抓取

    const countDisplay = document.getElementById('cart-count');
    const summaryInput = document.getElementById('cart_summary');
    const shippingTip = document.getElementById('shipping-tip');
    const shippingNote = document.getElementById('shipping-note');

    // 1. 計算總件數
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    countDisplay.innerText = totalQty;

    // 2. 檢查空清單
    if (cart.length === 0) {
        cartList.innerHTML = '<p class="text-center text-muted">清單目前是空的</p>';
        subtotalDisplay.innerText = '0';
        shippingFeeDisplay.innerText = '0';
        totalDisplay.innerText = '0';
        if (finalTotalDisplay) finalTotalDisplay.innerText = '0'; // ✨ 2. 清空時也要歸零
        shippingTip.style.display = 'none';
        if (summaryInput) summaryInput.value = "";
        return;
    }

    // ✨ 新增：每次渲染時，同步更新儲存的資料 (確保移除商品時也會同步)
    localStorage.setItem('my_shop_cart', JSON.stringify(cart));

    // 3. 渲染 HTML (顯示單價 x 數量)
    cartList.innerHTML = cart.map((item, index) => `
        <div class="cart-item-row d-flex justify-content-between align-items-center mb-3">
            <div>
                <div class="fw-bold">${item.name}</div>
                <div class="small text-muted">NT$ ${item.price} x ${item.qty}</div>
            </div>
            <div class="text-end">
                <div class="fw-bold">NT$ ${(item.price * item.qty).toLocaleString()}</div>
                <button class="btn-remove btn btn-sm p-0 text-danger" onclick="removeItem(${index})">移除</button>
            </div>
        </div>
    `).join('');

    // 4. 運費與免運邏輯計算
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const shippingMethod = document.getElementById('shipping-method').value;

    let shippingFee = 0;
    let tipText = "";

    if (shippingMethod === 'CVS') {
        shippingNote.innerText = "(超商取貨)";
        if (subtotal >= 399) {
            shippingFee = 0;
            tipText = "🎉 太棒了！已達成超商免運門檻！";
        } else {
            shippingFee = 60;
            tipText = `🔥 還差 NT$ ${399 - subtotal} 就能享有超商免運囉！`;
        }
    } else if (shippingMethod === 'POST') {
        shippingNote.innerText = "(宅配)";
        if (subtotal >= 999) {
            shippingFee = 0;
            tipText = "🎉 太棒了！已達成宅配免運門檻！";
        } else {
            shippingFee = 120;
            tipText = `🚚 還差 NT$ ${999 - subtotal} 就能享有宅配免運囉！`;
        }
    } else {
        shippingNote.innerText = "(尚未選擇方式)";
        shippingFee = 0;
        tipText = "💡 選擇取貨方式後，自動幫您計算免運優惠！";
    }

    // 5. 更新顯示
    const totalAmount = subtotal + shippingFee; // 最終總額
    subtotalDisplay.innerText = subtotal.toLocaleString();
    shippingFeeDisplay.innerText = shippingFee.toLocaleString();
    totalDisplay.innerText = totalAmount.toLocaleString();

    // ✨ 更新按鈕上方的最終金額
    if (finalTotalDisplay) {
        finalTotalDisplay.innerText = totalAmount.toLocaleString();
    }

    // 更新小驚喜文字
    shippingTip.style.display = 'block';
    shippingTip.innerHTML = `<strong>${tipText}</strong>`;

    if (summaryInput) {
        summaryInput.value = cart.map(i => `${i.name} (x${i.qty})`).join(', ');
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    render();
}

// ==========================================
// 🚛 4.5 綠界物流輔助邏輯 (新增)
// ==========================================

// 切換物流顯示 (由 HTML 的 select onchange 觸發)
function toggleShippingUI() {
    const method = document.getElementById('shipping-method').value;
    const cvsBtnGroup = document.getElementById('cvs-btn-group');
    const addrField = document.getElementById('shipping-address');

    if (method === 'CVS') {
        if (cvsBtnGroup) cvsBtnGroup.style.display = 'block';
        if (addrField) {
            addrField.placeholder = "選取門市後，此處將自動帶入資訊";
            addrField.readOnly = true;
        }
    } else {
        if (cvsBtnGroup) cvsBtnGroup.style.display = 'none';
        if (addrField) {
            addrField.placeholder = "請填寫完整收件地址";
            addrField.readOnly = false;
            addrField.value = "";
        }
    }

    // ✨ 核心：切換物流方式後，重新跑一次 render 計算運費
    render();
}

// 呼叫後端開啟綠界地圖
// 修改後的 openECPayMap：改用傳統表單提交，最穩定
function openECPayMap() {
    console.log("嘗試開啟綠界物流地圖...");

    // ✨ 新增：跳轉前存下收件人資訊
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    localStorage.setItem('temp_receiver_name', name);
    localStorage.setItem('temp_receiver_phone', phone);

    // 1. 建立一個隱藏的表單
    const form = document.createElement('form');
    form.method = 'POST';
    // 這裡直接連向後端的物流路由
    form.action = 'https://ecpay-payment-demo.onrender.com/create-logistics-map';
    form.target = '_self'; // 在當前視窗開啟

    // 2. 將表單加入頁面並立刻送出
    document.body.appendChild(form);
    form.submit();

    // 3. 送出後移除表單
    document.body.removeChild(form);
}

// 檢查網址參數並填入資訊
function checkLogisticsReturn() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('storeName')) {
        const name = params.get('storeName');
        const id = params.get('storeId');
        const addr = params.get('storeAddr');

        const addrField = document.getElementById('shipping-address');
        const storeInfo = document.getElementById('selected-store-info');
        const cvsIdInput = document.getElementById('cvs_store_id');

        if (addrField) addrField.value = `${name} (${id})\n${addr}`;
        if (cvsIdInput) cvsIdInput.value = id;
        if (storeInfo) storeInfo.innerText = `📍 已選擇門市：${name}`;

        // ✨ 新增：把暫存的姓名電話填回去
        const savedName = localStorage.getItem('temp_receiver_name');
        const savedPhone = localStorage.getItem('temp_receiver_phone');

        if (savedName) document.querySelector('input[name="name"]').value = savedName;
        if (savedPhone) document.querySelector('input[name="phone"]').value = savedPhone;

        // 填完後可以清除暫存，保持乾淨
        localStorage.removeItem('temp_receiver_name');
        localStorage.removeItem('temp_receiver_phone');

        // 自動切換到 CVS 選項並顯示按鈕
        const shippingSelect = document.getElementById('shipping-method');
        if (shippingSelect) {
            shippingSelect.value = 'CVS';
            toggleShippingUI();
        }

        // ✨ 新增：自動捲動到購物車區域 (假設你的購物車區 ID 是 checkout-section)
        // ✨ 修正：稍微延遲一點再捲動，確保頁面元素已經長出來
        setTimeout(() => {
            const checkoutSection = document.getElementById('checkout-section');
            if (checkoutSection) {
                // block: 'start' 確保它滑到區塊的最上方
                checkoutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 500);
    }
}

// ==========================================
// 💳 5. 結帳邏輯：手機驗證 + 金/物流分流
// ==========================================

// 1. 監聽物流方式，自動切換付款選項
document.addEventListener('DOMContentLoaded', () => {
    const shippingSelect = document.getElementById('shipping-method');
    if (shippingSelect) {
        shippingSelect.addEventListener('change', function () {
            const shipping = this.value;
            const paymentMethodSelect = document.getElementById('payment-method');
            const codOption = paymentMethodSelect.querySelector('option[value="COD"]');

            if (shipping === 'POST') {
                paymentMethodSelect.value = 'ECPAY';
                codOption.disabled = true;
                codOption.style.display = 'none';
                alert('提醒您：郵局宅配僅支援線上刷卡/ATM。');
            } else {
                codOption.disabled = false;
                codOption.style.display = 'block';
                // ✨ 新增這行：切換回超商時，把付款方式重設為「選擇付款方式」
                // 這樣可以強迫使用者重新決定要超取刷卡還是超取貨到付款
                paymentMethodSelect.value = '';
            }
        });
    }
});

// 2. 核心結帳函數
async function checkout(event) {
    if (cart.length === 0) {
        Swal.fire({ icon: 'info', title: '購物車是空的', text: '先去逛逛吧！', confirmButtonColor: '#333' });
        return;
    }

    const nameInput = document.querySelector('input[name="name"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const paymentMethod = document.getElementById('payment-method').value;
    const shippingMethod = document.getElementById('shipping-method').value;
    const cvsStoreId = document.getElementById('cvs_store_id').value;

    // ✨ 這裡新增：檢查是否真的選了付款方式
    if (!paymentMethod) {
        Swal.fire({
            icon: 'warning',
            title: '未選擇付款方式',
            text: '請選擇您要使用的付款方式',
            confirmButtonColor: '#333'
        });
        return;
    }

    // 驗證：超取必須選門市
    if (shippingMethod === 'CVS' && !cvsStoreId) {
        Swal.fire({ icon: 'warning', title: '未選擇門市', text: '請先點擊按鈕選擇超商取貨門市！', confirmButtonColor: '#333' });
        return;
    }

    if (!nameInput.value || !phoneInput.value || !shippingMethod) {
        Swal.fire({ icon: 'warning', title: '資料不完整', text: '請填寫完整的收件人姓名、電話與取貨方式', confirmButtonColor: '#333' });
        return;
    }

    const phone = phoneInput.value.trim();
    if (!/^09\d{8}$/.test(phone)) {
        Swal.fire({ icon: 'error', title: '格式錯誤', text: '請輸入正確的台灣手機號碼 (09xxxxxxxx)', confirmButtonColor: '#333' });
        return;
    }

    const btn = event.target;
    const originalText = btn.innerText;

    // 計算總金額
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let shippingFee = 0;
    if (shippingMethod === 'CVS') {
        shippingFee = subtotal >= 399 ? 0 : 60;
    } else if (shippingMethod === 'POST') {
        shippingFee = subtotal >= 999 ? 0 : 120;
    }
    const totalAmount = subtotal + shippingFee;

    if (paymentMethod === 'ECPAY') {
        // --- 路徑 1：線上支付 (綠界) ---
        btn.innerText = "金流引導中...";
        btn.disabled = true;

        const itemName = "媽媽十塊質感選物訂單";

        try {
            const response = await fetch('https://ecpay-payment-demo.onrender.com/create-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ totalAmount, itemName })
            });

            const result = await response.json();
            if (!result.html) throw new Error("後端回傳格式錯誤");

            const blob = new Blob([result.html], { type: 'text/html' });
            const blobUrl = URL.createObjectURL(blob);

            // ✨ 這裡只保留這行，刪除原本的 paymentWindow 判斷
            window.location.href = blobUrl;

            setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);

        } catch (error) {
            console.error("錯誤：", error);
            Swal.fire({ icon: 'error', title: '連線失敗', text: '金流連線失敗，請稍後再試', confirmButtonColor: '#333' });
        } finally {
            btn.innerText = originalText;
            btn.disabled = false;
        }

    } else {
        // --- 路徑 2：貨到付款 ---
        btn.innerText = "訂單傳送中...";
        btn.disabled = true;

        // 1. 準備要傳送到 Google 的資料包
        const orderInfo = {
            name: nameInput.value,
            phone: phoneInput.value,
            shipping: shippingMethod === 'CVS' ? '超商取貨' : '宅配',
            payment: paymentMethod === 'COD' ? '貨到付款' : '線上支付', // ✨ 新增這行
            store: document.getElementById('shipping-address').value || "未提供地址",
            items: cart.map(i => `${i.name} (x${i.qty})`).join(', '),
            total: totalAmount
        };

        // 2. 執行傳送 (不等待它傳完，直接跳通知，體驗才順)
        sendToGoogleSheet(orderInfo);

        // 3. 顯示成功通知
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: '訂單已收到！',
                html: `
                    <div class="text-start small">
                        <p><strong>收件人：</strong>${orderInfo.name}</p>
                        <p><strong>總金額：</strong>NT$ ${orderInfo.total.toLocaleString()}</p>
                        <hr>
                        <p class="mb-0 text-muted">我們將盡快為您安排出貨，請留意手機簡訊與物流通知。</p>
                    </div>
                `,
                confirmButtonColor: '#333',
                confirmButtonText: '好的，沒問題'
            }).then(() => {
                // 點擊「好的」之後清空介面
                cart = [];
                localStorage.removeItem('my_shop_cart');
                render();

                nameInput.value = "";
                phoneInput.value = "";
                const addrField = document.getElementById('shipping-address');
                if (addrField) addrField.value = "";
                const cvsIdInput = document.getElementById('cvs_store_id');
                if (cvsIdInput) cvsIdInput.value = "";
                const storeInfo = document.getElementById('selected-store-info');
                if (storeInfo) storeInfo.innerText = "";
            });

            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    }
}

// ==========================================
// 🚀 執行初始化 (這是最重要的一行！)
// ==========================================

window.onload = () => {
    console.log("網頁完全載入，開始渲染商品...");
    init();
};

// ==========================================
// 🚀 6. 介面輔助邏輯 (滾動、回到頂端)
// ==========================================

window.onscroll = function () {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
};

// ==========================================
// 🚀 7. Google 表單 (客戶訂單送出後的資料)
// ==========================================

async function sendToGoogleSheet(orderData) {
    // 修正後的網址：必須以 formResponse 結尾，且不能帶有 ?entry 等參數
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc_du3tyhAjNLUlsqxkvZN33MLiFG6UI8H8wGPIbgNslhC19w/formResponse";
    const formData = new URLSearchParams();

    // 請替換成你抓到的 entry ID
    formData.append('entry.627203644', orderData.name);     // 對應 收件人
    formData.append('entry.778763564', orderData.phone);    // 對應 電話
    formData.append('entry.1406071448', orderData.shipping); // 對應 取貨方式
    formData.append('entry.152081729', orderData.payment); // 對應 付款方式
    formData.append('entry.45364564', orderData.store);     // 對應 門市資訊
    formData.append('entry.339808245', orderData.items);     // 對應 訂單細項
    formData.append('entry.2037685692', orderData.total);    // 對應 總金額

    try {
        await fetch(googleFormUrl, { method: 'POST', mode: 'no-cors', body: formData });
        console.log("Google Sheet 同步成功");
    } catch (e) {
        console.error("Google Sheet 同步失敗", e);
    }
}

// ==========================================
// 8. 導覽優化：平滑捲動 & 網址清潔工具
// ==========================================

// 1. 攔截點擊事件：防止點擊錨點（如 #product-list）產生網址變化
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);

        // 只有當 href 不是單純的 "#" 時才執行捲動
        if (targetId) {
            e.preventDefault();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // 如果只是 href="#"，純粹阻止預設行為
            e.preventDefault();
        }
    });
});

// 2. 強力清除：如果網頁一載入就帶有 #/ 或 #，立刻把它移除（修正 CMS 殘留問題）
if (window.location.hash) {
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
}