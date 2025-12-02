import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText("WELCOME TO OUR SITE");
  }, []);
  return (
    <>
      <Box
        sx={{
          marginTop: "100px",
          height: "750px",
          borderRadius: "40px",
          background: `radial-gradient( circle at top right , #FFC0CB 10%, transparent 100% ),
          radial-gradient( circle at top left , #FFFFFF 10%, transparent 100% ),
           radial-gradient( circle at bottom left , #4213fcff 60%, transparent 100%  ),
           radial-gradient( circle at bottom right , #FFFFFF 10%, transparent 100%  )`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Stack direction={"column"}>
          <Typography
            sx={{
              fontFamily: "emoji",
              color: "gray",
              fontSize: "48px",
              fontWeight: "Bold",
            }}
          >
            This is an E-com Application Lading Page
          </Typography>
          <Typography
            noWrap
            sx={{
              fontFamily: "emoji",
              color: "white",
              fontSize: "24px",
              fontWeight: "Semi Bold",
              maxWidth: "850px",
              textAlign: "center",
            }}
          >
            Lorem Ipsum is simply dummy text <br /> of the printing and
            typesetting industry. Lorem Ipsum has been <br /> the industry's
            standard dummy text ever since the 1500s,
            <br /> when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
            <br /> It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </Typography>
          <Typography
            sx={{
              fontFamily: "emoji",
              color: "gray",
              fontSize: "48px",
              fontWeight: "Bold",
            }}
          >
            {text}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default HeroSection;
