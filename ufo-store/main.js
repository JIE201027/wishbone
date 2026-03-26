// 1. 產品清單數據 (外星科技選物)
const products = [
    {
        id: 1,
        name: "羅斯威爾記憶碎片",
        price: 1200,
        image: "🛸",
        desc: "1947年原裝進口，內含不明金屬成分。"
    },
    {
        id: 2,
        name: "星際傳送專用 Cow",
        price: 850,
        image: "🐄",
        desc: "經過地球環境測試，保證不會隨意跑掉。"
    },
    {
        id: 3,
        name: "外星基地螢光漆",
        price: 450,
        image: "🎨",
        desc: "塗上後可與母星取得視覺聯繫。"
    },
    {
        id: 4,
        name: "宇宙級選物手冊",
        price: 300,
        image: "📖",
        desc: "記載了所有不可說的秘密文件。"
    }
];

// 2. 初始化購物車與變數
let cart = [];

// 3. 渲染產品卡片到畫面上 (修正版：移除 col-md-3)
function renderProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error("找不到 product-list 容器");
        return;
    }

    // 核心修正：只保留 product-card，由 CSS Grid 控制寬度
    productList.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="img-placeholder">
                ${product.image}
            </div>
            <h3>${product.name}</h3>
            <p class="small text-muted">${product.desc}</p>
            <p class="price">NT$ ${product.price.toLocaleString()}</p>
            <button class="add-to-cart-btn">加入傳送艙</button>
        </div>
    `).join('');

    bindAddToCartEvents();
}

// 4. 綁定「加入購物車」按鈕事件
function bindAddToCartEvents() {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    buttons.forEach(button => {
        button.onclick = function () {
            const card = this.closest('.product-card');
            const productId = parseInt(card.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);

            if (product) {
                addToCart(product.name, product.price);

                // 按鈕視覺反饋 (優化動畫感)
                const originalText = this.innerText;
                this.innerText = "🚀 已送入！";
                this.style.backgroundColor = "var(--alien-green)";
                this.style.color = "var(--text-dark)";

                setTimeout(() => {
                    this.innerText = originalText;
                    this.style.backgroundColor = "";
                    this.style.color = "";
                }, 800);
            }
        };
    });
}

// 5. 購物車邏輯
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateUI();
}

function updateUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const navCartCount = document.querySelector('.cart');
    const finalTotalEl = document.getElementById('final-total');

    // A. 渲染購物車清單
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="alien-empty-text">清單目前是空的，等待傳送中...</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item-row">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>NT$ ${item.price.toLocaleString()} x ${item.quantity}</small>
                </div>
                <button onclick="removeFromCart(${index})" class="remove-btn">解除</button>
            </div>
        `).join('');
    }

    // B. 計算總額
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (finalTotalEl) finalTotalEl.innerText = subtotal.toLocaleString();
    if (navCartCount) navCartCount.innerText = `🛒 傳送艙 (${totalCount})`;
}

// 6. 移除功能
window.removeFromCart = function (index) {
    cart.splice(index, 1);
    updateUI();
};

// 7. 回到頂部功能 (加入捲動顯示邏輯)
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 8. 執行渲染 (修正版)
window.onload = function () {
    renderProducts(); // 渲染商品卡片
    updateUI();       // 關鍵：網頁載入時就檢查一次購物車狀態，顯示「等待傳送中」
};