import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const ItemCount = ({product}) => {
    const {addProductToCart,deleteProductFromCart} = useContext(CartContext);
  return (
    <Box>
      <Button colorScheme="red" marginX={2} onClick={()=>{addProductToCart(product)}}>Añadir Producto</Button>
      <Button colorScheme="red" onClick={()=>{deleteProductFromCart(product.id)}}>Quitar Producto</Button>
    </Box>
  );
};

export default ItemCount;
