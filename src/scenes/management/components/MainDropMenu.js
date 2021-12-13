import React, { Component, useState } from "react";
import styles from "./styles";
import { Typography, withStyles } from "@material-ui/core";
import Card from "../../../component/Card/Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Divider } from "@material-ui/core";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

const datas = [
  {
    channel: "In-Branch",
    polis: 200000,
    premiYTD: 250000000000,
    color: "primary",
    jenisPremi: "PP",
  },
  { channel: "Agency", polis: 70000, premiYTD: 90000000000, color: "warning" },
  {
    channel: "Corporate",
    polis: 70000,
    premiYTD: 20000000000,
    color: "danger",
    jenisPremi: "PP",
  },
  {
    channel: "Distribution",
    polis: 110000,
    premiYTD: 80000000000,
    color: "success",
    jenisPremi: "PP",
  },
  {
    channel: "Alternate",
    polis: 150000,
    premiYTD: 120000000000,
    color: "rose",
    jenisPremi: "PP",
  },
];

const JenisPremi = [
  { id: 1, jenisPremi: "PP" },
  { id: 2, jenisPremi: "PL" },
  { id: 3, jenisPremi: "PLTP" },
  { id: 4, jenisPremi: "TUS" },
  { id: 5, jenisPremi: "ANP" },
  { id: 6, jenisPremi: "GWP" },
];

class MainDropMenu extends Component {
  constructor(props) {
    super();
    this.state = {
      startDate: undefined,
      endDate: undefined,
      channel: "",
      jenisPremi: "",
    };
  }

  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  setEndDate = (date) => {
    this.setState({
      endDate: date,
    });
  };

  handleChangeChannel = (value) => {
    this.setState({
      channel: value,
    });
  };

  handleChangeJenisPremi = (value) => {
    this.setState({
      jenisPremi: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { startDate, endDate, channel, jenisPremi } = this.state;

    return (
      <div>
        <Card className={classes.crdHeadMain}>
          <div className={classes.divRoot}>
            <Typography className={classes.Typography}>Periode</Typography>

            <Typography className={classes.Typography}>From</Typography>

            <DatePicker
              className={classes.DatePicker}
              selected={startDate}
              onChange={this.setStartDate}
            />
            <Typography className={classes.Typography}>To</Typography>
            <DatePicker
              className={classes.DatePicker}
              selected={endDate}
              onChange={this.setEndDate}
            />
          </div>
          <div className={classes.divRoot1}>
            <FormControl variant="standard" className={classes.FormControl}>
              <InputLabel id="Channel">Channel</InputLabel>
              <Select
                labelId="Channel"
                id="ChannelDistribusi"
                value={channel}
                label="Channel"
                onChange={(event) =>
                  this.handleChangeChannel(event.target.value)
                }
              >
                {datas.map((data) => (
                  <MenuItem key={data.channel} value={data.channel}>
                    {data.channel}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={classes.divRoot1}>
            <FormControl variant="standard" className={classes.FormControl}>
              <InputLabel id="Jenis-Premi">Jenis Premi</InputLabel>
              <Select
                labelId="Jenis-Premi"
                id="Jenis-Premi"
                value={jenisPremi}
                label="Jenis Premi"
                onChange={(event) =>
                  this.handleChangeJenisPremi(event.target.value)
                }
                label="Jenis Premi"
              >
                {JenisPremi.map((data) => (
                  <MenuItem key={data.id} value={data.jenisPremi}>
                    {data.jenisPremi}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainDropMenu);
