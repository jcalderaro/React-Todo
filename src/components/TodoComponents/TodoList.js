/* Information Below Came With Assignment // 

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// Information Above Came With Assignment */ 

import React from 'react';
import Todo from './Todo';

function TodoList(props){
    return(
        <div className="todo-list-div">
            {props.todoListItems.map(item => (
                <Todo key={item.id} item={item} toggleComplete={props.toggleComplete} />
            ))}
        </div>
    )
}

export default TodoList;