export default class Chat {
    constructor(element) {
        this.element = element;
        this.btn = this.element.querySelector('.chat-btn');
        this.closeBtn = this.element.querySelector('.chat-close');

        this.init();
    }

    init() {
        // Открытие чата по клику на круглую кнопку
        this.btn.addEventListener('click', () => {
            this.element.classList.add('active');
        });

        // Закрытие чата по клику на крестик
        this.closeBtn.addEventListener('click', () => {
            this.element.classList.remove('active');
        });
    }
}