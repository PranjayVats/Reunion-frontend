import {
  Box,
  
} from "@chakra-ui/react";
import Home from "./Home";
import Navbar from "./Navbar.js";


function App() {
  
  return (
    <Box bg={"white"} maxW={"100vw"} className="App">
        <Navbar />
        <Home />
    </Box>
  );
}

export default App;
