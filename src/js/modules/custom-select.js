import Choices from 'choices.js';

export function select() {
    const select = document.querySelector('#sel');

    if (select) {
        const choices = new Choices(select, { searchEnabled: false });
    }
}