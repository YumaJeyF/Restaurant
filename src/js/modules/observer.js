import { appearanceSection } from './appearance-section.js';

export function observer() {
    const items = document.querySelectorAll('.change');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entrie => {
            if (entrie.isIntersecting) appearanceSection(entrie);
        });
    }, {
        threshold: 0.1
    });

    items.forEach(item => observer.observe(item));
}
