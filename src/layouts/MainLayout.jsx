import { Outlet } from "react-router";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <Box>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
