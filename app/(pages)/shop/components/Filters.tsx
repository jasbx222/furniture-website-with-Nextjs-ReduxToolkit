import { Box, Typography, Divider } from "@mui/material";
import { BoxIcon, Filter, Sliders } from "lucide-react";
import React from "react";

const Filters = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mr: 5,
        ml: 5,
        borderBottom: "1px solid #eee",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Filter size={18} />
        <Sliders size={18} />
        <Divider orientation="vertical" flexItem />
        <BoxIcon size={18} />
        <Typography variant="body2" color="text.secondary">
          Showing 1–16 of 32 results
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <Typography variant="body2">
          Show <strong>16</strong>
        </Typography>

        <Typography variant="body2">
          Sort by <strong>Default</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default Filters;
