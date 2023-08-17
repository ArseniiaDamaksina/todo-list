import editTodoHandler from '../handlers/editTodoHandler.js';
import deleteTodoHandler from '../handlers/deleteTodoHandler.js';
import findDeltaOfDates from '../utils/findDeltaOfDates.js';

const createTodo = (itemData) => {
    // create div
    const container = document.createElement('div');
    container.classList.add('todo-item');
    container.id = itemData.id;

    // create title
    const title = document.createElement('p');
    title.innerText = itemData.text;
    title.classList.add('title');

    // create date
    const date = document.createElement('p');
    date.id = 'date';
    const deltaDays = findDeltaOfDates(itemData.dueDate);
    if (deltaDays === 0) {
        date.innerText = `Today`;
    } else if (deltaDays === 1) {
        date.innerText = `In 1 day`;
    } else {
        date.innerText = `In ${deltaDays} days`;
    }

    // create buttons container
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    // create edit button
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-btn');
    btnEdit.innerHTML = '<i class="fas fa-edit"></i>';

    // container for date and buttons
    const dateBtnsContainer = document.createElement('div');
    dateBtnsContainer.className = 'dateBtnsContainer';

    // add event
    btnEdit.addEventListener('click', () => {
        container.classList.add('selected');
        editTodoHandler(itemData.id);
    });

    // create delete button
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-btn');
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
    // add event
    btnDelete.addEventListener('click', () => {
        deleteTodoHandler(itemData.id);
    });

    // append
    btnContainer.append(btnEdit, btnDelete);
    dateBtnsContainer.append(date, btnContainer);
    container.append(title, dateBtnsContainer);

    return container;
};

export default createTodo;
