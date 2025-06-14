import { Button, Container, Input, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { useTitle } from "../hooks/useTitle";
const AddDoc = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: 0.0,
    stock: 0,
    images: "",
    discountPercentage: 0,
    thumbnail: "",
    category: "",
  });
  const [error, setError] = useState("vacio");
  useTitle("Añadir Producto");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.stock > 0 && formState.price > 0) {
      const productsCollection = collection(db, "products");
      addDoc(productsCollection, formState)
        .then((id) => {
          console.log("Documento agregado con ID: ", id.id);
          setError("true");
        })
        .catch((error) => {
          console.error("Error al agregar el documento: ", error);
        });
    } else {
      setError("false");
    }
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
        Agrega tu producto estrella
      </h1>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
        <Input
          type="text"
          placeholder="Titulo"
          mb={3}
          onChange={(e) => {
            setFormState({
              ...formState,
              title: e.target.value,
            });
          }}
        />
        <Input
          type="text"
          placeholder="Descripción"
          mb={3}
          onChange={(e) => {
            setFormState({
              ...formState,
              description: e.target.value,
            });
          }}
        />
        <Input
          type="number"
          placeholder="Precio"
          mb={3}
          onChange={(e) => {
            setFormState({
              ...formState,
              price: e.target.value,
            });
          }}
        />
        <Input
          type="text"
          placeholder="Porcentaje de descuento"
          mb={3}
          onChange={(e) => {
            setFormState({
              ...formState,
              discountPercentage: e.target.value,
            });
          }}
        />
        <Input
          type="number"
          placeholder="Cantidad de stock"
          mb={3}
          onChange={(e) => {
            setFormState({
              ...formState,
              stock: e.target.value,
            });
          }}
        />
        <Input
          type="text"
          placeholder="Imagen URL"
          mb={3}
          onChange={(e) => {
            setFormState({
              ...formState,
              images: e.target.value,
            });
          }}
        />
        <Input
          type="text"
          placeholder="Thumbnail"
          mb={3}
          onChange={(e) => {
            setFormState({
              ...formState,
              thumbnail: e.target.value,
            });
          }}
        />
        <Input
          type="text"
          placeholder="Categoria"
          mb={3}
          onChange={(e) => {
            setFormState({
              ...formState,
              category: e.target.value,
            });
          }}
        />
        <Button colorScheme="red" type="submit" width="100%">
          Crear
        </Button>
      </form>
      {error == "true" && (
        <p style={{ color: "green", marginTop: "16px" }}>
          ¡Producto agregado exitosamente!
        </p>
      )}
      {error == "false" && (
        <p style={{ color: "red", marginTop: "16px" }}>
          Verifica todos los campos y asegúrate de completar los datos.
        </p>
      )}
    </Container>
  );
};

export default AddDoc;
