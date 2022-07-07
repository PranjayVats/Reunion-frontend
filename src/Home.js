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
  SimpleGrid,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import House1 from "./assets/house1.webp";
import House2 from "./assets/house2.webp";
import House3 from "./assets/house3.webp";
import House4 from "./assets/house4.jpg";
import House5 from "./assets/house5.webp";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
  var dummyData = [
    {
      image: House1,
      price: 10000,
      name: "Palm Habour",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, Alaska",
      location: "Alaska",
      type: "house",
      category: "rent",
      available: "August 20, 2022"
    },
    {
      image: House1,
      price: 10000,
      name: "Palm Habour",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, Florida",
      location: "Florida",
      type: "house",
      category: "rent",
      available: "July 20, 2022"
    },
    {
      image: House5,
      price: 1000,
      name: "Palm Habour",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, Alaska",
      location: "Alaska",
      type: "house",
      category: "rent",
      available: "July 5 20, 2022"
    },
    {
      image: House2,
      price: 10000,
      name: "Palm Habour",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, New York",
      location: "New York",
      type: "house",
      category: "rent",
      available: "August 20, 2022"
    },
    {
      image: House4,
      price: 38000,
      name: "Palm Habour",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, New Jersey",
      location: "New Jersey",
      type: "house",
      category: "rent",
      available: "July 7, 2022"
    },
    {
      image: House3,
      price: 30000,
      name: "Palm Habour",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, Alaska",
      location: "Alaska",
      type: "house",
      category: "rent",
      available: "August 20, 2022"
    },
    {
      image: House4,
      price: 500,
      name: "Palm Habour",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, Washington",
      location: "Washington",
      type: "house",
      category: "rent",
      available: "July 6, 2022"
    },
  ];
  const [data, setData] = useState(dummyData);
  const category = ["Rent", "Buy", "Sell", "PG"];
  const locations = [
    "Alaska",
    "California",
    "Florida",
    "New Jersey",
    "New Mexico",
    "New York",
    "Texas",
    "Washington",
  ];
  const propertyTypes = [
    "Houses",
    "Land",
    "Residential",
    "Commercial",
    "Industrial",
  ];
  const [location, setLocation] = useState("");
  const [when, setWhen] = useState();
  const [price, setPrice] = useState({ min: 0, max: 0 });
  const [propertyType, setPropertyType] = useState("");
  const locationHandle = (e) => {
    setLocation(e.target.value);
  };
  const propertyHandle = (e) => {
    setPropertyType(e.target.value);
  };
  const submitHandle = () => {
    var filteredData = dummyData;
    if (location) {
      filteredData = dummyData.filter((item) => {
        const searchForLocation = location.toLowerCase();
        const searchFromLocation = item.location.toLowerCase();
        if (searchFromLocation.includes(searchForLocation)) {
          return item;
        }
      });
    }
    if (propertyType) {
      filteredData = filteredData.filter((item) => {
        const searchForType = propertyType.toLowerCase();
        const searchFromType = item.type.toLowerCase();
        if (searchForType.includes(searchFromType)) {
          return item;
        }
      });
    }
    if (price.max>0) {
      filteredData = filteredData.filter((item) => {
        const priceValue = item.price;
        if (price.min <= priceValue && price.max >= priceValue) {
          return item;
        }
      });
    } 
    if(when){
      filteredData = filteredData.filter((item) => {
        const available = new Date(item.available);
        if (available.getTime()<=when.getTime()) {
          return item;
        }
      });
    }
    setData(filteredData);
  };
  
  return (
    <Box bg={"white"} maxW={"100vw"} className="App">
      <Box
        w={"100%"}
        padding={"4vmax 8vmax"}
        bg={"#F8F7FF"}
        alignItems="center"
      >
        <HStack justifyContent={"space-between"} marginY="2vmax">
          <Text fontSize={"2.5vmax"} fontWeight={700} color={"purple.900"}>
            Search properties to rent
          </Text>
          <form>
            <Select
              placeholder="Search with search bar"
              bg="white"
              textAlign={"center"}
              onChange={locationHandle}
              focusBorderColor={"#805AD5"}
            >
              {category.map((c) => (
                <option value={`${c}`}>{c}</option>
              ))}
            </Select>
          </form>
        </HStack>
        <HStack
          h={"8.5%"}
          w={"100%"}
          bg={"white"}
          padding={"2vmax"}
          borderRadius={"10px"}
          justifyContent={"space-between"}
        >
          <Flex direction={"column"} alignItems="center" w={"12vw"} h="10vh">
            <Text fontSize={"1.2vmax"} color="gray">
              Location
            </Text>
            <Select
              placeholder="Search Location"
              bg="white"
              onChange={locationHandle}
              _focusVisible="none"
              focusBorderColor={"#805AD5"}
              border={"none"}
            >
              {locations.map((loc) => (
                <option value={`${loc}`}>{loc}</option>
              ))}
            </Select>
          </Flex>

          <Center height="40px">
            <Divider orientation="vertical" borderColor="gray" />
          </Center>
          <Flex direction={"column"} w={"12vw"} h="10vh">
            <Text fontSize={"1.2vmax"} color="gray">
              Select Move-in Date
            </Text>
            <Center>
              <DatePicker
                placeholderText="Set Date"
                selected={when}
                dateFormat="MMMM d, yyyy"
                onChange={(date) => setWhen(date)}
              />
            </Center>
          </Flex>
          <Center height="40px">
            <Divider orientation="vertical" borderColor="gray" />
          </Center>

          <Flex direction={"column"} alignItems="center" w="12vw">
            <Text fontSize={"1.2vmax"} color="gray">
              Price
            </Text>
            <RangeSlider
              colorScheme={"purple"}
              aria-label={["min", "max"]}
              defaultValue={[0, 0]}
              min={0}
              max={50000}
              onChangeEnd={(val) => {
                // console.log(val);
                setPrice({
                  min: val[0],
                  max: val[1],
                });
                // console.log(price);
              }}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Text fontSize={"1.2vmax"} color="gray">
              ${price.min} - ${price.max}
            </Text>
          </Flex>

          <Center height="40px">
            <Divider orientation="vertical" borderColor="gray" />
          </Center>

          <Flex direction={"column"} alignItems="center" w="12vw">
            <Text fontSize={"1.2vmax"} color="gray">
              Property Type
            </Text>
            <Select
              textAlign="center"
              focusBorderColor={"#805AD5"}
              placeholder="Select type"
              border={"none"}
              onChange={propertyHandle}
              _focusVisible="none"
            >
              {propertyTypes.map((prop) => (
                <option value={`${prop}`} key={prop.id}>
                  {prop}
                </option>
              ))}
            </Select>
          </Flex>
          <Center height="40px">
            <Divider orientation="vertical" borderColor="gray" />
          </Center>
          <Button colorScheme={"purple"} onClick={submitHandle}>
            Search
          </Button>
        </HStack>
        <SimpleGrid
          maxW="100%"
          spacing={"20"}
          minChildWidth="20vw"
          marginY={"2vmax"}
          // justify="center"
        >
          {data.map((item) => (
            <Box
              maxW="25vw"
              bg="white"
              h="55vh"
              flexDirection={"column"}
              borderRadius="20px"
              // border="1px solid black"
            >
              <Image
                src={item.image}
                w="100%"
                h="30vh"
                borderRadius="20px 20px 0px 0px"
              ></Image>
              <Box padding="1vmax">
                <Text color={"purple.500"} fontSize="1.5vmax" fontWeight={600}>
                  $ {item.price}/month
                </Text>
                <Text fontSize="2vmax" fontWeight={600}>
                  {item.name}
                </Text>
                <Text color={"gray"}>{item.address}</Text>
                <Divider />
                <Flex justify={"space-between"}>
                  <Text color={"gray"}>{item.bhk} beds</Text>
                  <Text color={"gray"}>{item.bathrooms} bathrooms</Text>
                  <Text color={"gray"}>{item.area} m2</Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Home;
