import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Calendars", "Parents", "Alumni", "Summer-Programs"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink to={item}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />

      <NavLink to="/admissions" sx={{ color: "#fff" }}>
        {" "}
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText>ADMISSIONS</ListItemText>
        </ListItemButton>
      </NavLink>
      <NavLink to="/academics" sx={{ color: "#fff" }}>
        {" "}
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText>ACADEMICS</ListItemText>
        </ListItemButton>
      </NavLink>
      <NavLink to="/athletics" sx={{ color: "#fff" }}>
        {" "}
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText>ATHLETICS</ListItemText>
        </ListItemButton>
      </NavLink>
      <NavLink to="/student-life" sx={{ color: "#fff" }}>
        {" "}
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText>STUDENT LIFE</ListItemText>
        </ListItemButton>
      </NavLink>
      <NavLink to="/support-bc" sx={{ color: "#fff" }}>
        {" "}
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText>SUPPORT BC</ListItemText>
        </ListItemButton>
      </NavLink>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "", sm: "block" } }}
          >
            LIGHTMODEL
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink to={item}>
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 4 }}>
        {/* <Toolbar /> */}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
