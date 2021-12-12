import React, { Component } from "react";
import styles from "./styles";
import {
  Typography,
  CircularProgress,
  withStyles,
  Paper,
} from "@material-ui/core";
import Card from "../../../component/Card/Card";
import CardHeader from "../../../component/Card/CardHeader";
import CardBody from "../../../component/Card/CardBody";
import GridItem from "../../../component/Grid/GridItem";
import { Grid } from "@material-ui/core";
import { Box } from "@mui/system";

const datas = [
  {
    id: 1,
    nama: "A",
    total: 0,
    percent: "%",
  },
  {
    id: 1,
    nama: "B",
    total: 0,
    percent: "%",
  },
  {
    id: 1,
    nama: "C",
    total: 0,
    percent: "%",
  },
  {
    id: 1,
    nama: "D",
    total: 0,
    percent: "%",
  },
  {
    id: 1,
    nama: "E",
    total: 0,
    percent: "%",
  },
];

class Wom extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes, loading } = this.props;
    return (
      <div>
        <Card>
          <CardHeader className={classes.crdHeadWom}>
            <Typography variant="h6" className={classes.typoWom}>
              Window Of Management
            </Typography>
          </CardHeader>
          <CardBody>
            <Grid container>
              <Grid item>
                <Paper className={classes.paperA} square>
                  <Typography align="center">A</Typography>
                  <Typography align="center">Total 0</Typography>
                  <Typography align="center">0,00 %</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paperB} square>
                  <Typography align="center">B</Typography>
                  <Typography align="center">Total 0</Typography>
                  <Typography align="center">0,00 %</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paperC} square>
                  <Typography align="center">C</Typography>
                  <Typography align="center">Total 0</Typography>
                  <Typography align="center">0,00 %</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paperD} square>
                  <Typography align="center">D</Typography>
                  <Typography align="center">Total 0</Typography>
                  <Typography align="center">0,00 %</Typography>
                </Paper>
              </Grid>
              {/* <div style={{ padding: "0 80px 0 80px" }}> */}
              <Paper className={classes.paperTotal}>
                <Typography align="center">E</Typography>
                <Typography align="center">Total 0</Typography>
                <Typography align="center">0,00 %</Typography>
              </Paper>
              {/* </div> */}
            </Grid>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Wom);
