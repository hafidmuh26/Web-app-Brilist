import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import Card from "../../../component/Card/Card";
import CardHeader from "../../../component/Card/CardHeader";
import classNames from "classnames";
import styles from "./styles";
import { Typography, withStyles } from "@material-ui/core";

const board = {
  columns: [
    {
      id: 1,
      title: "To - Do",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content",
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content",
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content",
        },
      ],
    },
    {
      id: 2,
      title: "In-Progress",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content",
        },
      ],
    },
    {
      id: 3,
      title: "Done",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content",
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content",
        },
      ],
    },
  ],
};

class KanbanBoard extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.crdContainer}>
        <CardHeader className={classes.cardHeader}>
          <Typography variant="h6" className={classes.labelKanban}>
            KANBAN BOARD
          </Typography>
        </CardHeader>

        <Board
          allowRemoveLane
          allowRenameColumn
          allowRemoveCard
          onLaneRemove={console.log}
          onCardRemove={console.log}
          onLaneRename={console.log}
          initialBoard={board}
          allowAddCard={{ on: "top" }}
          onNewCardConfirm={(draftCard) => ({
            id: new Date().getTime(),
            ...draftCard,
          })}
          onCardNew={console.log}
          overflow={"auto"}
        />
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(KanbanBoard);
