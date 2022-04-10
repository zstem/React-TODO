import React, {useState} from 'react';
import TodoForm from './TodoForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = t => {
        
        var newArray = [t, ...todos];
        setTodos(newArray);
        console.log(...todos);
        
    }

    const deleteTodo = t => {
        var newArray = todos.filter(n => n.id != t.id);
        setTodos(newArray);
    }

    const editTodo = t => {
        var userInput = prompt('Update your Todo')
        t.text = userInput;
        var newArray = [...todos];
        setTodos(newArray);
    }

    useEffect(() => {
        if(localStorage.getItem("userTodos")){
            setTodos(JSON.parse(localStorage.getItem("userTodos")));
        }
        
    }, [])

    useEffect(() => {
        localStorage.setItem("userTodos", JSON.stringify(todos));
    }, [todos])
    
  
    return (
    <div >
        <TodoForm onSubmit={addTodo} />
        <div className="todos">
            {todos.map(t => (<li className={`${t.class==t.classes[0] ? "li-blue" : (t.class==t.classes[1] ? "li-pink" : (t.class==t.classes[2] ? "li-red" : (t.class==t.classes[3] ? "li-orange" : (t.class==t.classes[4] ? "li-purple" : (t.class==t.classes[5] ? "li-green" : "li-yellow")))))}`}><div className="listText">{t.text}<span className="classText">{"   " + t.class}</span><div className="buttons"><DeleteIcon onClick={() => deleteTodo(t)} className="btn"></DeleteIcon><EditIcon onClick={() => editTodo(t)} className="btn"></EditIcon></div></div></li>))}
        </div>
    </div>
    );
  }

  export default TodoList;