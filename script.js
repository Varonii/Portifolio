function SmoothScrollWithOffset() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const offset = target.offsetTop - 80; // Adjust the offset as needed
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}