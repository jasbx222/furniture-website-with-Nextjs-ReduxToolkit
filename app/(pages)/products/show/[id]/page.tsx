"use client";

import {
  Box,
  Button,
  Typography,
  Rating,
  Stack,
  IconButton,
  Chip,
  Divider,
} from "@mui/material";
import { Plus, Trash2 } from "lucide-react";
import Image from "next/image";
// import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { products } from "../..";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseQty,
  increaseQty,
} from "@/app/redux/feature/CartSlice";
import { RootState } from "@/app/redux/store";

const images = [
  "/image/range1.png",
  "/image/range2.png",
  "/image/range3.png",
  "/image/range1.png",
];

const colors = ["#7C6EE6", "#000000", "#C9A23F"];
const sizes = ["L", "XL", "XS"];

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const qty = useSelector(
    (state: RootState) =>
      state.cart.cartItems.find((item) => item.id === productId)?.quantity ?? 0
  );

  const product = products.find((pro) => pro.id === productId);
  if (!product) return <Typography>Product not found</Typography>;

  const dispatch = useDispatch();
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <Box
      position={"relative"}
      top={"90px"}
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "120px 1fr 1fr", xs: "1fr" },
        gap: 4,
      }}
    >
      {/* Thumbnails */}
      <Stack spacing={2}>
        {images.map((img) => (
          <Box
            key={img}
            onClick={() => setActiveImg(img)}
            sx={{
              border: activeImg === img ? "2px solid #000" : "1px solid #ddd",
              borderRadius: 2,
              p: 1,
              cursor: "pointer",
            }}
          >
            <Image src={img} alt="" width={80} height={80} />
          </Box>
        ))}
      </Stack>

      {/* Main Image */}
      <Box
        sx={{
          bgcolor: "#f6efe8",
          borderRadius: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Image src={product.image} alt="product" width={420} height={320} />
      </Box>

      {/* Details */}
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={600}>
          {product.name}
        </Typography>

        <Typography variant="h6" color="text.secondary">
          {product.price}$
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Rating value={4.5} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            | 5 Customer Review
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>

        <Divider />

        {/* Size */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Size
          </Typography>
          <Stack direction="row" spacing={1}>
            {sizes.map((s) => (
              <Chip key={s} label={s} clickable />
            ))}
          </Stack>
        </Box>

        {/* Color */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Color
          </Typography>
          <Stack direction="row" spacing={1}>
            {colors.map((c) => (
              <Box
                key={c}
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: c,
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Quantity + Actions */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              px: 1,
            }}
          >
            <IconButton onClick={() => dispatch(decreaseQty(product.id))}>
              <Trash2 />
            </IconButton>
            <Typography>{qty}</Typography>
            <IconButton onClick={() => dispatch(increaseQty(product.id))}>
              <Plus />
            </IconButton>
          </Stack>

          <Button
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  price: product.price,
                  img: product.image,
                  title: product.name,
                })
              )
            }
            variant="outlined"
            size="large"
          >
            Add To Cart
          </Button>

          <Button
            onClick={() => dispatch(clearCart())}
            variant="outlined"
            size="large"
          >
            Clear
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
