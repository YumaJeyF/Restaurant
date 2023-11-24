export function navigation() {
    const btnMobileMenu = document.querySelector('.mobile-nav-btn');
    const header = document.querySelector('.header');
    const mobileTopMenu = document.querySelector('.hidden-block');
    const btnToTop = document.querySelector('.scroll-to-top-inner');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        if (scrollY >= 300 || header.parentNode.parentNode.style.position === 'fixed') {
            header.classList.add('top-line-fixed');
            btnToTop.classList.add('visible');
        } else {
            header.classList.remove('top-line-fixed');
            btnToTop.classList.remove('visible');
        }
    });

    btnToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Навешивание активного класса на ссылки в dropdown и его сохранение при обновлении

    const dropdownLink = document.querySelectorAll('.link');
    const LS = localStorage;

    dropdownLink.forEach(link => {
        link.addEventListener('click', () => LS.setItem('is-link-click', link.dataset.index));
    });

    if (LS.getItem('is-link-click') ) {
        if (dropdownLink[LS.getItem('is-link-click')].getAttribute('href') == location.href.split("/").slice(-1)) {
            dropdownLink[LS.getItem('is-link-click')].classList.add('active');
        }
    }

    // Управление навигационным меню

    const dropdownMenu = document.querySelector('.dropdown-menu');
    const btnPage = document.querySelector('.btn-page');
    const dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('mouseover', () => {
        if (!dropdownMenu.classList.contains('open')) dropdownMenu.classList.add('open');
    });

    dropdown.addEventListener('mouseout', () => {
        if (dropdownMenu.classList.contains('open')) dropdownMenu.classList.remove('open');
    });

    if (btnPage && window.innerWidth > 1120) {
        btnPage.addEventListener('click', () => {
            if (!dropdownMenu.classList.contains('open')) dropdownMenu.classList.add('open');
        });
    }

    dropdown.addEventListener('click', event => event._isDropdownOpen = true);
    header.addEventListener('click', event => event._isClicked = true);
    
    window.addEventListener('click', event => {
        if (event._isDropdownOpen || event.target === btnPage || window.innerWidth <= 1120) return;
        dropdownMenu.classList.remove('open');

        if (event._isClicked) return;
        if (mobileTopMenu.classList.contains('open-mobile')) openMobileMenu();
    });

    window.addEventListener('keydown', event => {
        if (event.key === 'Escape' && mobileTopMenu.classList.contains('open-mobile')) openMobileMenu();
        if (event.key == 'Escape' && dropdownMenu.classList.contains('open') && window.innerWidth > 1120) {
            dropdownMenu.classList.remove('open');
        }
    });

    btnMobileMenu.addEventListener('click', openMobileMenu);

    function openMobileMenu() {
        const mobileTopMenu = document.querySelector('.hidden-block');
        const header = document.querySelector('.header');
        if (!mobileTopMenu.style.maxHeight) {
            header.style.backgroundColor = '#0F172B';
            mobileTopMenu.style.maxHeight = mobileTopMenu.scrollHeight + 'px';
            mobileTopMenu.classList.add('open-mobile');
        } else {
            header.style.backgroundColor = '';
            mobileTopMenu.style.maxHeight = '';
            mobileTopMenu.classList.remove('open-mobile');
        }
    }
}