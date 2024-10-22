
// Import the TodoModule (uncomment if using Node.js)
const TodoModule = require('./todoModule.js');
console.log(TodoModule,"TodoModule");
// Using the TodoModule
const todo1 = TodoModule.addTodo('Learn JavaScript');
const todo2 = TodoModule.addTodo('Build a project');
TodoModule.listTodos();

TodoModule.completeTodo(todo1.id);
TodoModule.listTodos();

TodoModule.removeTodo(todo2.id);
TodoModule.listTodos();

// Attempting to access the private todos array directly (undefined)
console.log(TodoModule.todos); // undefined
