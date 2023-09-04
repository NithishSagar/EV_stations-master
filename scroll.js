document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default jump to the target section

            const targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth',
                });
            }
        });
    });
});
