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
        desc: "簡約美式地毯，有質感的居家裝飾。",

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
        desc: "特色公仔擺設，隨身陪伴的居家裝飾！",

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
            "img/外星人3D公仔/21.png",
            "img/外星人3D公仔/22.png",
            "img/外星人3D公仔/23.png",
            "img/外星人3D公仔/O1CN01sFAufZ2FCbqvTYP3M_!!2217503348844-0-cib.jpg"
        ]
    },
};

let cart = [];

// ==========================================
// 🏗️ 2. 初始化與自動渲染
// ==========================================
function init() {
    renderProducts();       // 第一步：自動把資料庫變成 HTML 卡片
    render();               // 第二步：初始化購物車狀態
    checkLogisticsReturn(); // ✨ 第三步：檢查網址是否有綠界回傳的門市資訊
}

// 自動生成首頁商品卡片
function renderProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    // 1. 生成所有商品的 HTML 卡片
    productList.innerHTML = Object.keys(productData).map(id => {
        const p = productData[id];
        const featureHtml = p.features.map(f => `<li>${f}</li>`).join('');

        return `
            <div class="col-md-6 col-lg-4">
                <div class="product-item">
                    <div class="img-wrapper mb-3" onclick="openProductModal('${id}')">
                        <img src="${p.images[0]}" alt="${p.name}">
                        <div class="add-to-cart-overlay">查看詳情 / 加入購物車</div>
                    </div>
                    
                    <h5 class="p-name fw-bold">${p.name}</h5>
                    <p class="text-muted small px-3">${p.desc}</p>
                    
                    <ul class="product-features text-start small px-4 mb-3">
                        ${featureHtml}
                    </ul>
                    
                    <div class="mt-auto">
                        <span class="p-price-display fw-bold d-block mb-3">
                            NT$ <span class="p-price">${p.price}</span>
                        </span>
                        <div class="px-3 pb-3">
                            <button class="btn btn-outline-dark w-100 fw-bold action-btn" data-id="${id}">
                                查看詳情 / 加入購物車
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 2. 統一綁定點擊事件
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.onclick = () => {
            const id = btn.dataset.id;
            openProductModal(id);
        };
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

    selectedColor = "";
    selectedSize = "";
    document.getElementById('modal-qty').value = 1; // ✨ 重置數量為 1

    document.getElementById('modal-title').innerText = data.name;
    document.getElementById('modal-price').innerText = `NT$ ${data.price}`;
    document.getElementById('modal-desc').innerText = data.modalDesc || data.desc;

    // 渲染顏色選項 (Color Options)
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

    // 渲染尺寸選項 (Size Options)
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

    // 渲染圖片輪播
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
    const totalDisplay = document.getElementById('cart-total');
    const countDisplay = document.getElementById('cart-count');
    const summaryInput = document.getElementById('cart_summary');

    // 1. 計算總件數 (例如：2個吊飾+1個地毯 = 3件)
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    countDisplay.innerText = totalQty;

    // 2. 檢查空清單
    if (cart.length === 0) {
        cartList.innerHTML = '<p class="text-center text-muted">清單目前是空的</p>';
        totalDisplay.innerText = '0';
        if (summaryInput) summaryInput.value = "";
        return;
    }

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

    // 4. 計算總金額
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalDisplay.innerText = total.toLocaleString();

    // 5. 更新隱藏欄位 (讓 Netlify 收到包含數量的明細)
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
}

// 呼叫後端開啟綠界地圖
// 修改後的 openECPayMap：改用傳統表單提交，最穩定
function openECPayMap() {
    console.log("嘗試開啟綠界物流地圖...");

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

        // 自動切換到 CVS 選項並顯示按鈕
        const shippingSelect = document.getElementById('shipping-method');
        if (shippingSelect) {
            shippingSelect.value = 'CVS';
            toggleShippingUI();
        }
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
            }
        });
    }
});

// 2. 核心結帳函數
async function checkout(event) {
    if (cart.length === 0) {
        alert("購物車是空的，先去逛逛吧！");
        return;
    }

    const nameInput = document.querySelector('input[name="name"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const paymentMethod = document.getElementById('payment-method').value;
    const shippingMethod = document.getElementById('shipping-method').value;
    const cvsStoreId = document.getElementById('cvs_store_id').value;

    // ✨ 新增驗證：如果是超取，必須選門市
    if (shippingMethod === 'CVS' && !cvsStoreId) {
        alert("請先點擊按鈕選擇超商取貨門市！");
        return;
    }

    if (!nameInput.value || !phoneInput.value || !shippingMethod) {
        alert("請填寫完整的收件人姓名、電話與取貨方式");
        return;
    }

    const phone = phoneInput.value.trim();
    if (!/^09\d{8}$/.test(phone)) {
        alert("請輸入正確的台灣手機號碼 (09xxxxxxxx)");
        return;
    }

    const btn = event.target;
    const originalText = btn.innerText;

    // ✨ 重要修改：計算總金額 (單價 * 數量)
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (paymentMethod === 'ECPAY') {
        // --- 路徑 1：線上支付 (綠界) ---
        btn.innerText = "金流引導中...";
        btn.disabled = true;

        const itemName = "媽媽十塊質感選物訂單";

        try {
            const response = await fetch('https://ecpay-payment-demo.onrender.com/create-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ totalAmount, itemName }) // ✨ 傳送正確的總金額
            });

            const result = await response.json();
            if (!result.html) throw new Error("後端回傳格式錯誤");

            const blob = new Blob([result.html], { type: 'text/html' });
            const blobUrl = URL.createObjectURL(blob);
            const paymentWindow = window.open(blobUrl, '_blank');

            if (!paymentWindow) alert("請允許開啟彈出視窗以完成付款！");
            setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);

        } catch (error) {
            console.error("錯誤：", error);
            alert("金流連線失敗，請稍後再試");
        } finally {
            btn.innerText = originalText;
            btn.disabled = false;
        }

    } else {
        // --- 路徑 2：貨到付款 ---
        btn.innerText = "訂單傳送中...";
        btn.disabled = true;

        setTimeout(() => {
            // ✨ 重要修改：顯示含數量的總金額
            alert(`訂單已收到！\n收件人：${nameInput.value}\n總金額：NT$ ${totalAmount.toLocaleString()}\n我們將盡快為您寄出。`);

            cart = [];
            render();

            // 如果有接 Netlify Form，這裡手動送出
            // document.forms['tenbucks-order'].submit();

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