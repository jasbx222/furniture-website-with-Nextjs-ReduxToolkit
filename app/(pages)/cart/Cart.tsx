"use client";
import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import {
  Minus,
  Navigation2,
  Plus,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "@/app/redux/feature/CartSlice";
import Image from "next/image";

export default function Cart() {
    const [open,setOpen]=React.useState(false)
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.cartItems);
  const qty = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <>
      <button
        onClick={toggleDrawer(!open)}
       
 
    
      >
        <ShoppingCart color="#000000" size={20} />
      </button>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        transitionDuration={300}
        ModalProps={{
          disableScrollLock: true,
        }}
        PaperProps={{
          sx: {
            width: 360,
            bgcolor: "#fff",

            p: 2,
          },
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 2 }}>
         
          <Typography variant="h6" fontWeight={600}>
            Shopping Cart
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {qty} items
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Items */}
        <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {items.map((i) => (
            <Box
              key={i.id}
              sx={{
                display: "flex",
                gap: 2,
                p: 1.5,
                borderRadius: 2,
                border: "1px solid #eee",
                transition: "0.2s",
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                },
              }}
            >
              <img
                src={i.img}
                alt={i.title}
                width={70}
                height={70}
                style={{ borderRadius: 8, objectFit: "cover" }}
              />

              <Box sx={{ flex: 1 }}>
                <Typography fontWeight={500} noWrap>
                  {i.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Qty: {i.quantity}
                </Typography>

                <Typography fontWeight={600} mt={0.5}>
                  ${i.price}
                </Typography>
              </Box>

              <IconButton
                onClick={() => dispatch(removeFromCart(i.id))}
                sx={{
                  alignSelf: "flex-start",
                  color: "error.main",
                  "&:hover": { bgcolor: "error.lighter" },
                }}
              >
                <Trash2 size={18} />
              </IconButton>

              <IconButton
                onClick={() => dispatch(increaseQty(i.id))}
                sx={{
                  alignSelf: "flex-start",
                  color: "error.main",
                  "&:hover": { bgcolor: "error.lighter" },
                }}
              >
                <Plus />
              </IconButton>

              <IconButton
                onClick={() => dispatch(decreaseQty(i.id))}
                sx={{
                  alignSelf: "flex-start",
                  color: "error.main",
                  "&:hover": { bgcolor: "error.lighter" },
                }}
              >
                <Minus />
              </IconButton>
            </Box>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Footer */}
        <Box sx={{ mt: "auto" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              borderRadius: 2,
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Checkout
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
