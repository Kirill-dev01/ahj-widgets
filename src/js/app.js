import '../css/style.css';
import Collapse from './Collapse';
import Chat from './Chat';
import Liker from './Liker';

// Инициализация Collapse
const collapseEl = document.getElementById('collapse-widget');
if (collapseEl) {
    new Collapse(collapseEl);
}

// Инициализация Chat
const chatEl = document.getElementById('chat-widget');
if (chatEl) {
    new Chat(chatEl);
}

// Инициализация Liker
const likerEl = document.getElementById('liker-widget');
if (likerEl) {
    new Liker(likerEl);
}