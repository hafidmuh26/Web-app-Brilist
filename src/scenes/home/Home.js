import React, { Component } from "react";
import GridContainer from "../../component/Grid/GridContainer";
import GridItem from "../../component/Grid/GridItem";
import Page from "../../component/Page";
import Traffic from "./components/Traffic";
import background from "../../assets/image/background2.jpg";
import ImageSlide from "./components/Carousel";
import UncontrolledBoard from "./components/KanbanBoard";
import Announcement from "./components/Announcement";
import KanbanBoard from "./components/KanbanBoard";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <ImageSlide /> */}
        <Page>
          <Traffic />
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <KanbanBoard />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Announcement />
            </GridItem>
          </GridContainer>
        </Page>
      </div>
    );
  }
}
