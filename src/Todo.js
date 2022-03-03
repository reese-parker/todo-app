import React, { useContext, memo } from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Paper,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { TodosDispatchContext } from "./contexts/TodosContext";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import styles from "./styles/TodoStyles";

function Todo({ id, task, list, completed }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const dispatch = useContext(TodosDispatchContext);

  return (
    <Paper variant="elevation" elevation={3} sx={styles.Paper}>
      <ListItem sx={styles.ListItem}>
        {isEditing ? (
          <EditTodoForm
            id={id}
            task={task}
            list={list}
            toggleIsEditing={toggleIsEditing}
          />
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => dispatch({ type: "TOGGLE", id: id })}
            />
            <ListItemText
              sx={{
                ...styles.ListItemText,
                textDecoration: completed ? "line-through" : "none",
              }}
            >
              {task}
            </ListItemText>
            <IconButton
              onClick={() => dispatch({ type: "REMOVE", id: id })}
              aria-label="Delete"
            >
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <Edit />
            </IconButton>
          </>
        )}
      </ListItem>
    </Paper>
  );
}

export default memo(Todo);
