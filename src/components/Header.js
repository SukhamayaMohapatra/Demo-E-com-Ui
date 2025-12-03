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
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ setQuery }) => {
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
              <Link to={"/features"} style={{ textDecoration: "none" }}>
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
              </Link>
              <Link to={"/about"} style={{ textDecoration: "none" }}>
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
              </Link>
            </Stack>

            <TextField
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              sx={{
                width: "230px",
                bgcolor: "white",
                borderRadius: "40px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              label="Search"
              variant="outlined"
              slotProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="search" sx={{ color: "red" }}>
                      <SearchIcon sx={{ color: "red" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction={"row"}>
              <Link to={"/cart"} style={{ textDecoration: "none" }}>
                <ShoppingCartIcon fontSize="large" sx={{ color: "#FFFFFF" }} />
              </Link>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "emoji",
                  fontSize: "24px",
                  fontWeight: "Bold",
                  marginRight: "5px",
                }}
              >
                {data.length}
              </Typography>
            </Stack>

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
