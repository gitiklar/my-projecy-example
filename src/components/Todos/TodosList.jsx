import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

export default () => {
  const todosList = useSelector((state) => state.todos.todosList);

  return (
    <>
      {Object.entries(todosList).map(([key, { taskText, isEditing }]) => (
        <Grid xs={12} item key={key}>
          {!isEditing ? (
            <TodoItem elementKey={key} taskText={taskText} />
          ) : (
            <EditTodo elementKey={key} taskText={taskText} />
          )}
        </Grid>
      ))}
    </>
  );
};
