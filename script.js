document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de animação simples ao rolar a página
    // Animar elementos quando eles entram na viewport

    const observerOptions = {
        root: null, // Observa a viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento visível para acionar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Para de observar depois de animar
            }
        });
    }, observerOptions);

    // Adicione a classe 'animate-on-scroll' aos elementos que você quer animar
    // Por exemplo, em seus service-item, material-item, etc.
    const elementsToAnimate = document.querySelectorAll(
        '.service-item, .material-item, #sustentabilidade p, .process-list li, .contact-form'
    );

    elementsToAnimate.forEach(element => {
        // Inicialmente esconda os elementos ou defina sua posição inicial para a animação
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)'; // Começa um pouco abaixo
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });

    // Classe CSS para a animação
    // Adicione isso ao seu style.css
    /*
    .fade-in-up {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    */

    // Exemplo de animação de hover para botões e itens de serviço (já no CSS)
    // Exemplo de efeito de menu de navegação fixo (sticky header) (já no CSS)

    // Funcionalidade do ícone de busca (simples toggle)
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', () => {
        alert('Funcionalidade de busca ainda não implementada, mas você clicou no ícone!');
        // Aqui você pode adicionar um overlay de busca, ou redirecionar para uma página de busca
    });

    // Animação para o hero-background (exemplo com paralaxe leve)
    const heroSection = document.getElementById('hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        // Ajuste o fator de paralaxe conforme desejado
        heroSection.querySelector('.hero-background').style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });


    // Você pode expandir isso com mais animações:
    // - Carrosséis para o hero section
    // - Contadores de estatísticas (ex: toneladas recicladas)
    // - Efeitos de "aparecer" para elementos quando a página carrega ou rola
    // - Validação de formulário de contato (antes de enviar)
});