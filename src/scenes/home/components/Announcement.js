import {
  CardActions,
  CardContent,
  Grid,
  TextField,
  Tooltip,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component, useState } from "react";
import Card from "../../../component/Card/Card";
import GridItem from "../../../component/Grid/GridItem";
import styles from "./styles";
import CardHeader from "../../../component/Card/CardHeader";
import Button from "@material-ui/core/Button";
import GridContainer from "../../../component/Grid/GridContainer";
import CardBody from "../../../component/Card/CardBody";
import Modal from "@material-ui/core/Modal";
import IconButton from "@mui/material/IconButton";
import { AiFillDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import Stack from "@mui/material/Stack";
import { cardHeader } from "../../../assets/jss/material-dashboard-react";
import { Box } from "@mui/system";

const datas = [
  {
    tittle: "Setting PC/Laptop untuk Akses Aplikasi BRILIST",
    by: "John",
    date: "02 Oktober 2021",
    berita:
      "Minta tolong untuk admin dibuatin akses ke BRILIST kfjslkhslksdglksgdnlksgdnslkgnslkngfrulhguosabdckjalsaffnfj",
  },
  {
    tittle: "Chrome untuk BRILIST",
    by: "Paijo",
    date: "02 Oktober 2021",
    berita: "Help",
  },
  {
    tittle: "Tata Cara Penambahan Report",
    by: "Admin",
    date: "02 Oktober 2021",
    berita: "minta tolong",
  },
  {
    tittle: "Tata Cara Penambahan Report",
    by: "Admin",
    date: "02 Oktober 2021",
    berita: "minta tolong",
  },
  {
    tittle: "Tata Cara Penambahan Report",
    by: "Admin",
    date: "02 Oktober 2021",
    berita: "minta tolong",
  },
];

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

class Announcement extends Component {
  constructor(props) {
    super();
  }

  state = {
    open: false,
    openNew: false,
  };

  openModal = () => {
    this.setState({ openNew: true });
  };

  closeModal = () => {
    this.setState({ openNew: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ openNew: false });
    //this.props.save(this.state.form);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.crdContainer}>
          <CardHeader className={classes.cardHeader}>
            <Typography variant="h6" className={classes.labelKanban}>
              ANNOUNCEMENT
            </Typography>
            <Stack direction="row" spacing={1} className={classes.stack}>
              <Tooltip title="New">
                <IconButton
                  size="small"
                  onClick={this.openModal}
                  style={{ color: "#fff" }}
                >
                  <IoIosAddCircle />
                </IconButton>
              </Tooltip>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.openNew}
                onClose={this.closeModal}
              >
                <Card className={classes.modalAdd}>
                  <divHeader>
                    <Typography variant="h6">New Announcement</Typography>
                  </divHeader>
                  <TextField
                    id="Tittle"
                    label="Tittle"
                    variant="standard"
                    className={classes.form}
                  />
                  <TextField
                    id="Tittle"
                    label="Case"
                    variant="standard"
                    className={classes.form}
                  />
                  <Button
                    startIcon={<FaSave />}
                    variant="contained"
                    color={"primary"}
                    className={classes.btnSave}
                    type="submit"
                    onClick={this.closeModal}
                  >
                    Save
                  </Button>
                </Card>
              </Modal>
              <Tooltip title="Delete">
                <IconButton color={"secondary"} size="small">
                  <AiFillDelete style={{ color: "#fff" }} />
                </IconButton>
              </Tooltip>
            </Stack>
          </CardHeader>

          <Grid container className={classes.GridContainer}>
            {datas.map((data, key) => (
              <GridItem
                key={key}
                xs={3}
                sm={3}
                md={12}
                className={classes.gridItem}
              >
                <div className={classes.crdAnnoun}>
                  <CardBody className={classes.crdBody}>
                    <Typography variant="h6">{data.tittle}</Typography>
                    <Typography color="textSecondary">
                      Diposting oleh {data.by}, {data.date}
                    </Typography>
                  </CardBody>
                  <CardActions className={classes.crdAction}>
                    <Button onClick={this.handleOpen} size="small">
                      Selengkapnya
                    </Button>
                    <Modal
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      open={this.state.open}
                      onClose={this.handleClose}
                    >
                      <Card
                        style={getModalStyle()}
                        className={classes.paper}
                        key={key}
                      >
                        <Typography variant="h5" id="modal-title">
                          {data.tittle}
                        </Typography>
                        <Typography color="textSecondary">
                          Diposting oleh {data.by}, {data.date}
                        </Typography>
                        <Typography variant="p" id="simple-modal-description">
                          {data.berita}
                        </Typography>
                        {/* <SimpleModalWrapped /> */}
                      </Card>
                    </Modal>
                  </CardActions>
                </div>
              </GridItem>
            ))}
          </Grid>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Announcement);
