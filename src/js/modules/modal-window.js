import { vars } from './global-vars.js';
 
export function modalWindow() {
    const btnsOpen = document.querySelectorAll('.second-block-inf');
    const btnsClose = document.querySelectorAll('.close-modal-window');
    const fixedBlocks = document.querySelectorAll('.fixed');

    // Изменение цвета иконки при наведении
    
    btnsOpen.forEach(item => {
        item.addEventListener('mouseover', () => item.firstElementChild.classList.add('active'));
        item.addEventListener('mouseout', () => item.firstElementChild.classList.remove('active'));
    });

    btnsOpen.forEach(btn => btn.addEventListener('click', openModalWindow));
    btnsClose.forEach(btn => btn.addEventListener('click', () => closeModalWindow(btn.closest('.modal-container'))));

    function openModalWindow() {
        const modal = document.querySelector(this.dataset.modal);
        const paddingRight = window.innerWidth - vars.body.offsetWidth + 'px';

        if (!modal.classList.contains('open')) {
            modal.classList.add('open');
            if (paddingRight != '0px') {
                vars.container.style.paddingRight = paddingRight;
                fixedBlocks.forEach(block => block.style.paddingRight = paddingRight);
            }
            modal.lastElementChild.classList.add('open');
            let scrollY = window.scrollY;
            vars.body.style.position = 'fixed';
            vars.body.style.top = -scrollY + 'px';
        }

        if (modal.classList.contains('open')) closeModalOnDarkArea(modal, this);
    }

    function closeModalWindow(modal) {
        if (modal.classList.contains('open')) {
            modal.classList.remove('open');
            vars.container.style.paddingRight = '';
            fixedBlocks.forEach(block => block.style.paddingRight = '');
            modal.lastElementChild.classList.remove('open');
            vars.body.style.position = '';
            window.scrollTo(0, parseInt(vars.body.style.top) * -1);
            vars.body.style.top = '';
        }
    }

    function closeModalOnDarkArea(modal, btn) {
        modal.addEventListener('click', event => {
            if (!event.target.closest('.modal-window') && event.target !== btn) closeModalWindow(modal);
        });

        window.addEventListener('keydown', event => {
            if (event.key === 'Escape') closeModalWindow(modal);
        });
    }
}