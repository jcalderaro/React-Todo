import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...Select New Task To Do"
      />
      <button onClick={props.handleAddTodo}>Add A New Task To Do</button>
      <button onClick={props.handleClearTodos}>Clear Completed Tasks</button>
    </form>
  );
};

export default TodoForm;

/*

Explaining How It Works

Line 01: We're importing a default, native element called React from using React as a model
Line 02: Empty Space
Line 03: We're creating a Constant Function named TodoForm that will inherit props and further logic
Line 04: We're returning the data within the function to call it
Line 05: Form Marker Styling
Line 06: Defining The Input Data
Line 07: ?
Line 08: ?
Line 09: ?
Line 10: ?
Line 11: We're setting the placeholder to fill in the form with the string, "...Select A New Task To Do"
Line 12: Div Marker Styling
Line 13: Creating a Button, which OnClick will inherit the logic of {props.handleAddTodo} with the name "Add A New Task To Do"
Line 14: Creating a Button, which OnClick will inherit the logic of {props.handleClearTodos} with the name "Clear Completed Tasks"
Line 15: Form Marker Styling
Line 16: Closing Return
Line 17: Closing Function
Line 18: Empty Space
Line 19: We're now exporting our new Constant Function "TodoForm" so it can be accessed elsewhere

*/