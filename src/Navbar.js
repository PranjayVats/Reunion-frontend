import {
  Box,
  Divider,
  HStack,
  Text,
  Select,
  Button,
  Center,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
function Navbar() {
  return (
    <Flex
      boxSize="full"
      h={"7%"}
      bg={"#F8F7FD"}
      borderBottom={"1px solid purple"}
      top="0"
      zIndex="100"
      justifyContent={"space-between"}
      position="sticky"
      padding={"3vmax"}
    >
      <HStack justifyContent={"space-evenly"}>
        <Image src="/ReunionIcon.jpg" alt="Icon"></Image>
        <Button colorScheme="purple" variant="outline">
          Rent
        </Button>
        <Button colorScheme="purple" variant="outline">
          Buy
        </Button>
        <Button colorScheme="purple" variant="outline">
          Sell
        </Button>
        <Select
          placeholder="ManageProperty"
          focusBorderColor={"purple"}
          w="14vw"
          border={"none"}
          _focusVisible="none"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          placeholder="Resources"
          focusBorderColor={"purple"}
          w="10vw"
          border={"none"}
          _focusVisible="none"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </HStack>
      <HStack>
        <Button colorScheme="purple" variant="outline">
          Login
        </Button>
        <Button colorScheme="purple" variant="solid">
          Sign up
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
