import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import bd from "../../../assets/image/bd.jpg";
import background from "../../../assets/image/background2.jpg";
import Card from "../../../component/Card/Card";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

class ImageSlide extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    items: [
      { id: 1, img: <img src={bd} height={"200px"} width={"100%"} /> },
      { id: 2, img: <img src={bd} height={"200px"} width={"100%"} /> },
      { id: 3, img: <img src={background} height={"200px"} width={"100%"} /> },
      { id: 4, img: <img src={bd} /> },
      { id: 5, img: <img src={bd} /> },
    ],
  };
  render() {
    const { items } = this.state;
    const { classes } = this.props;
    return (
      <div Classes className={classes.crsl}>
        <Carousel
          enableAutoPlay
          autoPlaySpeed={5000}
          showArrows={false}
          outerSpacing={0}
          className={classes.Carousel}
        >
          {items.map((item) => (
            <div key={item.id} className={classes.img}>
              {item.img}
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageSlide);
