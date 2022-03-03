import React from "react";
import { Paper, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./styles/Themes";
import useToggleState from "./hooks/useToggleState";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import styles from "./styles/TodoAppStyles";

export default function TodoApp() {
  const [darkMode, toggleDarkMode] = useToggleState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper sx={styles.Paper} elevation={0}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Grid container justifyContent="center" sx={styles.GridContainer}>
          <Grid item xs={11} md={8} lg={6}>
            <TodoForm />
            <TodoList />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
