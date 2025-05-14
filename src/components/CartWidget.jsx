import { FaShoppingCart } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
const CartWidget = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <FaShoppingCart size={30} color="gray"/> 99
    </Flex>
  );
};

export default CartWidget;
