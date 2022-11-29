import {
  Grid,
  IconButton,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Build, Delete } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import { deleteTask, editTask } from "../../redux/todos/slice";
import EditTodo from "./EditTodo";

export default () => {
  const todosList = useSelector((state) => state.todos.todosList);
  const dispatch = useDispatch();
  const classes = useStyle();

  const onDelete = (key) => {
    dispatch(deleteTask(key));
  };

  const onEdit = (key) => {
    dispatch(editTask(key));
  };

  return (
    <>
      {Object.entries(todosList).map(([key, { taskText, isEditing }]) => (
        <Grid xs={12} item key={key}>
          {!isEditing ? (
            <Paper elevation={2} className={classes.paper}>
              <span>{taskText}</span>
              <IconButton
                color="primary"
                aria-label="Edit"
                className={classes.icon}
                onClick={() => onEdit(key)}
              >
                <Build fontSize="small" />
              </IconButton>
              <IconButton
                color="secondary"
                aria-label="Delete"
                onClick={() => onDelete(key)}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Paper>
          ) : (
            <EditTodo elementKey = {key} taskText={taskText}/>
          )}
        </Grid>
      ))}
    </>
  );
};

const useStyle = makeStyles(() => ({
  icon: {
    marginLeft: "auto",
  },
  paper: {
    margin: "auto",
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    width: 500,
  },
}));
