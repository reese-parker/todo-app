import React, { useContext } from "react";
import {
  TextField,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  TodosDispatchContext,
  ActiveListContext,
  ListsContext,
} from "./contexts/TodosContext";
import useInputState from "./hooks/useInputState";
import styles from "./styles/TodoFormStyles";

export default function TodoForm() {
  const activeList = useContext(ActiveListContext);
  const dispatch = useContext(TodosDispatchContext);
  const lists = useContext(ListsContext);
  const [taskValue, handleTaskValueChange, resetTaskValue] = useInputState("");
  const [listValue, handleListValueChange, resetListValue] =
    useInputState(activeList);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (taskValue.length === 0) return;
    dispatch({ type: "ADD", task: taskValue, list: listValue });
    resetTaskValue();
  };

  return (
    <Paper sx={styles.Paper}>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <Grid container justifyContent="space-between" alignItems="center" spacing={3}>
          <Grid item xs={6}>
            <TextField
              value={taskValue}
              onChange={handleTaskValueChange}
              margin="normal"
              fullWidth
              label="Add New Todo"
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={styles.FormControl}>
              <InputLabel id="list-select-label">Add to</InputLabel>
              <Select
                labelId="list-select-label"
                id="list-select"
                label="add to"
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
          </Grid>
          <Grid item xs={2}>
            <IconButton type="submit">
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
