//smooth scroll para sobre mim no index.html
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    if (header) {
        const existingToggle = header.querySelector('.menu-toggle');

        if (!existingToggle) {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'menu-toggle';
            toggleButton.type = 'button';
            toggleButton.setAttribute('aria-label', 'Abrir menu');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
            header.insertBefore(toggleButton, header.firstChild);
        }

        const toggleButton = header.querySelector('.menu-toggle');
        const navs = Array.from(header.querySelectorAll('nav'));

        const closeMenu = () => {
            header.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.setAttribute('aria-label', 'Abrir menu');
            toggleButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        };

        toggleButton.addEventListener('click', () => {
            const isOpen = header.classList.toggle('active');
            toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            toggleButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
            toggleButton.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        navs.forEach(nav => {
            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        closeMenu();
                    }
                });
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    }

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
  
  const urlParams = new URLSearchParams(window.location.search);
  const secaoParaRolar = urlParams.get('scroll');

  if (secaoParaRolar) {
    const elementoDestino = document.getElementById(secaoParaRolar);

    if (elementoDestino) {
      
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = elementoDestino.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        window.history.replaceState({}, document.title, window.location.pathname);
      }, 300);
    }
  }
});`
`

let modal = document.querySelector('.lightbox-modal');

if (!modal) {
    modal = document.createElement('div');
    modal.classList.add('lightbox-modal');

    const modalImg = document.createElement('img');
    modalImg.classList.add('lightbox-img');

    modalImg.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    modal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('imagem-relatorio')) {
        const modalImg = modal.querySelector('.lightbox-img');
        modalImg.src = event.target.src;
        modalImg.alt = event.target.alt;
        modal.classList.add('active');
    }
});