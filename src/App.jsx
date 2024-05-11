import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const [checkedTodos, setCheckedTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((t) => t.id === editId);
      const updatedTodos = todos.map((t) => (t.id === editTodo.id ? { ...t, todo: todo } : t));
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }
    if (todo !== "") {
      setTodos([{ id: uuidv4(), todo }, ...todos]);
      setTodo(""); // Clear the input field after adding a todo
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  const handleCheckboxChange = (id) => {
    if (checkedTodos.includes(id)) {
      setCheckedTodos(checkedTodos.filter((todoId) => todoId !== id));
    } else {
      setCheckedTodos([...checkedTodos, id]);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">{editId ? "Edit" : "Go"}</button>
        </form>
        <ul className="allTodos">
          {todos.map((t) => (
            <li key={t.id} className="singleTodo">
              <div className="todoItem">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkedTodos.includes(t.id)}
                  onChange={() => handleCheckboxChange(t.id)}
                />
                <span className={`todoText ${checkedTodos.includes(t.id) ? 'todo-completed' : ''}`}>
                  {t.todo}
                </span>
              </div>
              <div className="todoActions">
                <button className="editBtn" onClick={() => handleEdit(t.id)}>
                  Edit
                </button>
                <button className="deleteBtn" onClick={() => handleDelete(t.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
