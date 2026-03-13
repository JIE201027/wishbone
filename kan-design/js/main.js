document.addEventListener('DOMContentLoaded', () => {

    // === 1. 手機版漢堡選單邏輯 ===
    // 同時支援 ID 選擇器與原本的 class 選擇器，確保抓得到按鈕
    const menuBtn = document.getElementById('menu-toggle') || document.querySelector('.md\\:hidden.text-2xl');
    const closeBtn = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault(); // 防止按鈕預設跳轉
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // 防止底層網頁滾動
        });
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = ''; // 恢復滾動
        });
    }

    // 點擊選單內的連結後自動關閉選單（優化使用者體驗）
    const navLinks = mobileMenu?.querySelectorAll('a');
    navLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });
    });

    // === 2. 數字跑分動畫 (EaseOut 效果) ===
    const countUp = (element) => {
        const target = +element.getAttribute('data-target');
        const duration = 2000;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(easeOutQuart * target);

            element.innerText = currentValue;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                element.innerText = target;
            }
        };
        requestAnimationFrame(updateCount);
    };

    // 滾動偵測計數器
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => countUp(counter));
                counterObserver.unobserve(entry.target); // 只跑一次
            }
        });
    }, { threshold: 0.2 });

    const counterSection = document.querySelector('section.py-16');
    if (counterSection) counterObserver.observe(counterSection);

    // === 回到頂端按鈕邏輯 (修正版) ===
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        // 1. 處理滾動顯示/隱藏
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                // 顯示：移除所有限制，讓它變回可點擊狀態
                backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100');
            } else {
                // 隱藏：加上 pointer-events-none 確保隱藏時不會擋到下面的元素
                backToTopBtn.classList.remove('opacity-100');
                backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            }
        });

        // 2. 處理點擊跳轉 (核心修正)
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault(); // 防止任何預設行為
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 平滑滾動
            });
        });
    }

    // === 4. 作品集篩選功能 ===
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 切換按鈕 active 狀態
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.classList.remove('hidden');
                        setTimeout(() => item.style.opacity = '1', 10);
                    } else {
                        item.classList.add('hidden');
                    }
                });

                // 如果有使用 AOS 動畫庫，重新計算位置
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            });
        });
    }

    // === 表單送出模擬 (SweetAlert 風格) ===
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 防止頁面重整

            // 抓取按鈕並顯示載入中
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "傳送中...";
            submitBtn.disabled = true;

            // 模擬發送延遲
            setTimeout(() => {
                // 隱藏表單內容，改顯示成功訊息
                contactForm.innerHTML = `
                <div class="text-center py-12" data-aos="zoom-in">
                    <div class="w-20 h-20 bg-rose-50 text-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-2">訊息已送出！</h3>
                    <p class="text-slate-500 mb-8">感謝您的諮詢，KAN DESIGN 將於 24 小時內回覆您。</p>
                    <button onclick="location.reload()" class="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-rose-400 transition-colors">
                        返回
                    </button>
                </div>
            `;
            }, 1500);
        });
    }

});