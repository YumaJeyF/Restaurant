import { select } from './custom-select.js';

export function validateForm(form) {

    if (!form || form.nodeName !== 'FORM') return false;

    if (form.querySelector('#sel')) select();

    const inputs = Array.from(form);
    const btnSubmit = form.querySelector('#btn-sub');

    inputs.forEach(textField => {
        if (textField.type !== 'submit' && textField.type !== 'select') textField.setAttribute('is-valid', 0);
    });

    form.addEventListener('input', event => {
        if (event.target.getAttribute('is-valid')) validForm(event.target);
    });

    btnSubmit.addEventListener('click', event => {
        event.preventDefault();
        let indexValid = [];

        inputs.forEach(input => {
            if (input.getAttribute('is-valid')) indexValid.push(input.getAttribute('is-valid'));
        });
    
       const indexResult = indexValid.reduce((acc, item) => acc && item);
    
        if (Boolean(parseInt(indexResult))) {
            sendData();
            alert('Форма отправлена успешно!');
        } else {
            errorActive();
            alert('Ошибка в заполнении формы :(');
        }
    });

    function validForm(input) {
        if (input.dataset.reg) validWithReg(input);
        else validNotReg(input);
    }

    function validWithReg(input) {
        let reg;
        if (input.type === 'email' || input.type === 'text') reg = new RegExp(input.dataset.reg, 'i');
        else reg = new RegExp(input.dataset.reg);

        if (!reg.test(input.value)) {
            input.setAttribute('is-valid', 0);
            if (input.classList.contains('inp-frm-2')) input.parentNode.classList.add('error-valid');
            input.classList.add('error-valid');
        } else {
            input.setAttribute('is-valid', 1);
            if (input.classList.contains('inp-frm-2')) input.parentNode.classList.remove('error-valid');
            input.classList.remove('error-valid');
        }
    }

    function validNotReg(input) {
        if (input.value === '') {
            input.setAttribute('is-valid', 0);
            input.classList.add('error-valid');
        } else {
            input.setAttribute('is-valid', 1);
            input.classList.remove('error-valid');
        }
    }

    function errorActive() {
        inputs.forEach(input => {
            if (input.getAttribute('is-valid') == '0') input.classList.add('error-valid');
        });
    }

    function attributeIsValudDefault() {
        inputs.forEach(input => {
            if (input.getAttribute('is-valid') == '1') input.setAttribute('is-valid', 0); 
        });
    }

    async function sendData() {
        const data = new FormData(form);

        let response = await fetch('mail.php', {
            method: 'POST',
            body: data
        });

        if (response.ok) {
            attributeIsValudDefault();
            form.reset();
        } else {
           throw new Error(`Ошибка запроса на сервер, статус ошибки: ${response.status}`);
        }
    }

    const textArea = form.querySelector('#your-mes');

    if (textArea) {
        textArea.addEventListener('input', event => {
            if (textArea.style.height <= 400 + 'px') {
                textArea.style.height = 'auto';
                textArea.style.height = textArea.scrollHeight + 'px';
            }
        });
    
        textArea.addEventListener('scroll', event => {
            if (textArea.scrollTop > 0) {
                textArea.nextElementSibling.style.display = 'none';
            } else {
                textArea.nextElementSibling.style.display = '';
            }
        });
    }
}