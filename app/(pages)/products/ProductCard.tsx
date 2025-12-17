"use client";
import { Box, Button, Card, Typography } from "@mui/material";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { addToCart } from "@/app/redux/feature/CartSlice";
import { toast } from "react-toastify";
import { successMessage } from "@/app/helpers/Messages";

const ProductCard = ({
  id,
  img,
  title,
  price,
  price_after,
  description,
  active,
}: {
  id: number;
  img: string;
  title: string;
  price: number;
  price_after: number;
  description: string;
  active: boolean;
}) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        width: 400,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        transition: "0.3s",
        "&:hover .overlay": {
          opacity: 1,
        },
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Image */}
      <Box sx={{ position: "relative", width: "100%", height: 300 }}>
        <Box
          sx={{
            backgroundColor: active ? "#2EC1AC" : "#E97171",
            borderRadius: "50%",
            width: 48,
            height: 48,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 8,
            left: 8,
            zIndex: 2,
          }}
        >
          {active ? "New" : "-50%"}
        </Box>

        <Image src={img} alt="card" fill style={{ objectFit: "cover" }} />

        {/* Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            opacity: 0,
            transition: "0.3s",
            zIndex: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#fff",
              color: "#B88E2F",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  title,
                  price,
                  img,
                }),
                successMessage("Added to cart successfully")
              )
            }
          >
            Add To Cart
          </Button>

          <Box sx={{ display: "flex", gap: 3, color: "#fff" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Share2 size={18} />
              <Typography variant="body2">Share</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Heart size={18} />
              <Typography variant="body2">Like</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Content: Title, Price, Description */}
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#3A3A3A" }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: "#898989", mb: 1 }}>
          {description}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            ${price}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#B0B0B0", textDecoration: "line-through" }}
          >
            ${price_after}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
