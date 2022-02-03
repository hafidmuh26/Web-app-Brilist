import { DRAWER_WIDTH } from "./constants";
import background from "../assets/image/Design8.jpg";
import { ListItemButton } from "@mui/material";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appTitle: {
    fontFamily: "Sofia",
    marginRight: 20,
  },
  link: {
    color: "#1a237e",
    textDecoration: "none",
  },
  isActive: {
    backgroundColor: "bisque",
    color: "#ff9800",
    textDecoration: "none",
  },
  primaryIcon: {
    color: "#1a237e",
    size: "25px",
  },
  appBar: {
    //background: "linear-gradient(45deg, #1a237e 40%, #1a237e 95%)",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "65px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    boxShadow: "0 2px 2px 2px #90a4ae",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #90a4ae",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    backgroundColor: "#00448b",
  },
  toolbar1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    width: "100%",
    padding: theme.spacing(3),
    marginLeft: 10,
    marginRight: 10,
  },
  mybreadcrumb: {
    color: "white",
  },
  linkBreadcrumb: {
    color: "white",
    textDecoration: "none",
  },
  logo: {
    height: "11vh",
    width: "45vw",
  },
  root1: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

export default styles;
