const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

// 1. 點擊漢堡按鈕切換選單
menu.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

// 2. 點擊選單連結後自動關閉選單 (這對一頁式網頁很重要)
document.querySelectorAll('.nav-links li a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('active');
    menuLinks.classList.remove('active');
}));

// 初始化 AOS 動畫
AOS.init({
    duration: 800, // 動畫時長
    once: true     // 捲動回去時不再重複動畫
});

// 簡單的導覽列滾動變色效果
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 5%';
    } else {
        nav.style.padding = '1rem 5%';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('./single-data.json?t=' + new Date().getTime())
        .then(res => res.json())
        .then(data => {
            // 1. 更新 Banner
            document.getElementById('hero-title').innerText = data.heroTitle;
            document.getElementById('hero-p').innerText = data.heroDesc;

            // 2. 更新價格卡片
            const container = document.getElementById('pricing-container');
            let pricingHtml = "";

            data.pricing.forEach((item, index) => {
                // 組裝功能列表的 <li>
                const featuresHtml = item.features.map(f => `<li>${f}</li>`).join('');

                pricingHtml += `
                    <div class="card pricing-card" data-aos="zoom-in" data-aos-delay="${index * 100}">
                        <div class="card-header">
                            <span class="tag">${item.tag}</span>
                            <h3>${item.title}</h3>
                            <div class="price">${item.price}</div>
                            <p class="maintenance">${item.maintenance}</p>
                        </div>
                        <div class="card-body">
                            <p class="target">${item.target}</p>
                            <p class="desc">${item.desc}</p>
                            <ul class="features">${featuresHtml}</ul>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = pricingHtml;
        });
});