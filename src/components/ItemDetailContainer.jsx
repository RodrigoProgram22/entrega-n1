import {
  SimpleGrid,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  Box,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { MdLocalShipping } from "react-icons/md";
const ItemDetailContainer = ({ product }) => {
  const priceAfterDiscount = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          {product.images ? (
            <Image
              rounded={"md"}
              alt={"product image"}
              src={product.images}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          ) : null}
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title}
            </Heading>
            <Stack direction={"row"} marginTop={3} align={"center"}>
              <Text fontSize={"4xl"}>${product.price}</Text>
              <Text
                textDecoration={"line-through"}
                fontSize={"2xl"}
                color={"gray.600"}
              >
                ${priceAfterDiscount}
              </Text>
            </Stack>
            <Text fontWeight={800} fontSize={"xl"} marginY={3}>
              Categoria : {product.category}
            </Text>
            <Text fontWeight={800} fontSize={"xl"}>
              Stock : {product.stock}
            </Text>
            <Stack direction="row" alignItems="center" marginTop={2}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={"red"} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"2xl"} fontWeight={"300"}>
                {product.description}
              </Text>
            </VStack>
            <ItemCount product={product} />
          </Stack>
        </Stack>
        {/* {product.reviews.map((reviews, index) => (
          <Container
            border={"1px red solid"}
            p={2}
            borderRadius={"2xl"}
            key={index}
          >
            <h2>Review {index + 1}</h2>

            <p>Nombre : {reviews.reviewerName}</p>
            <p>Comentario : {reviews.comment}</p>
            <p fontWeight={800} fontSize={"xl"}>
              Fecha : {reviews.date}
            </p>
          </Container>
        ))} */}
      </SimpleGrid>
    </Container>
  );
};
export default ItemDetailContainer;