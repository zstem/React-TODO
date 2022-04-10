import React, { Component } from 'react';



class Todo extends Component{

    

    state = {
        todoList: [],
        todo: {
            id: 0,
            text: ""
        }
    }

    

    delete(id){
        this.setState({todoList: this.state.todoList.splice(this.state.todoList.indexOf(id), 1)});
        console.log(id, "deleted!");
        console.log(this.state.todoList);
        this.render();
     }

    add = () => {
        var input = document.getElementById("todoField").value;
        this.setState({todos: {id: this.state.todoList.length, text: input}});
        this.state.todoList.push(input);
        console.log(this.state.todoList);
        document.getElementById("todoField").value = "";
    }

    

    render(){
        return(
            <div className="todo">
                <div>
                <ul className="todos">
                    {this.state.todoList.map(t => (<li>{t}<button onClick={() => this.delete(t)} className="delete-btn">G</button></li>))}
                </ul>
                </div>
            </div>
        ) 
    }
    
    
}

export default Todo;