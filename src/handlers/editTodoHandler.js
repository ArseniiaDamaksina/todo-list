import data from '../data.js';
import dom from '../dom.js';

const editTodoHandler = (id) => {
    dom.submitBtn.innerText = 'Edit';
    // find the item by it's id
    const item = data.items.find((item) => item.id === id);
    
    // text and date from the object transfers to inputs
    dom.input.value = item.text;
    const date = new Date(item.dueDate);
    const formattedDate = date.toISOString().substring(0, 10);
    dom.inputDate.value = formattedDate;
};

export default editTodoHandler;

