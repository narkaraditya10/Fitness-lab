import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerimg from "../assets/images/banner.png";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px "
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most efficient Exercise
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize={200}
      >
        EXERCISE
      </Typography>

      <img
        src={HeroBannerimg}
        alt="Banner"
        style={{
          position: "absolute",
          top: "0px",
          right: "0",
          width: "700px",
          height: "900px",
          marginTop: "-330px",
        }}
        // className="hero-banner-img"
      />
    </Box>
  );
}

export default HeroBanner;
