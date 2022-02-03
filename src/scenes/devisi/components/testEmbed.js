import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const { tableau } = window;

const host = "https://mdm.brilife.co.id";
const username = "tableu";

export function TestEmbed() {
  const [, setViz] = useState(null);
  const [ticket, setTicket] = useState(null);
  const vizRef = useRef(null);

  const workbook = "RiskManagementSystem";
  const view = "ProfilRisiko";
  const url = `${host}/trusted/${ticket}/views/${workbook}/${view}`;

  const getTicket = async () => {
    const res = await axios.post(`${host}/trusted`, `username=${username}`);
    console.log(res.data);
    setTicket(res.data);
  };

  useEffect(() => {
    getTicket();
  }, []);

  useEffect(() => {
    const viz = new tableau.Viz(vizRef.current, url);
    setViz((oldViz) => {
      oldViz?.dispose();
      return viz;
    });

    console.log(url);
    //return viz;
    return () => viz?.dispose();
  }, [url]);

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <div ref={vizRef} style={style.viz} />
      </Grid>
    </Grid>
  );
}

const style = {
  viz: {
    width: 1500,
    height: 720,
  },
};
