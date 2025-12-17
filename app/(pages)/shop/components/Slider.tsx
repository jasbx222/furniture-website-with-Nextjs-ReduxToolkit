import { Box, Typography } from "@mui/material";


const Slider = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('/image/shop.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          // bgcolor: "rgba(255,255,255,0.6)",
        }}
      />

 
      <Box sx={{ position: "relative", textAlign: "center" }}>
        <Typography variant="h2" sx={{ fontWeight: 600 }}>
          Shop
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Home / Shop
        </Typography>
      </Box>
    </Box>
  );
};

export default Slider;
