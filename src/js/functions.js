// Данный файл - собрание подключений готовых компонентов.

// Наблюдатель

import { observer } from './modules/observer.js';

observer();

// Навигационное меню сверху

import { navigation } from './modules/navigation.js';

navigation();

// Показ скрытого текста

import { showHiddenText } from './modules/show-hidden-text.js';

showHiddenText();

// Табы

import { openTabs } from './modules/tabs.js';

openTabs();

// Валидация формы (бронирование столика), настройка плагина choices.js, настрока textarea

import { validateForm } from './modules/form.js';

const form = document.querySelector('.frm');
const btnSubmit = document.querySelector('#btn-sub');

if (form) validateForm(form, btnSubmit);

// Валидация email в footer

const formFooter = document.querySelector('.frm-2');

if (formFooter) validateForm(formFooter);

// Слайдер-свайпер

import { workSwiper } from './modules/swiper.js';

workSwiper();

// Модальные окна

import { modalWindow } from './modules/modal-window.js';

modalWindow();

// Форма отправки сообщения 

const frmThird = document.querySelector('.frm-third');

if (frmThird) validateForm(frmThird);