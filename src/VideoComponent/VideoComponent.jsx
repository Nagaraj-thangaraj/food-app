import { Container, Grid,  Typography } from "@mui/material";
import React, { useContext } from "react";
import { MyContext } from "../ContextComponent/Context";
import HomeComponent from "../HomeComponent/HomeComponent";
import "video-react/dist/video-react.css"; // import css
import { useParams } from "react-router-dom";
import { Player, ControlBar } from "video-react";
import UnAvailable from "./UnAvailable.png";

<link rel="stylesheet" href="/css/video-react.css" />;
const VideoComponent = () => {
  const { data } = useContext(MyContext);
  const { count, results } = data;
  const getId = useParams();
  return (
    <Container sx={{ textAlign: "center" }}>
      <h1> {results[getId.id].name}</h1>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ minHeight: 20 }}>
          {results && results[getId.id].original_video_url ? (
            <Player autoPlay src={results[getId.id].original_video_url}>
              <ControlBar autoHide={true} className="my-class" />
            </Player>
          ) : (
            <>
              <img
                src={UnAvailable}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "35rem",
                }}
                alt="unAvailable"
              />
              <Typography
                sx={{ color: "red", fontWeight: "bold" }}
                variant="span"
                component="h3"
              >
                {" "}
                Sorry Video Is Not Available !{" "}
              </Typography>
            </>
          )}
        </Grid>
        <Grid item xs={6} >
          <Typography variant="p" component="h3">
            Instruction{" "}
          </Typography>
          {results &&
            results[getId.id].instructions.map((textData) => {
              return (
                <>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      textAlign: "start",
                      margin: 1,
                      fontFamily: "san-serif",
                    }}
                  >
                    {" "}
                    <li> {textData.display_text} </li>
                  </Typography>
                </>
              );
            })}
        </Grid>
      </Grid>
    </Container>
  );
};
export default VideoComponent;
