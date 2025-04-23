import { FaShoppingCart } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
const CartWidget = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <FaShoppingCart size={30}/> 99
    </Flex>
  );
};

export default CartWidget;
