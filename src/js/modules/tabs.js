export function openTabs() {
    const btnTab = document.querySelectorAll('.btn-food-menu');
    const foodMenu = document.querySelectorAll('.food-menu');

    if (foodMenu.length > 0) {
        btnTab.forEach(btn => btn.addEventListener('click', () => {
            const menu = document.querySelector(btn.dataset.tabOpen);
    
            if (!menu.classList.contains('tab-open') && !btn.classList.contains('active')) {
                btnTab.forEach(el => el.classList.remove('active'));
                foodMenu.forEach(el => el.classList.remove('tab-open'));
                btn.classList.add('active');
                menu.classList.add('tab-open');
            }
        }));
    
        document.querySelector('.btn-food-menu').click();
    }
}