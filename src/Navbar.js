import {
  HStack,
  Select,
  Button,
  Flex,
  Image,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
function Navbar() {
  const [display, setDisplay] = useState("none");
  return (
    <>
      <Flex
        display={["none", "none", "flex", "flex"]}
        boxSize="full"
        h={"7.4em"}
        bg={"#F8F7FD"}
        borderBottom={"1px solid purple"}
        top="0"
        zIndex="100"
        justifyContent={"space-between"}
        position="sticky"
        padding={"2em"}
        className="mainNav"
      >
        <HStack justifyContent={"space-evenly"}>
          <Image src="/ReunionIcon.jpg" alt="Icon"></Image>
          <Button colorScheme="purple" variant="outline" size="md">
            Rent
          </Button>
          <Button colorScheme="purple" variant="outline" size="md">
            Buy
          </Button>
          <Button colorScheme="purple" variant="outline" size="md">
            Sell
          </Button>

          <Select
            placeholder="ManageProperty"
            focusBorderColor={"purple"}
            w="11em"
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
            w="8em"
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
      <HStack
        display={["flex", "flex", "none", "none"]}
        justifyContent={"space-around"}
        aria-label="Open Menu"
        boxSize="full"
        h={"6em"}
        bg={"#F8F7FF"}
        borderBottom={"1px solid purple"}
        top="0"
        zIndex="100"
        position="sticky"
        padding={"2em"}
        className="mainNav"
      >
        <Image src="/ReunionIcon.jpg" alt="Icon"></Image>
        <IconButton
          size="lg"
          color={"purple.800"}
          icon={<HamburgerIcon />}
          bg="transparent"
          onClick={() => setDisplay("flex")}
        />
      </HStack>
      <Flex
        boxSize={"full"}
        h="100vh"
        zIndex="101"
        pos={"fixed"}
        top="0"
        left="0"
        bg="#F8F7FF"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justifyContent={"flex-end"}>
          <IconButton
            size="lg"
            color={"purple.800"}
            icon={<CloseIcon />}
            bg="transparent"
            onClick={() => setDisplay("none")}
          />
        </Flex>
        <VStack>
          <Button colorScheme="purple" variant="outline" size="lg">
            Rent
          </Button>
          <Button colorScheme="purple" variant="outline" size="lg">
            Buy
          </Button>
          <Button colorScheme="purple" variant="outline" size="lg">
            Sell
          </Button>

          <Select
            placeholder="ManageProperty"
            focusBorderColor={"purple"}
            w="15em"
            fontSize="1.5em"
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
            w="10em"
            fontSize="1.5em"
            border={"none"}
            _focusVisible="none"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Button colorScheme="purple" variant="outline" size="lg">
            Login
          </Button>
          <Button colorScheme="purple" variant="solid" size="lg">
            Sign up
          </Button>
        </VStack>
      </Flex>
    </>
  );
}

export default Navbar;
