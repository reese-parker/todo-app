import React, { useContext } from "react";
import { Typography, AppBar, Toolbar, Box, Button } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { ActiveListContext } from "./contexts/TodosContext";
import NavbarMenu from "./NavbarMenu";
import styles from "./styles/NavbarStyles";

export default function Navbar(props) {
  const { toggleDarkMode } = props;
  const activeList = useContext(ActiveListContext);

  return (
    <Box sx={styles.Box}>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <NavbarMenu />
          <Typography
            variant="h6"
            component="div"
            sx={styles.ActiveListTypography}
          >
            {activeList.toUpperCase()}
          </Typography>
          <Typography variant="h1" color="inherit" sx={styles.HeaderTypograhy}>
            TODO
          </Typography>
          <Button onClick={toggleDarkMode} color="inherit">
            <LightbulbIcon sx={styles.LightbulbIcon} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
