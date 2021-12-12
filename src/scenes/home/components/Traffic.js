import React, { Component } from "react";
import styles from "./styles";
import Card from "../../../component/Card/Card";
import CardBody from "../../../component/Card/CardBody";
import CardHeader from "../../../component/Card/CardHeader";
import GridContainer from "../../../component/Grid/GridContainer";
import GridItem from "../../../component/Grid/GridItem";
import { Typography, withStyles } from "@material-ui/core";
import man from "../../../assets/image/man.png";
import session from "../../../assets/image/session.png";
import pointDrop from "../../../assets/image/pointDrops.png";
import clock from "../../../assets/image/clock.png";
import CardIcon from "../../../component/Card/CardIcon";
import { Divider } from "@material-ui/core";

class Traffic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Card className={classes.crdTraffic}>
              <CardHeader icon>
                <CardIcon color={"warning"}>
                  <img src={man} height={"50"} />
                </CardIcon>
                <Typography variant="h5" className={classes.labelTittle}>
                  User Aktif
                </Typography>
                <Divider variant="middle" />
                <Typography variant="h6" className={classes.labelJumlah}>
                  50984
                </Typography>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card className={classes.crdTraffic}>
              <CardHeader color={"warning"} icon>
                <CardIcon color={"warning"}>
                  <img src={pointDrop} height={"50"} />
                </CardIcon>
                <Typography variant="h5" className={classes.labelTittle}>
                  Points Drop
                </Typography>
                <Divider variant="middle" />
                <Typography variant="h6" className={classes.labelJumlah}>
                  234
                </Typography>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card className={classes.crdTraffic}>
              <CardHeader color={"warning"} icon>
                <CardIcon color={"warning"}>
                  <img src={session} height={"50"} />
                </CardIcon>
                <Typography variant="h5" className={classes.labelTittle}>
                  Average Access
                </Typography>
                <Divider variant="middle" />
                <Typography variant="h6" className={classes.labelJumlah}>
                  21{" "}
                </Typography>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card className={classes.crdTraffic}>
              <CardHeader color={"warning"} icon>
                <CardIcon color={"warning"}>
                  <img src={clock} height={"50"} />
                </CardIcon>
                <Typography variant="h5" className={classes.labelTittle}>
                  Session Length
                </Typography>
                <Divider variant="middle" />
                <Typography variant="h6" className={classes.labelJumlah}>
                  15
                </Typography>
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Traffic);
