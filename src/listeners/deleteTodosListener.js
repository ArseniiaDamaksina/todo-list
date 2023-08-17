import data from '../data.js';
import dom from '../dom.js';

const deleteTodosListener = () => {
    dom.clearBtn.addEventListener('click', () => {
        dom.itemsList.innerHTML = '';
        data.items = [];
    });
};

export default deleteTodosListener;
