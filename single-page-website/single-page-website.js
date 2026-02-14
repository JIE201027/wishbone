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