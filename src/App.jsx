import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" id="newTodo" placeholder="Add a new todo" />
      <button onClick={() => {
        const newTodo = document.getElementById('newTodo').value.trim();
        if (newTodo) {
          addTodo(newTodo);
          document.getElementById('newTodo').value = '';
        }
      }}>Add</button>
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;                                                                                                                                                                                                                                           ____________________________________________________________________________________________________________________           

Codice per ToDoItem: import React from 'react';

const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;