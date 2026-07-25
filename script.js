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

document.addEventListener('DOMContentLoaded', () => {
  // 1. Pega os parâmetros da URL (ex: ?scroll=sobre-mim)
  const urlParams = new URLSearchParams(window.location.search);
  const secaoParaRolar = urlParams.get('scroll');

  // 2. Se encontrou o parâmetro ?scroll=na URL:
  if (secaoParaRolar) {
    const elementoDestino = document.getElementById(secaoParaRolar);

    if (elementoDestino) {
      // Pequeno delay para garantir que a página renderizou tudo
      setTimeout(() => {
        const headerOffset = 80; // Altura do seu menu fixo
        const elementPosition = elementoDestino.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Faz a rolagem suave vindo do topo!
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Limpa a URL pra não ficar o "?scroll=sobre-mim" aparente na barra do navegador
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 300);
    }
  }
});`
`
