import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;

/*

Explaining How It Works

Line 01: We're importing a default, native element called React from using React as a model
Line 02: We're importing the Constant Function called "Todo" from Todo.JS 
Line 03: Empty Space
Line 04: We're creating a Constant Function called "TodoList" that inherits proprs and key handlers
Line 05: We're returning the data within the CF to call it
Line 06: Div Marker Styling
Line 07: We're using an array method, "Mapping" to scan over the "Props" of "Todos" 
Line 08: Defining The ToDo in which we map over
Line 09: Creating an event handler, called "ToggleComplete" when someone clicks on the task
Line 10: Creating a Key Value Pair of "Key" = value {todo.id}
Line 11: Creating a Key Value Pair of "todo" = value {todo}
Line 12: Div Marker Styling
Line 13: Closing Props
Line 14: Closing Div
Line 15: Closing Return
Line 16: Closing Function
Line 17: Empty Space
Line 18: We're now exporting our new Constant Array / Function "TodoList" so it can be accessed elsewhere

*/