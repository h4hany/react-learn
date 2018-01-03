import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
import Index from "./todo/Index";
import {addTodo, generateId} from "../actions/todo/TodoHelper";

class App extends Component {
    constructor() {
        super();

        //current variable in component

        this.state = {
            todos: [
                {id: 1, name: 'Learn JSX', isCompleted: true},
                {id: 2, name: 'React Route', isCompleted: false},
                {id: 3, name: 'Ship IT !', isCompleted: false},

            ],
            currentTodo: ''
        };

        //bind action function with react

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmptyForm = this.handleEmptyForm.bind(this)

    }

    handleInputChange(evt) {
        this.setState({
            currentTodo: evt.target.value
        })
    }

    handleSubmit(evt) {
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
    }

    handleEmptyForm(evt) {
        evt.preventDefault();
        this.setState({
            errorMessage: 'Enter Todo Name'
        })
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
                       currentTodo={this.state.currentTodo}
                       todos={this.state.todos}/>

            </div>
        );
    }
}

export default App;
