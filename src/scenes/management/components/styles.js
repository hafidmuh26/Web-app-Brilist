import {
  blackColor,
  whiteColor,
  hexToRgb,
  primaryColor,
  successColor,
  grayColor,
  roseColor,
} from "../../../assets/jss/material-dashboard-react";

const styles = (theme) => ({
  containerHeader: {
    border: "0",
    marginTop: "20px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",

    // backgroundColor: "#e3f2fd",
    background: whiteColor,
    width: "100%",
    // boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    boxShadow: "0 1px 4px 1px #9da5b1",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
  },
  containerPremi: {
    border: "0",
    marginTop: "10px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    // backgroundColor: "#e3f2fd",
    background: whiteColor,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    boxShadow: "0 1px 4px 0px #9da5b1",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    zIndex: -10,
  },
  crdHeader: {
    background: "linear-gradient(45deg, #0d47a1 40%, #1565c0 95%)",
    boxShadow: "0 2px 9px 2px #9da5b1",
  },
  Typography: {
    color: "#fff",
    alignContent: "center",
  },
  crdHeadMain: {
    display: "flex",
    width: "700px",
    flexDirection: "row",
    boxShadow: "0 1px 4px 0px #9da5b1",
    fontSize: ".875rem",
    position: "relative",
    marginBottom: "0px",
    //background: "linear-gradient(45deg, #0d47a1 40%, #1565c0 95%)",
  },
  DatePicker: {
    width: "100px",
  },
  cardTable: {
    zIndex: 10,
  },
  Typography: {
    paddingRight: "5px",
    paddingLeft: "5px",
  },
  FormControl: {
    m: 1,
    width: "135px",
    paddingRight: "30px",
  },
  divRoot: {
    display: "flex",
    paddingTop: "22px",
    paddingLeft: "5px",
    zIndex: 100,
  },
  divRoot1: {
    display: "flex",
    paddingLeft: "20px",
    marginBottom: "10px",
  },
  CardHeaderTop: {
    backgroundColor: "#00c853",
  },
  CardHeaderPoor: {
    backgroundColor: "#c62828",
  },
  divTop: {
    display: "flex",
  },
  paperA: {
    backgroundColor: "#ffee58",
    m: 1,
    width: "148px",
    height: "100px",
  },
  paperB: {
    backgroundColor: "#64b5f6",
    m: 1,
    width: "148px",
    height: "100px",
  },
  paperC: {
    backgroundColor: "#e57373",
    m: 1,
    width: "148px",
    height: "100px",
  },
  paperD: {
    backgroundColor: "#66bb6a",
    m: 1,
    width: "148px",
    height: "100px",
  },
  paperTotal: {
    backgroundColor: "#ffa726",
    m: 1,
    width: "296px",
    height: "100px",
  },
  crdHeadWom: {
    background: "linear-gradient(45deg, #0d47a1 40%, #1565c0 95%)",
  },
  typoWom: {
    color: "#fff",
  },
  rootGraphs: {
    border: "0",
    marginTop: "0px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    // backgroundColor: "#e3f2fd",
    background: whiteColor,
    width: "100%",
    // boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    boxShadow: "0 1px 4px 0px #9da5b1",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
  },
  FormControlGhraps: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "50px",
    paddingTop: "20px",
  },
  divContainer: {
    display: "flex",
  },
  selectedRadio: {
    width: "100px",
  },
  chartContainer: {
    height: "20vh",
    width: "30vw",
  },
  gridDoughnut: {
    padding: "0 50px",
  },
});

export default styles;
