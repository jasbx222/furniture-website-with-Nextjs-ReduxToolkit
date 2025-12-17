'use client'
import { Box, Typography, IconButton } from "@mui/material";
import React, { useRef } from "react";
import { categories } from "./indx";
import { ArrowLeft, ArrowRight } from "lucide-react";


const Categories = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { clientWidth, scrollLeft } = sliderRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ px: 2, position: "relative" }}>
      <Typography variant="h2" sx={{ textAlign: "center", mb: 4 }}>
        Categories
      </Typography>

      {/* Slider container */}
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
          scrollBehavior: "smooth",
        }}
      >
        {categories.map((cat) => (
          <Box
            key={cat.id}
            sx={{
              position: "relative",
              minWidth: 200,
              height: 200,
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              flexShrink: 0,
              scrollSnapAlign: "start",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              },
              "&:hover img": {
                transform: "scale(1.1)",
              },
              "&:hover .title": {
                opacity: 1,
              },
            }}
          >
            <img src={cat.img} alt={cat.title} />
            <Typography
              className="title"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                textAlign: "center",
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                opacity: 0,
                transition: "opacity 0.3s",
                p: 1,
              }}
            >
              {cat.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Left button */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowLeft />
      </IconButton>

      {/* Right button */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowRight />
      </IconButton>
    </Box>
  );
};

export default Categories;
