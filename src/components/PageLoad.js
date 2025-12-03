import Box from "@mui/material/Box";
import React from "react";

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
      </Box>
    </>
  );
};

export default PageLoad;
