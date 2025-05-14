import {
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuList,
  Button,
  SimpleGrid,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCategories } from "../services/products.service";
import CartWidget from "./CartWidget";
const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      margin="0px"
      padding="10px"
      height="12%"
      borderBottom="2px solid rgb(202, 91, 91)"
    >
      <Link to="/">
        <Text padding={2} borderRadius={10} color={"white"} bgGradient="linear(to-r, red.200, red.500)">Coder's Store</Text>
      </Link>
      <Menu>
        <MenuButton colorScheme="red" as={Button}>Categories</MenuButton>
        <MenuList>
          <SimpleGrid columns={2} spacing={0}>
            {categories.map((item) => {
              return (
                <Link key={item.slug} to={`/category/${item.slug}`}>
                  <MenuItem
                    _hover={{
                      transform: "scale(1.05)",
                      bgGradient: "linear(to-r, red.200, red.500)",
                    }}
                    transition="all 0.2s"
                    padding="10px"
                  >
                    <Text>{item.name}</Text>
                  </MenuItem>
                </Link>
              );
            })}
          </SimpleGrid>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};
export default NavBar;
