import React, { useState, useContext } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import useInputState from "./hooks/useInputState";
import {
  ListsContext,
  ListsDispatchContext,
  ActiveListDispatchContext,
} from "./contexts/TodosContext";
import styles from "./styles/NavbarMenuStyles";

export default function NavbarMenu() {
  const lists = useContext(ListsContext);
  const listsDispatch = useContext(ListsDispatchContext);
  const activeListDispatch = useContext(ActiveListDispatchContext);
  const [newListDialogOpen, setNewListDialogOpen] = useState(false);
  const [removeListDialogOpen, setRemoveListDialogOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState();
  const [
    newListNameValue,
    handleNewListNameValueChange,
    resetNewListNameValue,
  ] = useInputState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (newListNameValue.length === 0) return;
    listsDispatch({ type: "ADD", newListName: newListNameValue });
    resetNewListNameValue();
  };

  //handlers for menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleListChange = (id) => {
    const newActiveList = lists.filter((list) => list.id === id);
    activeListDispatch(newActiveList[0].name);
    handleClose();
  };
  const handleClickOpenNewListDialog = () => {
    setNewListDialogOpen(true);
  };

  const handleCloseNewListDialog = () => {
    setNewListDialogOpen(false);
  };
  const handleClickOpenRemoveListDialog = (id) => {
    setSelectedListId(id);
    setRemoveListDialogOpen(true);
  };
  const handleCloseRemoveListDialog = () => {
    setRemoveListDialogOpen(false);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={styles.IconButton}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        variant="selectedMenu"
      >
        <MenuItem
          onClick={(e) => {
            activeListDispatch("all todos");
            handleClose();
          }}
          key="all todos"
        >
          ALL TODOS
        </MenuItem>
        {lists.map((list) => {
          return (
            <MenuItem
              key={list.id}
              id={list.id}
              onClick={(e) => handleListChange(list.id)}
              sx={styles.ListMenuItem}
            >
              <Typography>{list.name.toLocaleUpperCase()}</Typography>
              <ClearIcon
                onClick={() => handleClickOpenRemoveListDialog(list.id)}
                sx={styles.ClearIcon}
              />
            </MenuItem>
          );
        })}
        <MenuItem onClick={handleClickOpenNewListDialog}>
          ADD NEW LIST <AddIcon sx={styles.AddIcon} />
        </MenuItem>
      </Menu>
      <Dialog open={newListDialogOpen} onClose={handleCloseNewListDialog}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="New List Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleNewListNameValueChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewListDialog}>Cancel</Button>
          <Button
            onClick={(e) => {
              handleSubmitForm(e);
              handleCloseNewListDialog();
            }}
          >
            Add List
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={removeListDialogOpen} onClose={handleCloseRemoveListDialog}>
        <DialogContent>
          <Typography sx={styles.RemoveListTypography}>REMOVE LIST? THIS WON'T REMOVE TASKS</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRemoveListDialog}>Cancel</Button>
          <Button
            onClick={(e) => {
              listsDispatch({ type: "REMOVE", id: selectedListId });
              setSelectedListId(null);
              handleCloseRemoveListDialog();
            }}
          >
            Remove list
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
