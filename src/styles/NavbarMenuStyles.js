const styles = {
  IconButton: { marginRight: "0.5rem" },
  ListMenuItem: {
    display: "flex",
    justifyContent: "space-between",
    "&:hover svg": {
      display: "contents",
    },
    ClearIcon: {
      display: "none",
      fontSize: "small",
      marginLeft: "0.5rem",
    },
  },
  AddIcon: { marginLeft: "0.75rem", fontSize: "small" },
  RemoveListTypography: { marginLeft: "0.75rem", fontSize: "small" },
};

export default styles;
