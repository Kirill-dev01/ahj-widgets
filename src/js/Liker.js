export default class Liker {
    constructor(element) {
        this.element = element;
        this.btn = this.element.querySelector('.like-btn');
        this.init();
    }

    init() {
        this.btn.addEventListener('click', () => {
            this.spawnHeart();
        });
    }

    spawnHeart() {
        // Создаем элемент сердечка
        const heart = document.createElement('div');
        heart.className = 'heart';

        heart.textContent = '❤️';

        // Выбираем случайную траекторию от 1 до 4
        const randomTrajectory = Math.floor(Math.random() * 4) + 1;
        heart.classList.add(`heart-anim-${randomTrajectory}`);

        // Удаляем элемент из DOM сразу после завершения анимации
        heart.addEventListener('animationend', () => {
            heart.remove();
        });

        // Добавляем в контейнер
        this.element.appendChild(heart);
    }
}