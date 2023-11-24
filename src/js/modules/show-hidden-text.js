export function showHiddenText() {
    const btnVisible = document.querySelector('.btn-read-more');
    const btnHideText = document.querySelector('.btn-text-visible');
    const hiddenText = document.querySelector('.about-us-hidden-text');

    if (btnVisible) {
        btnVisible.addEventListener('click', () => {
            if (!hiddenText.style.maxHeight) {
                hiddenText.style.maxHeight = hiddenText.scrollHeight + 'px';
                hiddenText.classList.add('hidden-visible');
            }
        });
    }
    
    if (hiddenText) {
        btnHideText.addEventListener('click', () => {
            if (hiddenText.style.maxHeight) {
                hiddenText.style.maxHeight = null;
                hiddenText.classList.remove('hidden-visible');
            }
        });
    }
}