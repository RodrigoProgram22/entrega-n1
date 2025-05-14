import React from "react";
import {
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container maxW="container.xl" h="100vh" centerContent>
      <VStack spacing={6} justify="center" h="full">
        <Heading
          fontSize={{ base: "6xl", md: "8xl" }}
          bgGradient="linear(to-r, red.200, red.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          404
        </Heading>
        <Heading size="xl">¡Ups! Página no encontrada</Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </Text>
        <Link to="/">
          <Button
            colorScheme="red"
            size="lg"
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            Volver al inicio
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
