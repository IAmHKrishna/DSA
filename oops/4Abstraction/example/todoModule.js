
const TodoModule = (function() {
    // Private array to store todos
    let todos = [];
  
    // Private function to log actions
    function logAction(action, todo) {
      console.log(`[${new Date().toLocaleTimeString()}] ${action}:`, todo);
    }
  
    // Public method to add a todo
    function addTodo(task) {
      const todo = { id: Date.now(), task, completed: false };
      todos.push(todo);
      logAction('Added', todo);
      return todo;
    }
  
    // Public method to remove a todo by id
    function removeTodo(id) {
      const index = todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        const removed = todos.splice(index, 1)[0];
        logAction('Removed', removed);
        return removed;
      } else {
        console.log(`Todo with id ${id} not found.`);
      }
    }
  
    // Public method to mark a todo as completed
    function completeTodo(id) {
      const todo = todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = true;
        logAction('Completed', todo);
        return todo;
      } else {
        console.log(`Todo with id ${id} not found.`);
      }
    }
  
    // Public method to list all todos
    function listTodos() {
      console.log('Current Todos:', todos);
      return todos;
    }
  
    // Expose public methods
    return {
      addTodo,
      removeTodo,
      completeTodo,
      listTodos
    };
  })();
  
  // Exporting the module (for environments like Node.js)
  module.exports = TodoModule;
  