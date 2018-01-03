import React, {Component} from 'react';

class TodoForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type='text'
                       onChange={this.props.handleInputChange}
                       value={this.props.currentTodo}
                />
            </form>
        );
    }
}

export default TodoForm;
