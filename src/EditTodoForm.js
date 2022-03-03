import React, { useContext } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material/";
import DoneIcon from "@mui/icons-material/Done";
import useInputState from "./hooks/useInputState";
import { TodosDispatchContext, ListsContext } from "./contexts/TodosContext";
import styles from "./styles/EditTodoFormStyles";

export default function EditTodoForm({ id, task, list, toggleIsEditing }) {
  const [taskValue, handleTaskValueChange, resetTaskValue] =
    useInputState(task);
  const [listValue, handleListValueChange, resetListValue] =
    useInputState(list);
  const dispatch = useContext(TodosDispatchContext);
  const lists = useContext(ListsContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "UPDATE",
          id: id,
          newTask: taskValue,
          newList: listValue,
        });
        resetTaskValue();
        resetListValue();
        toggleIsEditing();
      }}
      style={styles.form}
    >
      <TextField
        value={taskValue}
        onChange={handleTaskValueChange}
        fullWidth
        autoFocus
        sx={styles.TextField}
      />
      <FormControl sx={styles.FormControl}>
        <InputLabel id="list-select-label">move to</InputLabel>
        <Select
          labelId="list-select-label"
          id="list-select"
          label="move to"
          value={listValue}
          onChange={handleListValueChange}
        >
          <MenuItem value="all todos">all todos</MenuItem>
          {lists.map((list) => {
            return (
              <MenuItem value={list.name} key={list.id}>
                {list.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <IconButton type="submit">
        <DoneIcon />
      </IconButton>
    </form>
  );
}
