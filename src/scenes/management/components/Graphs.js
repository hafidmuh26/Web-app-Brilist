import React, { Component } from "react";
import styles from "./styles";
import { Divider, Typography, withStyles } from "@material-ui/core";
import Card from "../../../component/Card/Card";
import CardHeader from "../../../component/Card/CardHeader";
import CardBody from "../../../component/Card/CardBody";
import GridContainer from "../../../component/Grid/GridContainer";
import GridItem from "../../../component/Grid/GridItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Bar, Pie, Doughnut } from "react-chartjs-2";

const ProduksiItem = [
  { id: 1, produk: "Premi" },
  { id: 2, produk: "GWP" },
  { id: 3, produk: "ANP" },
  { id: 4, produk: "FBI" },
];

const state = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
  datasets: [
    {
      label: "2018",
      backgroundColor: "#ff6d00",
      borderColor: "#ff6d00",
      borderWidth: 2,
      data: [10, 11, 5, 7, 9],
    },
    {
      label: "2019",
      backgroundColor: "#1976d2",
      borderColor: "#1976d2",
      borderWidth: 2,
      data: [10, 15, 10, 7, 10],
    },
    {
      label: "2020",
      backgroundColor: "#00c853",
      borderColor: "#00c853",
      borderWidth: 2,
      data: [15, 15, 13, 9, 17],
    },
  ],
};

const state1 = {
  labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
  datasets: [
    {
      label: "Year Of Year",
      backgroundColor: "#ff6d00",
      borderColor: "#ff6d00",
      borderWidth: 2,
      data: [100, 200, 400, 300, 800, 550],
    },
  ],
};

const pie1 = {
  labels: [
    "10.000.000 - 500.000.000",
    "500.000.001-1.000.000.000",
    "1.000.000.001-3.000.000.000",
    "> 3.000.000.000",
  ],
  datasets: [
    {
      label: "Kontribusi UP",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [10, 30, 5, 55],
    },
  ],
};

const pie2 = {
  labels: [
    "10.000.000 - 500.000.000",
    "500.000.001-1.000.000.000",
    "1.000.000.001-3.000.000.000",
    "> 3.000.000.000",
  ],
  datasets: [
    {
      label: "Kontribusi UP",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [26, 13, 10, 51],
    },
  ],
};

class Graphs extends Component {
  constructor(props) {
    super();
    this.state = {
      produksiItem: "",
      selectedRadio: "MoM",
    };
  }

  handleChange = (value) => {
    this.setState({
      produksiItem: value,
    });
  };

  handleChangeRadio = (e) => {
    this.setState({
      selectedRadio: e.target.value,
    });
  };

  render() {
    const { classes, loading } = this.props;
    const { produksiItem, labels, dataSet, selectedRadio } = this.state;

    return (
      <div>
        <div className={classes.rootGraphs}>
          <CardHeader className={classes.crdHeadWom}>
            <Typography variant="h6" className={classes.typoWom}>
              Grafik Produksi
            </Typography>
          </CardHeader>
          <CardBody>
            <div className={classes.divContainer}>
              <FormControl variant="standard">
                <InputLabel id="Produksi">Produksi</InputLabel>
                <Select
                  labelId="Produksi"
                  id="Produksi"
                  value={produksiItem}
                  label="Produksi"
                  onChange={(event) => this.handleChange(event.target.value)}
                  className={classes.selectedRadio}
                >
                  {ProduksiItem.map((item) => (
                    <MenuItem key={item.produk} value={item.produk}>
                      {item.produk}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <RadioGroup
                  onChange={this.handleChangeRadio}
                  className={classes.FormControlGhraps}
                >
                  <FormControlLabel
                    control={<Radio color="primary" size="medium" />}
                    label="MoM"
                    value="MoM"
                    checked={selectedRadio == "MoM"}
                  />
                  <FormControlLabel
                    control={<Radio color="primary" size="medium" />}
                    label="YoY"
                    value="YoY"
                    checked={selectedRadio == "YoY"}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                {selectedRadio == "MoM" ? (
                  <Bar
                    data={state}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "Produksi",
                          fontSize: 20,
                        },
                      },
                      legend: {
                        display: true,
                      },
                    }}
                  />
                ) : (
                  <Bar
                    data={state1}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "Produksi",
                          fontSize: 20,
                        },
                      },
                      legend: {
                        display: true,
                      },
                    }}
                  />
                )}
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                {selectedRadio == "MoM" ? (
                  <Bar
                    data={state}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "GWP VS Target",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                        },
                      },
                    }}
                  />
                ) : (
                  <Bar
                    data={state1}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "GWP VS Target",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                        },
                      },
                    }}
                  />
                )}
              </GridItem>
              <Divider />
              <GridItem className={classes.gridDoughnut} xs={12} sm={12} md={6}>
                {selectedRadio == "MoM" ? (
                  <Doughnut
                    data={pie2}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "Kontribusi UP",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: "right",
                        },
                      },
                    }}
                  />
                ) : (
                  <Doughnut
                    data={pie1}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "Kontribusi UP",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: "right",
                        },
                      },
                    }}
                  />
                )}
              </GridItem>
              <GridItem className={classes.gridDoughnut} xs={12} sm={12} md={6}>
                {selectedRadio == "MoM" ? (
                  <Doughnut
                    data={pie1}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "Kontribusi Polis By Produk",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: "right",
                        },
                      },
                    }}
                  />
                ) : (
                  <Doughnut
                    data={pie2}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: "Kontribusi Polis By Produk",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: "right",
                        },
                      },
                    }}
                  />
                )}
              </GridItem>
            </GridContainer>
          </CardBody>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Graphs);
