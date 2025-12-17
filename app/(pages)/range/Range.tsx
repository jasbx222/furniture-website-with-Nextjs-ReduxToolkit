import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Range = () => {
  return (
    <Box
      sx={{
        mt: 12,
      }}
    >
      <Box>
        <Typography
        className=" relative bottom-5 sm:bottom-0"
          variant="h3"
          style={{
            stroke: "#000000",
            color: "#333333",
            textAlign: "center",
            marginTop: "5px",
            fontWeight: "bold",
            fontSize: 32,
          }}
        >
          Browse The Range
        </Typography>
        <Typography className="text-center relative bottom-3 sm:bottom-0 text-[#666666]" variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      <Box
        sx={{
          minHeight: "100vh",

          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          width: "100%",
          flexWrap:"wrap",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Image
            src={"/image/range1.png"}
            width={381}
            height={480}
            alt="range1"
          />
          <Typography
            className="text-center "
            variant="h3"
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: "10px",
              color: "#333333",
            }}
          >
            Dining
          </Typography>
        </Box>
        <Box>
          <Image
            src={"/image/range2.png"}
            width={381}
            height={480}
            alt="range2"
          />
          <Typography
            className="text-center "
            variant="h3"
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: "10px",
              color: "#333333",
            }}
          >
            Living
          </Typography>
        </Box>
        <Box>
          <Image
            src={"/image/range3.png"}
            width={381}
            height={480}
            alt="range3"
          />
          <Typography
            className="text-center "
            variant="h3"
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: "10px",
              color: "#333333",
            }}
          >
            Bedroom
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Range;
