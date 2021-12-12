import { ta } from "date-fns/locale";
import React, { useRef, useEffect } from "react";

const { tableau } = window;

function TableauEmbed() {
  const ref = useRef(null);
  const url =
    "http://10.28.2.95/views/DashboardKlaimTahapan_16183682759210/MonitoringKlaimTahapan";
  //"http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
  // "https://mdm.brilife.co.id/views/DashboardKlaimTahapan_16183682759210/MonitoringKlaimTahapan?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link";
  //     "&output=embed";
  //   window.location.replace(url);

  //   const initViz = () => {
  //     new tableau.Viz(ref.current, url, {
  //       width: "100%",
  //       height: "90vh",
  //     });
  //   };

  //   useEffect(initViz, []);

  return (
    //   <script type='text/javascript' src='https://mdm.brilife.co.id/javascripts/api/viz_v1.js'>
    // </script>
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
  //<div ref={ref} />;
}

export default TableauEmbed;
