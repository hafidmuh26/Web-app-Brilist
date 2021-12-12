import React, { Component } from "react";
import styles from "./styles";
import {
  Typography,
  CircularProgress,
  withStyles,
  CardContent,
} from "@material-ui/core";
import Card from "../../../component/Card/Card";
import CardHeader from "../../../component/Card/CardHeader";
import GridContainer from "../../../component/Grid/GridContainer";
import GridItem from "../../../component/Grid/GridItem";
import { ImArrowUp, ImArrowDown } from "react-icons/im";

const dataTable = [
  {
    id: 1,
    wilayah: "Jakarta",
    totalPolis: "400",
    premi: 20350000,
    FBI: 50000000,
  },
  {
    id: 2,
    wilayah: "Semarang",
    totalPolis: 300,
    premi: 35000000,
    FBI: 70000000,
  },
  {
    id: 3,
    wilayah: "Bandung",
    totalPolis: 200,
    premi: 250000000,
    FBI: 500000000,
  },
];

class RankingProduksi extends Component {
  constructor(props) {
    super();
    // this.state = {
    //   dataTable: [],
    // };
  }

  render() {
    const { classes, loading } = this.props;
    return (
      <div>
        <Card>
          <CardHeader className={classes.crdHeadWom}>
            <Typography variant="h6" className={classes.typoWom}>
              Ranking Produksi
            </Typography>
          </CardHeader>
          <div>
            <CardHeader className={classes.CardHeaderTop}>
              <Typography variant="h6" align="center">
                TOP <ImArrowUp />
              </Typography>
            </CardHeader>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Typography align="center">Polis</Typography>
                <Typography align="center"></Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Typography align="center">GWP</Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Typography align="center">FBI</Typography>
              </GridItem>
            </GridContainer>
            <CardHeader className={classes.CardHeaderPoor}>
              <Typography variant="h6" align="center">
                POOR <ImArrowDown />
              </Typography>
            </CardHeader>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Typography align="center">Polis</Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Typography align="center">GWP</Typography>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Typography align="center">FBI</Typography>
              </GridItem>
            </GridContainer>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RankingProduksi);
