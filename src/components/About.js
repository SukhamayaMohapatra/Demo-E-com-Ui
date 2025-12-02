import Box from "@mui/material/Box";
import React from "react";

const About = () => {
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
          src="./images/honey_bager.png"
          alt="..."
        />
      </Box>
    </>
  );
};

export default About;
