import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Wrap,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemCard = ({ id, image, title, description, price, discount }) => {
  const priceAfterDiscount = (price - (price * discount) / 100).toFixed(2);

  return (
    <Box
      role={"group"}
      p={3}
      maxW={"330px"}
      w={"full"}
      bg={"white"}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
      border={"2px solid rgb(202, 91, 91)"}
    >
      <Box rounded={"lg"}>
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"content"}
          src={image}
          alt="#"
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Text color={"gray.1000"} fontSize={"sm"} textTransform={"uppercase"}>
          {title}
        </Text>
        <Heading
          fontSize={"1xl"}
          fontFamily={"body"}
          fontWeight={500}
          color={"gray.500"}
        >
          {description}
        </Heading>
        <Stack direction={"row"} align={"center"}>
          <Link to={`/item/${id}`}>
            <Button
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.2s"
              colorScheme="red"
            >
              Ver Producto
            </Button>
          </Link>
          <Text fontWeight={800} fontSize={"xl"}>
            ${price}
          </Text>
          <Text textDecoration={"line-through"} color={"gray.600"}>
            ${priceAfterDiscount}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

const ItemListContainer = ({ products, loading }) => {
  return loading ? (
    <Flex alignItems="center" justifyContent="center" marginTop={"100px"}>
      <Spinner color="red.500" size="xl" />
    </Flex>
  ) : (
    <Wrap justify={"center"} spacing="25px" marginTop={"20px"}>
      {products.map((product) => {
        return (
          <ItemCard
            key={product.id}
            id={product.id}
            image={product.thumbnail}
            title={product.title}
            description={product.description}
            price={product.price}
            discount={product.discountPercentage}
          />
        );
      })}
    </Wrap>
  );
};

export default ItemListContainer;
