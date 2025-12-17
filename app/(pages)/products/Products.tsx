'use client';
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { products } from "./index";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <Box sx={{ mt: 12, px: { xs: 2, md: 4 } }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "#3A3A3A",
          textAlign: "center",
          mb: 3,
          fontWeight: 700,
        }}
      >
        Our Products
      </Typography>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {products.map((prod) => (
          <Grid key={prod.id} display="flex" justifyContent="center">
            <ProductCard
              id={prod.id}
              active={prod.active}
              title={prod.name}
              img={prod.image}
              price={prod.price}
              price_after={prod.oldPrice}
              description={prod.description}
            />
          </Grid>
        ))}
      </Grid>

      {/* Show More */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="outlined"
          sx={{
            color: "#B88E2F",
            borderColor: "#B88E2F",
            width: 245,
            height: 48,
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#B88E2F",
              color: "#fff",
              borderColor: "#B88E2F",
            },
          }}
        >
          Show More
        </Button>
      </Box>
    </Box>
  );
};

export default Products;
