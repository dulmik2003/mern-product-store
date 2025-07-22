import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

import CreatePage from "./pages/CreatePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />

      <Routes>
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
