import React from "react";
import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <ChakraProvider>
      <Box height="100vh">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a mi tienda!" />
      </Box>
    </ChakraProvider>
  );
};

export default App;