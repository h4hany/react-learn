import React, {Component} from 'react';
import TodoItem from './TodoItem'
class TodoList extends Component {
    render() {
        return (
            <div className='Todo-list'>
                <ul>
                    {this.props.todos.map(todo => <TodoItem key={todo.id}
                                                            handleRemove={this.props.handleRemove}
                                                            handleToggle={this.props.handleToggle}
                                                            todo={todo}/>)}
                </ul>
            </div>

        );
    }
}

export default TodoList;
