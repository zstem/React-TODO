import React, {useState} from 'react';
var classesGlobal = [];
function TodoForm(props) {

    const [input, setInput] = useState("");
    const [inputClass, setInputClass] = useState("");

    

    const randomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }

    const submit = t => {
        t.preventDefault();
        if(input != ""){
            if(!classesGlobal.includes(inputClass)){
                classesGlobal.push(inputClass);
            }
            props.onSubmit({
                id: Math.floor(Math.random(1000)*1000),
                text: input,
                classes: [...classesGlobal],
                class: inputClass,
                
            });
            
            setInputClass("");
            setInput("");
        }
    }

    const change = t => {
        setInput(t.target.value);
        
    }
    
    const changeClass = c => {
        setInputClass(c.target.value);
        
    }

    return (
    <div className='head'>
        <input className="todoField" placeholder="Please Enter a Todo" type="text" value={input} onChange={change}></input>
        <input className="todoClassField" placeholder="Enter Class (optional)" type="text" value={inputClass} onChange={changeClass}></input>
        <button onClick={submit}>To Do</button>
    </div>
    );
  }

  export default TodoForm;