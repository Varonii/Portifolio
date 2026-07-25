// function SmoothScrollWithOffset() {
//     const links = document.querySelectorAll('a[href^="#"]');
//     links.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const target = document.querySelector(link.getAttribute('href'));
//             if (target) {
//                 const offset = target.offsetTop - 80; // Adjust the offset as needed
//                 window.scrollTo({
//                     top: offset,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// }

//smooth scroll para sobre mim no index.html
document.addEventListener('DOMContentLoaded', () => {
    const linkSobreMim = document.querySelector('a[href^="#sobremim"]');

    if (linkSobreMim) {
        linkSobreMim.addEventListener('click', (e) => {
            e.preventDefault();

            const secaoSobreMim = document.getElementById('sobremim');
            if (!secaoSobreMim) return;

            const headerOffset = 80;
            const elementPosition = secaoSobreMim.getBoundingClientRect().top;
            const offSetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offSetPosition,
                behavior: 'smooth'
            })
        })
    }
})

//smooth scroll to contatos no index.html
document.addEventListener('DOMContentLoaded', () => {
    const linkContato = document.querySelector('a[href^="#contato"]');

    if (linkContato) {
        linkContato.addEventListener('click', (e) => {
            e.preventDefault();

            const secaoContato = document.getElementById('contato');
            if (!secaoContato) return;

            const headerOffset = 80;
            const elementPosition = secaoContato.getBoundingClientRect().top;
            const offSetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offSetPosition,
                behavior: 'smooth'
            })
        })
    }
})

