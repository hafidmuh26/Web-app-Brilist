import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

class EmbedTableau extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div
        class="tableauPlaceholder"
        style={{ width: "1400px", height: "877px" }}
      >
        <object
          class="tableauViz"
          width="1400"
          height="877"
          style={{ display: "none" }}
        >
          <param name="host_url" value="https%3A%2F%2Fmdm.brilife.co.id%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param
            name="name"
            value="DashboardKlaimTahapan_16183682759210&#47;MonitoringKlaimTahapan"
          />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param name="showAppBanner" value="false" />
        </object>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(EmbedTableau);
