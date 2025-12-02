import React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Content from "./Content";
import Box from "@mui/material/Box";
import { add } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [post, getPost] = useState([]);

  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(add(product));
  };

  const fetchPost = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((res) => getPost(res));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const postDetails = post ? (
    post.map((e) => (
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: "400px",
            width: "360px",
            borderRadius: "40px",
            bgcolor: "wheat",
            boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Avatar
            src={e.image}
            alt="..."
            style={{
              width: "220px",
              height: "210px",
              marginLeft: "70px",
              marginTop: "10px",
              backgroundSize: "contain",
              border: "5px solid #FFFFFF",
            }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "emoji",
                fontSize: "18px",
                fontWeight: "Bold",
              }}
            >
              Product :{e.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "emoji",
                fontSize: "18px",
                fontWeight: "Bold",
              }}
            >
              Price : ${e.price}
            </Typography>
          </CardContent>
          <Button
            onClick={() => handleClick(e)}
            variant="contained"
            sx={{
              width: "140px",
              height: "50px",
              borderRadius: "12px",
              bgcolor: "coral",
              marginLeft: "110px",
              textTransform: "none",
              fontFamily: "emoji",
              fontSize: "14px",
              fontWeight: "Bold",
            }}
          >
            Add to cart
          </Button>
        </Card>
      </Grid>
    ))
  ) : (
    <h1 style={{}}>No Data</h1>
  );

  return (
    <>
      <Box
        sx={{
          paddingTop: "100px",
        }}
      >
        <Grid
          container
          sx={{
            gap: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {postDetails}
        </Grid>
        <Content />
      </Box>
    </>
  );
};

export default Home;
