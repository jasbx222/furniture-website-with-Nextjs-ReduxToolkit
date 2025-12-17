"use client";

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  Badge,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { routes } from "./routes";
import { useEffect, useState } from "react";
import Cart from "@/app/(pages)/cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { ShoppingCart } from "lucide-react";
import CartIcon from "../CartIcon";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:1000px)");
  const [isScrolled, setIsScrolled] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const qty = useSelector((state: RootState) => state.cart.totalQuantity);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
<Box
  zIndex={8}
  sx={{
    width: 260,
    bgcolor: "#fff",
    borderRadius: 2,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    p: 2,
  }}
>
  <List sx={{ p: 0 }}>
    <Box sx={{ mb: 2 }}>
      <CartIcon setOpenCart={setOpenCart} qty={qty} />
    </Box>

    {routes.map((item) => (
      <ListItem
        key={item.id}
        disablePadding
        sx={{
          mb: 0.5,
        }}
      >
        <Link
          href={item.title}
          style={{
            textDecoration: "none",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              py: 1.2,
              px: 2,
              borderRadius: 1.5,
              fontWeight: 500,
              color: "#111",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f5f7fa",
                color: "#1976d2",
                transform: "translateX(4px)",
              },
            }}
          >
            {item.title}
          </Box>
        </Link>
      </ListItem>
    ))}
  </List>
</Box>

  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        transition: "0.3s",
        backgroundColor: isScrolled ? "rgba(255,255,255,0.8)" : "#fff",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid #E5E7EB" : "none",
      }}
    >
      <Toolbar
        sx={{ px: { xs: 2, sm: 8 }, py: 2, justifyContent: "space-between" }}
      >
        {/* Logo */}
        <Box>
          <img src="/image/Logo.png" alt="logo" style={{ width: 140 }} />
        </Box>

        {/* Desktop Links */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 4 }}>
            {routes.map((item) => (
              <Link
                key={item.id}
                href={item.title}
                style={{
                  textDecoration: "none",
                  color: "#111",
                  fontWeight: 500,
                }}
              >
                {item.title}
              </Link>
            ))}
          </Box>
        )}

        {/* Desktop Icons */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <CartIcon setOpenCart={setOpenCart} qty={qty} />

            {/* Drawer */}
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <IconButton onClick={handleDrawerToggle}>
            <img src="/image/menu.png" width={36} />
          </IconButton>
        )}

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              backgroundColor: "#ffffffee",
              backdropFilter: "blur(6px)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
