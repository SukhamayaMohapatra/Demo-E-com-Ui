import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const Content = () => {
  const [post, getPost] = useState([]);

  const fetchCountry = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => getPost(data));
  };
  useEffect(() => {
    fetchCountry();
  });
  const results = post ? (
    post.map((event) => (
      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            width: "500px",
            height: "350px",
            borderRadius: "60px",
            background: "linear-gradient(45deg, #B67233 30%, #7B3F00 90%)",
          }}
        >
          <Stack
            direction={"column"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <img
              src={event.image}
              alt="..."
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "40px",
                marginTop: "30px",
              }}
            />
            <Typography
              noWrap
              sx={{
                fontFamily: "emoji",
                fontSize: "24px",
                color: "brown",
                fontWeight: "Bold",
                textAlign: "center",
                maxWidth: "150px",
              }}
            >
              {event.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "emoji",
                fontSize: "24px",
                color: "brown",
                fontWeight: "Bold",
                textAlign: "center",
              }}
            >
              ${event.price}
            </Typography>
            <Typography
              noWrap
              sx={{
                fontFamily: "emoji",
                fontSize: "24px",
                color: "#FFFFFF",
                fontWeight: "Bold",
                textAlign: "center",
                maxWidth: "250px",
              }}
            >
              {event.description}
            </Typography>
          </Stack>
        </Box>
      </Grid>
    ))
  ) : (
    <h1>No data</h1>
  );

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "100px",
        }}
      >
        {results}
      </Grid>
    </>
  );
};

export default Content;
