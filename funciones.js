
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 10,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toTopBtn = document.getElementById('toTopBtn');

    if (toTopBtn) {
        toTopBtn.style.display = "none";

        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                toTopBtn.style.display = "block";
            } else {
                toTopBtn.style.display = "none";
            }
        });

        toTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});