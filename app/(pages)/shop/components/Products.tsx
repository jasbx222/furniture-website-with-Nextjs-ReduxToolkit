'use client'
import { Box, Grid, TablePagination } from "@mui/material";
import React, { useState } from "react";
import { products } from "../../products";
import ProductCard from "../../products/ProductCard";

const Products = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (_:any, newPage:any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event:any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ mt: 12, px: { xs: 2, md: 4 } }}>
      <Grid container spacing={3}>
        {products
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((prod) => (
            <Grid
          
              key={prod.id}
              
              display="flex"
              justifyContent="center"
            >
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

      {/* Pagination */}
      <TablePagination
        component="div"
        count={products.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[8, 16, 24, 32]}
      />
    </Box>
  );
};

export default Products;
