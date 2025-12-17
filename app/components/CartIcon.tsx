import { Badge, Button, IconButton } from "@mui/material";

import React from "react";
import Cart from "../(pages)/cart/Cart";

const CartIcon = ({
  qty,
  setOpenCart,
}: {
  qty: number;
  setOpenCart: (v: boolean) => void;
}) => {
  return (
    <Badge
      badgeContent={qty}
      color="error"
      invisible={qty === 0}
      sx={{
        "& .MuiBadge-badge": {
          fontSize: "11px",
          minWidth: 18,
          height: 18,
          borderRadius: "50%",
        },
      }}
    >
      <button
    className=" cursor-pointer"
        onClick={() => setOpenCart(true)}
       
      >
        <Cart />
      </button>
    </Badge>
  );
};

export default CartIcon;
