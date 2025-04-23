import {
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";

import CartWidget from "./CartWidget";

const NavBar = () => {
  return <Flex
    alignItems="center"
    justifyContent="space-between"
    width="100vw"
    margin="0px"
    padding="0 20px"
    height="12%"
    borderBottom="2px solid rgb(202, 91, 91)"
  >
    <Text className="test">Rodri Store</Text>
    <Menu>
      <MenuButton as={Button}>Actions</MenuButton>
      <MenuList>
        <MenuItem>Zapatillas</MenuItem>
        <MenuItem>Jordans</MenuItem>
      </MenuList>
    </Menu>
    <CartWidget />
  </Flex>;

};
export default NavBar;