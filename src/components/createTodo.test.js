/**
 * @jest-environment jsdom
 */

import createTodo from './createTodo.js';

describe('Test createTodo function', () => {
    test('should create a todo item with correct properties', () => {
      const itemData = {
        id: 1,
        text: 'call Jack',
        dueDate: Date.now() + 24 * 60 * 60 * 1000 // Tomorrow
      };
  
      const actual = createTodo(itemData);
  
      expect(actual.nodeName).toEqual('DIV');
      expect(actual.childElementCount).toEqual(2);
      expect(actual.className).toEqual('todo-item');
      expect(actual.id).toEqual('1');
  
      const title = actual.querySelector('.title');
      expect(title.nodeName).toEqual('P');
      expect(title.innerText).toEqual('call Jack');
  
      const date = actual.querySelector('#date');
      expect(date.nodeName).toEqual('P');
  
      const btnContainer = actual.querySelector('.btn-container');
      expect(btnContainer.nodeName).toEqual('DIV');
  
      const editButton = btnContainer.querySelector('.edit-btn');
      expect(editButton.nodeName).toEqual('BUTTON');
  
      const deleteButton = btnContainer.querySelector('.delete-btn');
      expect(deleteButton.nodeName).toEqual('BUTTON');
    });

  });
  
