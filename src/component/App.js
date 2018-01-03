import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
import Index from "./todo/Index";

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
    }
    handleInputChange(evt){
        this.setState({
            currentTodo: evt.target.value
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>React Todos</h2>
                </header>
                <Index handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo} todos={this.state.todos}/>

            </div>
        );
    }
}

export default App;
