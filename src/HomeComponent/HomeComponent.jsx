import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../ContextComponent/Context";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import NoDataImage from "./what-is-empty-state-userguiding-0 (1) (2).png";
const HomeComponent = () => {
  const { setData, filter, setFilter } = useContext(MyContext);
  useEffect(() => {
    const url = "https://api.npoint.io/471638d9cf4e241aebbf";
    fetch(url)
      .then((responce) => responce.json())
      .then((apiData) => {
        setData(apiData);
        setFilter(apiData.results);
      });
  }, []);

  return (
    <>
      <Container>
        <NavBarComponent />
        {filter && filter.length > 0 ? (
          <Grid container spacing={2}>
            {filter &&
              filter.map((responce, index) => {
                return (
                  <Grid item xs={12} sm={4} lg={3} key={index}>
                    <Card sx={{ maxWidth: 265, padding: 2, marginTop: 2 }}>
                      <CardMedia
                        sx={{ height: 265, borderRadius: 10 }}
                        image={responce.thumbnail_url}
                      />
                      <CardContent sx={{ height: 105, textAlign: "center" }}>
                        <Typography gutterBottom variant="span" component="h5">
                          {responce.slug.toUpperCase()}
                        </Typography>
                        <Grid 
                          item
                          sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            padding: 5,
                          }}
                          
                        >
                          <Link to={`video/${index}`}>
                            <Button
                              variant="outlined"
                              sx={{
                                border: "1pxdodgerBlue",
                                fontWeight: "bold",
                              }}
                            >
                              Read More..
                            </Button>
                          </Link>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        ) : (
          <Container>
            <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10%'}}> 
              <Grid>
            <img src={NoDataImage} alt=" No-results-found-image" style={{borderRadius:'5%',}}/> 
            </Grid>
            </Grid>
            </Container>
        )}
      </Container>
    </>
  );
};

export default HomeComponent;
