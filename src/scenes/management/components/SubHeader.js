import { Divider, Typography } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Card from "../../../component/Card/Card";
import CardBody from "../../../component/Card/CardBody";
import GridContainer from "../../../component/Grid/GridContainer";
import GridItem from "../../../component/Grid/GridItem";
import CardHeader from "../../../component/Card/CardHeader";

const datas = [
  {
    channel: "In-Branch",
    polis: 200000,
    premiYTD: "250.000.000.000",
    APE: "250.000.000.000",
    color: "primary",
  },
  {
    channel: "Agency",
    polis: 70000,
    premiYTD: "90.000.000.000",
    APE: "90.000.000.000",
    color: "warning",
  },
  {
    channel: "Corporate",
    polis: 70000,
    premiYTD: "20.000.000.000",
    APE: "20.000.000.000",
    color: "danger",
  },
  {
    channel: "Distribution",
    polis: 110000,
    premiYTD: "80.000.000.000",
    APE: "80.000.000.000",
    color: "success",
  },
  {
    channel: "Alternate",
    polis: 150000,
    premiYTD: "120.000.000.000",
    APE: "120.000.000.000",
    color: "rose",
  },
  {
    channel: "Total",
    polis: 600000,
    premiYTD: " 570.000.000.000",
    APE: " 570.000.000.000",
    color: "info",
  },
];

class SubHeader extends Component {
  constructor(props) {
    super();
    this.state = {
      datas: [],
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
          {datas.map((data, key) => (
            <GridItem key={key} xs={3} sm={3} md={2}>
              <div className={classes.containerHeader}>
                <CardHeader color={data.color}>
                  <Typography
                    className={classes.Typography}
                    component="h3"
                    variant="h5"
                    align="center"
                  >
                    {data.channel}
                  </Typography>
                </CardHeader>
                <CardBody color="#e3f2fd">
                  <Typography
                    variant="body2"
                    align="left"
                    color="textSecondary"
                  >
                    Polis Aktif
                  </Typography>
                  <Divider />
                  <Typography variant="h6" align="left">
                    {data.polis}
                  </Typography>
                </CardBody>
              </div>
              <div className={classes.containerPremi}>
                <CardHeader>
                  <Typography
                    variant="body2"
                    align="left"
                    color="textSecondary"
                  >
                    Polis YTD
                  </Typography>
                  <Divider />
                  <Typography variant="h6" align="inherit">
                    {data.polis}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="left"
                    color="textSecondary"
                  >
                    Premi YTD
                  </Typography>
                  <Divider />
                  <Typography variant="h6" align="left">
                    {data.premiYTD}
                  </Typography>
                </CardHeader>
              </div>
            </GridItem>
          ))}
          {datas.map((data, key) => (
            <GridItem key={key} xs={3} sm={3} md={2}>
              <div className={classes.containerPremi}>
                <CardHeader>
                  <Typography
                    variant="body2"
                    align="left"
                    color="textSecondary"
                  >
                    APE
                  </Typography>
                  <Divider />
                  <Typography variant="h6">{data.APE}</Typography>
                </CardHeader>
              </div>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SubHeader);
