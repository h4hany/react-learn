import React, {Component} from 'react';

class TodoForm extends Component {
    render() {
        return (
            <form>
                <input type='text' onChange={this.props.handleInputChange} value={this.props.currentTodo}/>
            </form>
        );
    }
}

export default TodoForm;
