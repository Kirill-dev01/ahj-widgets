export default class Collapse {
    constructor(element) {
        this.element = element;
        this.btn = this.element.querySelector('.collapse-btn');
        this.wrapper = this.element.querySelector('.collapse-content-wrapper');

        this.init();
    }

    init() {
        console.log('Кнопка найдена, вешаем слушатель клика');
        this.btn.addEventListener('click', () => {
            console.log('Клик сработал!');
            this.toggle();
        });
    }

    toggle() {
        // Проверяем, открыт ли сейчас блок
        const isOpen = this.wrapper.classList.contains('open');

        if (isOpen) {
            // Если открыт -> закрываем
            this.wrapper.style.height = `${this.wrapper.scrollHeight}px`; // Фиксируем текущую высоту

            requestAnimationFrame(() => {
                this.wrapper.style.height = '0px';
                this.wrapper.classList.remove('open');
            });
        } else {
            // Если закрыт -> открываем
            this.wrapper.classList.add('open');
            this.wrapper.style.height = `${this.wrapper.scrollHeight}px`; // Задаем высоту по контенту

            this.wrapper.addEventListener('transitionend', function handler() {
                // Проверяем, что блок всё еще открыт (пользователь не успел кликнуть снова)
                if (this.classList.contains('open')) {
                    this.style.height = 'auto';
                }
                this.removeEventListener('transitionend', handler);
            }, { once: true });
        }
    }
}



