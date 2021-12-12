import React, { Component } from "react";
import Page from "../../component/Page";
import TableauEmbed from "./components/embedTableau";
import EmbedTableau from "./components/embedTableau1";

export default class ChannelAgency extends Component {
  render() {
    return (
      <Page>
        Page Channel Agency
        {/* <TableauEmbed /> */}
        <EmbedTableau />
      </Page>
    );
  }
}
