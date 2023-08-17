import loadListener from './listeners/loadListener.js';
import addTodoListener from './listeners/addTodoListener.js';
import deleteTodosListener from './listeners/deleteTodosListener.js';
import removeErrorListener from './listeners/removeErrorListener.js';
import sortTodosListener from './listeners/sortTodosListener.js';
import clearIconListener from './listeners/clearIconListener.js';
import searchInputListener from './listeners/searchInputListener.js';

loadListener();
addTodoListener();
deleteTodosListener();
removeErrorListener();
sortTodosListener();
clearIconListener();
searchInputListener();

