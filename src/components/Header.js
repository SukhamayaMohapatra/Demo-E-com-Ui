import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((state) => state.cart);
  return (
    <>
      <Box>
        <AppBar position="fixed" sx={{ bgcolor: "chocolate" }}>
          <Toolbar>
            <Stack direction={"row"} sx={{ gap: "15px", flexGrow: 1 }}>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "emoji",
                    fontSize: "24px",
                    fontWeight: "Bold",
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "emoji",
                  fontSize: "24px",
                  fontWeight: "Bold",
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "emoji",
                  fontSize: "24px",
                  fontWeight: "Bold",
                }}
              >
                Features
              </Typography>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "emoji",
                  fontSize: "24px",
                  fontWeight: "Bold",
                }}
              >
                FAQ's
              </Typography>
            </Stack>
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
              <Stack
                direction={"row"}
                sx={{ gap: "10px", marginRight: "10px" }}
              >
                <ShoppingCartIcon fontSize="large" sx={{ color: "#FFFFFF" }} />
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "emoji",
                    fontSize: "24px",
                    fontWeight: "Bold",
                  }}
                >
                  {data.length}
                </Typography>
              </Stack>
            </Link>
            <Button
              variant="contained"
              sx={{
                fontFamily: "emoji",
                textTransform: "none",
                fontSize: "14px",

                width: "140px",
                height: "40px",
                borderRadius: "12px",
                bgcolor: "wheat",
                color: "chocolate",
                boxShadow: "none",
              }}
            >
              Login/Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
