import { IconButton, Input, makeStyles, Paper } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTask } from "../../redux/todos/actions";

export default ({ elementKey, taskText }) => {
  const [inpTaskText, setInpTaskText] = useState(taskText);
  const dispatch = useDispatch();
  const classes = useStyle();

  const onSave = () => {
    dispatch(saveTask(elementKey, inpTaskText));
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <Input
        value={inpTaskText}
        onChange={(e) => setInpTaskText(e.target.value)}
      />
      <IconButton
        type="submit"
        color="primary"
        aria-label="Add"
        onClick={onSave}
      >
        <Save fontSize="small" />
      </IconButton>
    </Paper>
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
