import React from "react";
import Box from "@mui/material/Box";

const Features = () => {
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
        <img
          style={{ width: "500px", height: "500px" }}
          src="./images/feature.jpg"
          alt="..."
        />
      </Box>
    </>
  );
};

export default Features;
