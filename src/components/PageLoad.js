import Box from "@mui/material/Box";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Stack from "@mui/material/Stack";

const PageLoad = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Stack direction={"column"}>
          <h1
            style={{
              fontFamily: "emoji",
              fontSize: "48px",
              fontWeight: "bold",
              color: "gray",
            }}
          >
            Cart is Empty
          </h1>
          <DeleteForeverIcon
            fontSize="large"
            sx={{ color: "red", marginLeft: "130px" }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default PageLoad;
