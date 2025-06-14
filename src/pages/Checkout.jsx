import { Button, Container, Input, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import { useTitle } from "../hooks/useTitle";

const Checkout = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const { cart, getTotalPrice } = useContext(CartContext);

  const toast = useToast();
  useTitle("Finalizar Compra");
  const handleSumbit = (e) => {
    e.preventDefault();

    const data = {
      buyer: formState,
      order: cart,
      total: getTotalPrice(),
    };
    const cartCollection = collection(db, "cart");
    addDoc(cartCollection, data)
      .then(({ id }) =>
        toast({
          title: "Compra finalizada",
          description: `Por cualquier reclamo indicar el numero de orden: ${id}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      )
      .catch((e) => console.error(e));
  };
  return (
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
    >
      <h1
        style={{ textAlign: "center", marginBottom: "2rem", fontSize: "23px" }}
      >
        Agregar datos del comprador
      </h1>
      <form onSubmit={(e) => handleSumbit(e)}>
        <Input
          type="text"
          placeholder="Nombre completo"
          mb={3}
          onChange={(e) =>
            setFormState({
              ...formState,
              fullName: e.target.value,
            })
          }
        />
        <Input
          type="text"
          placeholder="Correo electronico"
          mb={3}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
        />
        <Input
          type="text"
          placeholder="Numero de contacto"
          mb={3}
          onChange={(e) =>
            setFormState({
              ...formState,
              phoneNumber: e.target.value,
            })
          }
        />
        <Button colorScheme="red" type="submit" width="100%">
          Comprar
        </Button>
      </form>
    </Container>
  );
};

export default Checkout;
