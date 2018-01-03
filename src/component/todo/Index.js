import React, {Component} from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class Index extends Component {
    render() {
        return (
            <div className='Todo-App'>
                <TodoForm handleInputChange={this.props.handleInputChange} currentTodo={this.props.currentTodo}/>
                <TodoList todos={this.props.todos}/>
            </div>
        );
    }
}

export default Index;
