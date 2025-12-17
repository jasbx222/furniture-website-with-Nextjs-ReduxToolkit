import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "./components/Slider";
import Filters from "./components/Filters";
import Products from "./components/Products";

const page = () => {
  return (
 <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
  <Slider />
  <Filters />
  <Products/>
</Box>
  );
};

export default page;
