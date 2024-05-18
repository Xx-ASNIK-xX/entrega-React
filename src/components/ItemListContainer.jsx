import { Typography } from "@mui/material";
import Cart from "./Cart"

export default function ItemListContainer({ greeting }) {
    return (
      <>
        <Typography>{greeting}</Typography>
        <Cart/>
      </>
    );
  }
  