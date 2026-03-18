document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Logika Tema (Dark/Light Mode) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        const iconSpan = themeToggleBtn.querySelector('.icon');
        iconSpan.textContent = theme === 'light' ? '🌙' : '☀️';
    }

    // --- 2. Logika Animasi Scroll Reveal ---
    // Menggunakan Intersection Observer API untuk performa terbaik
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // Memicu animasi saat 15% elemen terlihat di layar
        rootMargin: "0px 0px -50px 0px" 
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi selesai
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});