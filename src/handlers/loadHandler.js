import dom from '../dom.js';
import createTodo from '../components/createTodo.js';

const loadHandler = (arr) => {
    arr.forEach((itemData) => {
        const itemDom = createTodo(itemData);
        dom.itemsList.append(itemDom);
    });
};

export default loadHandler;
