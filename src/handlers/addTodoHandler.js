import data from '../data.js';
import dom from '../dom.js';
import createTodo from '../components/createTodo.js';
import findDeltaOfDates from '../utils/findDeltaOfDates.js';

const addTodoHandler = (value, date) => {
    if (dom.submitBtn.innerText === 'Edit') {
        // update UI
        const editedItem = document.querySelector('.selected');
        editedItem.querySelector('.title').innerText = value;

        const deltaDays = findDeltaOfDates(date);
        if (deltaDays === 0) {
            editedItem.querySelector('#date').innerText = `Today`;
        } else if (deltaDays === 1) {
            editedItem.querySelector('#date').innerText = `In 1 day`;
        } else {
            editedItem.querySelector('#date').innerText = `In ${deltaDays} days`;
        }
        
        // Update data
        const id = Number(editedItem.id);
        const itemData = data.items.find((item) => item.id === id);
        itemData.text = value;
        const dateUpdated = new Date(date);
        const milliseconds = dateUpdated.getTime();
        itemData.dueDate = milliseconds;

        editedItem.classList.remove('selected');
        dom.submitBtn.innerText = 'Submit';
        dom.input.value = '';
        dom.inputDate.value = '';
    } else {
        // check if value exists
        if (value === '' || date === '') {
            dom.error.innerText = 'the text or date can not be empty';
            dom.error.classList.add('error1');
            return;
        }
        else {
            dom.error.innerText = '';
            dom.error.classList.remove('error1');
        }

        const newItem = {
            id: data.id++,
            text: value,
            dueDate: date
        };
        data.items.unshift(newItem);

        const newItemDom = createTodo(newItem);
        dom.itemsList.prepend(newItemDom);
        dom.input.value = '';
        dom.inputDate.value = '';
    }
};

export default addTodoHandler;
