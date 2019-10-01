import React from 'react';

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;

/*

Explaining How It Works

Line 01: We're importing a default, native element called React from using React as a model
Line 02: Empty Space
Line 03: We're creating a Constant Function named Todo that will inherit props and further logic
Line 04: We're returning the data within the function to call it
Line 05: Div Marker Styling
Line 06: ?
Line 07: ?
Line 08: Div Marker Styling
Line 09: ?
Line 10: Div Marker Styling
Line 11: Closing Return
Line 12: Closing Function
Line 13: Empty Space
Line 14: We're now exporting our new Constant Function "Todo" so it can be accessed elsewhere

*/