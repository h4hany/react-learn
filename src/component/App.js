import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
import Index from "./todo/Index";
import {addTodo, generateId,findById,toggleTodo,updateTodo,removeTodo} from "../actions/todo/TodoHelper";

class App extends Component {
    state = {
        todos: [
            {id: 1, name: 'Learn JSX', isCompleted: true},
            {id: 2, name: 'React Route', isCompleted: false},
            {id: 3, name: 'Ship IT !', isCompleted: false},

        ],
        currentTodo: ''
    };

    handleInputChange = (evt) => {
        this.setState({
            currentTodo: evt.target.value
        })
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = {
            id: generateId(this.state.todos),
            name: this.state.currentTodo,
            isCompleted: false
        };
        const updatedTodo = addTodo(this.state.todos, newTodo)
        this.setState({
            todos: updatedTodo,
            currentTodo: '',
            errorMessage: ''
        })
    };

    handleEmptyForm=(evt) =>{
        evt.preventDefault();
        this.setState({
            errorMessage: 'Enter Todo Name'
        })
    };

    handleToggle = (id) => {
        const todo = findById(this.state.todos, id);
        const updatedTodo = toggleTodo(todo);
        const updatedList = updateTodo(this.state.todos,updatedTodo);
        this.setState({todos: updatedList})
    };
    handleRemove =(id)=>{
        const updatedList = removeTodo(this.state.todos,id);
        this.setState({todos: updatedList})
    }
    render() {
        const submitForm = (this.state.currentTodo) ? this.handleSubmit : this.handleEmptyForm
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>React Todos</h2>
                </header>

                <Index
                    error={this.state.errorMessage}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={submitForm}
                    handleRemove={this.handleRemove}
                    currentTodo={this.state.currentTodo}
                    handleToggle={this.handleToggle}
                    todos={this.state.todos}/>

            </div>
        );
    }
}

export default App;
