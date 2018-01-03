import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <li>
                <span className='delete-item'>
                    <a onClick={() => this.props.handleRemove(this.props.todo.id)}> X </a>
                </span>
                <input type='checkbox' defaultChecked={this.props.todo.isCompleted}
                       onChange={() => this.props.handleToggle(this.props.todo.id)}
                />
                {this.props.todo.name}
            </li>
        );
    }
}

export default TodoItem;
