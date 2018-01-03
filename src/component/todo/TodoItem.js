import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <li >
                <input type='checkbox' defaultChecked={this.props.todo.isCompleted}/>
                {this.props.todo.name}
            </li>
        );
    }
}

export default TodoItem;
