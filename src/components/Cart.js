import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Header from "./Header";

const Cart = () => {
  const product = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(remove(id));
  };

  const postDetails = product ? (
    product.map((e) => (
      <Grid sx={{ paddingTop: "100px" }}>
        <Card
          key={e.id}
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
            onClick={() => handleClick(e.id)}
            variant="contained"
            sx={{
              width: "140px",
              height: "50px",
              borderRadius: "12px",
              bgcolor: "burlywood",
              marginLeft: "110px",
              textTransform: "none",
              fontFamily: "emoji",
              fontSize: "14px",
              fontWeight: "Bold",
            }}
          >
            Remove
          </Button>
        </Card>
      </Grid>
    ))
  ) : (
    <h1 style={{}}>No Data</h1>
  );
  return (
    <div>
      <Header />
      <Grid
        container
        sx={{
          gap: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {postDetails}
      </Grid>
    </div>
  );
};

export default Cart;
