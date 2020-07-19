import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    boxShadow: "3",
  },
  media: {
    height: 300,
  },
});

const Studies = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <h2>Studies</h2>
      <p className="description">
        I'm attending formal education and I'm currently on my last year of B.S.
      </p>
      <div style={{
          paddingTop:30
      }}>

      <Card className="${classes.root} maincard">
        <CardMedia
          className={classes.media}
          image={require("../public/UTN-feria.png")}
          title="UTN"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            Universidad Técnica Nacional
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Associates diploma<br></br>
            Currently student<br></br>
            <b>Start date:</b>16/01/2017
          </Typography>
        </CardContent>
      </Card>{" "}
          </div>
    </Fragment>
  );
};

export default Studies;
