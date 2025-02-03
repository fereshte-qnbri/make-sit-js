document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        let targetWidth = bar.style.width;  // مقدار نهایی عرض
        bar.style.width = "0";  // مقدار اولیه را 0 تنظیم می‌کنیم

        setTimeout(() => {
            bar.style.transition = "width 1.5s ease-in-out";
            bar.style.width = targetWidth; // مقدار واقعی را تنظیم می‌کنیم
        }, 500); // تاخیر کوتاه برای انیمیشن نرم‌تر
    });
});