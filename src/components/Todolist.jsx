import React, { useState } from 'react';

function Todolist() {
  const [inputText, setInputText] = useState('');      
  const [todos, setTodos] = useState([]);              
  const [isEditing, setIsEditing] = useState(false);   
  const [editIndex, setEditIndex] = useState(null);    
  const [editText, setEditText] = useState('');

  const handleAddTodo = () => {
    if (inputText) {
      setTodos([...todos, inputText]);
      setInputText('');
    }
    else{
        alert("Enter Todo");
    }
  };

 
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  const handleEditTodo = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditText(todos[index]);
  };


  const handleSaveEdit = () => {
    if (editText) {
      const newTodos = todos.map((todo, index) =>
        index === editIndex ? editText : todo
      );
      setTodos(newTodos);
      setIsEditing(false);
      setEditIndex(null);
      setEditText('');
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div id="todo" className="container">
      <br />
      <br />
      <div className="form-group form-inline">
        <label className="control-label">Enter todo</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button id="btn" className="btn" onClick={handleAddTodo}>
          +
        </button>
      </div>
      <h3>TODO List</h3>
      <div id="todoList">
        {todos.length === 0 ? (
          <p>No Data</p>
        ) : (
          <ul className="list-group">
            {todos.map((todo, index) => (
              <li key={index}>
                
                {isEditing && editIndex === index ? (
                  <>
                    <input
                      type="text"
                      className="form-control"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button className="btn btn-success btn-sm" onClick={handleSaveEdit}>
                      Save
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    {todo}
                    <span> </span>
                    <button className="btn btn-warning btn-sm" onClick={() => handleEditTodo(index)}>
                      Edit
                    </button>
                    <span> </span>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTodo(index)}>
                      Delete
                    </button>
                    <br/><br/>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Todolist;
