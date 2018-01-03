import React, {Component} from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class Index extends Component {
    render() {
        return (
            <div className='Todo-App'>
                {this.props.error &&
                <span className='error'>{this.props.error}</span>}
                <TodoForm
                    handleInputChange={this.props.handleInputChange}
                    currentTodo={this.props.currentTodo}
                    handleSubmit={this.props.handleSubmit}

                />
                <TodoList
                    handleRemove={this.props.handleRemove}

                    handleToggle={this.props.handleToggle}
                    todos={this.props.todos}
                />
            </div>
        );
    }
}

export default Index;
