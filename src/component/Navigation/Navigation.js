import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles";
import { useLocation } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { menu as menus } from "./menus";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import { hasChildren } from "./utils";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Navigation() {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const path = location.pathname.split("/");

  const MenuItem = ({ menu }) => {
    const Component = hasChildren(menu) ? MultiLevelMenu : SingleMenu;
    return <Component menu={menu} />;
  };

  const SingleMenu = ({ menu }) => {
    return (
      <List>
        <Link to={menu.path} className={classes.link}>
          <Tooltip title={menu.label}>
            <ListItem
              button
              className={path[1] === menu.active ? classes.isActive : ""}
            >
              <ListItemIcon>
                <menu.icon className={classes.primaryIcon} size={"25px"} />
              </ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItem>
          </Tooltip>
        </Link>
      </List>
    );
  };

  const MultiLevelMenu = ({ menu }) => {
    const { subMenus: children } = menu;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen((prev) => !prev);
    };

    return (
      <List>
        <Tooltip title={menu.label}>
          <ListItem
            button
            onClick={handleClick}
            className={path[1] === menu.active ? classes.isActive : ""}
          >
            <ListItemIcon>
              <menu.icon className={classes.primaryIcon} size={"25px"} />
            </ListItemIcon>
            <ListItemText>
              <Typography component={"h3"}>{menu.label}</Typography>
            </ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </Tooltip>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, key) => (
              // <Link to={child.path} className={classes.link}>
              <MenuItem key={key} menu={child} />
              // </Link>
            ))}
          </List>
        </Collapse>
      </List>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <img className={classes.logo} src={logo} alt="Logo" />
          <Link style={{ marginLeft: "80%", color: "#fff" }} to="/">
            Logout
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon style={{ color: "#fff" }} />
            )}
          </IconButton>
        </div>
        <Divider />
        {menus.map((menu, key) => (
          <MenuItem key={key} menu={menu} />
        ))}
      </Drawer>
    </div>
  );
}
