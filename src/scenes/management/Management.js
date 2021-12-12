import React, { Component } from "react";
import GridContainer from "../../component/Grid/GridContainer";
import GridItem from "../../component/Grid/GridItem";
import Page from "../../component/Page";
import Graphs from "./components/Graphs";
import MainDropMenu from "./components/MainDropMenu";
import ProductionTable from "./components/ProductionTable";
import RangkingProduksi from "./components/RangkingProduksi";
import SubHeader from "./components/SubHeader";
import Wom from "./components/Wom";

export default class Management extends Component {
  render() {
    return (
      <div>
        <Page>
          <SubHeader />
          <MainDropMenu />
          <GridContainer>
            <GridItem xs={12} sm={12} md={5}>
              <ProductionTable />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <RangkingProduksi />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Wom />
            </GridItem>
          </GridContainer>
          <Graphs />
        </Page>
      </div>
    );
  }
}
