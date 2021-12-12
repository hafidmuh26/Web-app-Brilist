import React, { Component } from "react";
import styles from "./styles";
import { Typography, CircularProgress, withStyles } from "@material-ui/core";
import Card from "../../../component/Card/Card";
import CardHeader from "../../../component/Card/CardHeader";
import MUIDataTable from "mui-datatables";

const dataTable = [
  {
    id: 1,
    wilayah: "Jakarta",
    totalPolis: "25000",
    premi: 20350000,
    FBI: 50000000,
  },
  {
    id: 2,
    wilayah: "Semarang",
    totalPolis: "2000",
    premi: 35000000,
    FBI: 70000000,
  },
  {
    id: 3,
    wilayah: "Bandung",
    totalPolis: "15000",
    premi: 250000000,
    FBI: 500000000,
  },
  {
    id: 4,
    wilayah: "Bali",
    totalPolis: "50000",
    premi: 20350000,
    FBI: 50000000,
  },
  {
    id: 5,
    wilayah: "Surabaya",
    totalPolis: "4000",
    premi: 20350000,
    FBI: 50000000,
  },
  // {
  //   id: 1,
  //   wilayah: "Medan",
  //   totalPolis: "26000",
  //   premi: 20350000,
  //   FBI: 50000000,
  // },
  // {
  //   id: 6,
  //   wilayah: "Manado",
  //   totalPolis: "37000",
  //   premi: 20350000,
  //   FBI: 50000000,
  // },
  // {
  //   id: 7,
  //   wilayah: "Padang",
  //   totalPolis: "4000",
  //   premi: 20350000,
  //   FBI: 50000000,
  // },
];

class ProductionTable extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes, loading } = this.props;

    const columns = [
      {
        name: "wilayah",
        label: "Wilayah",
      },
      {
        name: "totalPolis",
        label: "Total Polis",
      },
      {
        name: "premi",
        label: "Total Premi",
      },
      {
        name: "FBI",
        label: "FBI",
      },
    ];

    const options = {
      page: 0,
      rowsPerPageOptions: [5, 10, 15, 25, 30],
      responsive: "simple",
      selectableRows: "none",
      download: false,
      print: false,
      textLabels: {
        body: {
          noMatch: loading ? (
            <CircularProgress />
          ) : (
            "Sorry, not match records not found"
          ),
        },
      },
    };
    return (
      <div>
        <Card className={classes.cardTable}>
          <CardHeader className={classes.crdHeadWom}>
            <Typography variant="h6" className={classes.typoWom}>
              Table Production
            </Typography>
          </CardHeader>
          <MUIDataTable
            title={"Table Production"}
            data={!loading ? dataTable : []}
            columns={columns}
            options={options}
          />
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProductionTable);
