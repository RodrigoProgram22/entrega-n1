import { FaShoppingCart } from "react-icons/fa";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";
const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Menu>
        <MenuButton colorScheme="red" as={Button}>
          <SimpleGrid columns={2} spacing={2} p={2} alignItems={"center"}>
            <FaShoppingCart size={30} color="white" />
            {totalItems}
          </SimpleGrid>
        </MenuButton>
        <MenuList>
          <SimpleGrid columns={1} spacing={2} p={2}>
            {cart.length === 0 ? (
              <p>No hay productos en el carrito</p>
            ) : (
              cart.map((item) => (
                <SimpleGrid key={item.id} columns={2} spacing={1}>
                  <div>{item.title}</div>
                  <div> Cantidad: {item.quantity}</div>
                </SimpleGrid>
              ))
            )}
          </SimpleGrid>
          <Flex alignItems="center" justifyContent="center">
            <Button
              textAlign="center"
              colorScheme="red"
              onClick={() => navigate("/cart")}
            >
              Ver carrito
            </Button>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default CartWidget;
