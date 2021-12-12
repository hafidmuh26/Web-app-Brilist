import {
  blackColor,
  whiteColor,
  hexToRgb,
} from "../../../assets/jss/material-dashboard-react.js";

const styles = (theme) => ({
  crsl: {
    //width: "100px",
    height: "70%",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    height: "300px",
    width: "100%",
  },
  Carousel: {
    recArrow: "disable",
    marginLeft: 75,
    paddingTop: 70,
    height: 300,
    width: "100px",
  },
  usr: {
    marginLeft: theme.spacing(2),
  },

  crdTraffic: {
    // backgroundColor: "#0d47a1",
    background: "linear-gradient(45deg, #0d47a1 40%, #1565c0 95%)",
    boxShadow: "0 2px 9px 2px #9da5b1",
    display: "flex",
  },
  icon: {
    height: "80px",
    color: "#c8e6c9",
    paddingTop: 20,
    marginLeft: 30,
  },
  iconBack: {
    height: "100px",
    color: "#c8e6c9",
    paddingTop: 20,
    marginLeft: 30,
    width: 100,
  },
  GridItem: {
    paddingLeft: 5,
  },
  labelJumlah: {
    fontFamily: "Helvetica",
    color: "#fff",
    marginBottom: 10,
    marginTop: 8,
    paddingRight: 20,
  },
  labelTittle: {
    fontFamily: "Helvetica",
    color: "#fff",
    marginTop: 8,
    marginBottom: 6,
  },
  cardHeader: {
    // backgroundColor: "#0d47a1",
    background: "linear-gradient(45deg, #0d47a1 40%, #1565c0 95%)",
    display: "flex",
  },
  labelKanban: {
    fontFamily: "Helvetica",
    color: "#fff",
  },
  crdContainer: {
    boxShadow: "0 1px 9px 1px #9da5b1",
    backgroundColor: "#e3f2fd",
    maxHeight: "450px",
    overflow: "auto",
  },
  crdAnnoun: {
    border: "0",
    marginBottom: "8px",
    marginTop: "3px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    background: whiteColor,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
  },
  GridContainer: {
    overflow: "auto",
    maxHeight: "450px",
  },
  gridItem: {},
  txtBerita: {
    display: "inline",
    width: "100%",
  },
  crdBody: {
    paddingTop: "10px",
    paddingBottom: "5px",
  },
  crdAction: {
    paddingTop: "5px",
  },
  paper: {
    position: "absolute",
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
  },
  stack: {
    paddingLeft: "185px",
  },
  modalAdd: {
    position: "center",
    width: theme.spacing(100),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    outline: "none",
    marginLeft: theme.spacing(50),
  },
  form: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  btnSave: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "flex-end",
    width: "100px",
    height: "50px",
  },
});

export default styles;
