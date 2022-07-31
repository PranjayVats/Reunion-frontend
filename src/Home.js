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
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import House1 from "./assets/house1.webp";
import House2 from "./assets/house2.webp";
import House3 from "./assets/house3.webp";
import House4 from "./assets/house4.jpg";
import House5 from "./assets/house5.webp";
import Apartment1 from "./assets/apartment1.jpg";
import Apartment2 from "./assets/apartment2.jpg";
import Apartment3 from "./assets/apartment3.jpg";
import Apartment4 from "./assets/apartment4.jpg";
import Apartment5 from "./assets/apartment5.jpg";
import TownHome1 from "./assets/townhome1.jpg";
import TownHome2 from "./assets/townhome2.jpg";
import TownHome3 from "./assets/townhome3.jpg";
import TownHome4 from "./assets/townhome4.jpg";
import TownHome5 from "./assets/townhome5.jpg";
import TownHome6 from "./assets/townhome6.jpg";
import "react-datepicker/dist/react-datepicker.css";
import "./Home.css";

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
      available: "August 20, 2022",
    },
    {
      image: House1,
      price: 10000,
      name: "Beverly Springfield",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, Florida",
      location: "Florida",
      type: "house",
      category: "rent",
      available: "July 20, 2022",
    },
    {
      image: House5,
      price: 1000,
      name: "Palm Habour",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, New Mexico",
      location: "New Mexico",
      type: "house",
      category: "rent",
      available: "July 5 20, 2022",
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
      available: "August 20, 2022",
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
      available: "July 7, 2022",
    },
    {
      image: House3,
      price: 30000,
      name: "Palm Habour",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, Texas",
      location: "Texas",
      type: "house",
      category: "rent",
      available: "August 20, 2022",
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
      available: "July 6, 2022",
    },
    {
      image: Apartment1,
      price: 2500,
      name: "Palm Habour",
      bhk: 3,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, California",
      location: "California",
      type: "apartments/condos/co-ops",
      category: "rent",
      available: "July 16, 2022",
    },
    {
      image: Apartment2,
      price: 18000,
      name: "Palm Habour",
      bhk: 6,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, California",
      location: "California",
      type: "apartments/condos/co-ops",
      category: "rent",
      available: "November 20, 2022",
    },
    {
      image: Apartment3,
      price: 5000,
      name: "Palm Habour",
      bhk: 2,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, New York",
      location: "New York",
      type: "apartments/condos/co-ops",
      category: "rent",
      available: "July 6, 2022",
    },
    {
      image: Apartment4,
      price: 1250,
      name: "Palm Habour",
      bhk: 2,
      bathrooms: 2,
      area: "8x10",
      address: "2699 Green Valley, Highland Lake, Texas",
      location: "Texas",
      type: "apartments/condos/co-ops",
      category: "rent",
      available: "October 6, 2022",
    },
    {
      image: Apartment5,
      price: 500,
      name: "Faulkner Ave",
      bhk: 2,
      bathrooms: 2,
      area: "8x10",
      address: "909 Woodland St. Michigan, New Mexico",
      location: "New Mexico",
      type: "apartments/condos/co-ops",
      category: "rent",
      available: "September 1, 2022",
    },

    {
      image: TownHome1,
      price: 500,
      name: "Faulkner Ave",
      bhk: 2,
      bathrooms: 2,
      area: "8x10",
      address: "909 Woodland St. Michigan, Florida",
      location: "Florida",
      type: "townhome",
      category: "rent",
      available: "September 1, 2022",
    },
    {
      image: TownHome2,
      price: 4500,
      name: "Faulkner Ave",
      bhk: 4,
      bathrooms: 2,
      area: "8x10",
      address: "909 Woodland St. Michigan, New Jersey",
      location: "New Jersey",
      type: "townhome",
      category: "rent",
      available: "September 10, 2022",
    },
    {
      image: TownHome3,
      price: 500,
      name: "Faulkner Ave",
      bhk: 2,
      bathrooms: 2,
      area: "8x10",
      address: "909 Woodland St. Michigan, Alaska",
      location: "Alaska",
      type: "townhome",
      category: "rent",
      available: "September 1, 2022",
    },
    {
      image: TownHome4,
      price: 5000,
      name: "Faulkner Ave",
      bhk: 2,
      bathrooms: 2,
      area: "8x10",
      address: "909 Woodland St. Michigan, New Mexico",
      location: "New Mexico",
      type: "townhome",
      category: "rent",
      available: "December 1, 2022",
    },
    {
      image: TownHome5,
      price: 500,
      name: "Faulkner Ave",
      bhk: 2,
      bathrooms: 2,
      area: "8x10",
      address: "909 Woodland St. Michigan, Florida",
      location: "Florida",
      type: "townhome",
      category: "rent",
      available: "September 1, 2022",
    },
    {
      image: TownHome6,
      price: 15000,
      name: "Beverly Springfield",
      bhk: 5,
      bathrooms: 2,
      area: "8x10",
      address: "909 Woodland St. Michigan, Texas",
      location: "Texas",
      type: "townhome",
      category: "rent",
      available: "September 1, 2022",
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
  const propertyTypes = ["Houses", "Apartments/Condos/Co-ops", "Townhomes"];
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
    if (price.max > 0) {
      filteredData = filteredData.filter((item) => {
        const priceValue = item.price;
        if (price.min <= priceValue && price.max >= priceValue) {
          return item;
        }
      });
    }
    if (when) {
      filteredData = filteredData.filter((item) => {
        const available = new Date(item.available);
        if (available.getTime() <= when.getTime()) {
          return item;
        }
      });
    }
    setData(filteredData);
  };

  return (
    <Box bg="white" maxW="100vw" className="App">
      <Box
        w="100%"
        padding={["1em 1.5em", "4em 5em", "4em 6em", "4em 6em"]}
        bg="#F8F7FF"
        alignItems="center"
      >
        <HStack justifyContent="space-between" marginY="1.2em">
          <Text fontSize="1.8em" fontWeight={700} color="purple.900">
            Search properties to rent
          </Text>
          <Select
            placeholder="Search with search bar"
            bg="white"
            textAlign="center"
            focusBorderColor="#805AD5"
            w="18em"
          >
            {category.map((c, id) => (
              <option value={c} key={id}>
                {c}
              </option>
            ))}
          </Select>
        </HStack>
        <HStack
          display={["none", "none", "flex", "flex"]}
          h="7.5em"
          w="100%"
          bg="white"
          padding="1em"
          borderRadius="10px"
          justifyContent="space-evenly"
        >
          <Flex
            flexDir="column"
            alignItems="center"
            w="12vw"
            h="5em"
            justifyContent="center"
          >
            <Text fontSize="1em" color="gray">
              Location
            </Text>
            <Select
              placeholder="Search Location"
              bg="white"
              textAlign="center"
              onChange={locationHandle}
              _focusVisible="none"
              focusBorderColor="#805AD5"
              border="none"
            >
              {locations.map((loc, id) => (
                <option value={loc} key={id}>
                  {loc}
                </option>
              ))}
            </Select>
          </Flex>

          <Center height="2.5em">
            <Divider orientation="vertical" borderColor="gray" />
          </Center>
          <Flex
            flexDir="column"
            w="12vw"
            h="5em"
            justifyContent="center"
            alignContent="center"
          >
            <Text fontSize="1em" color="gray" textAlign="center">
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
          <Center height="2.5em">
            <Divider orientation="vertical" borderColor="gray" />
          </Center>

          <Flex
            flexDir="column"
            alignItems="center"
            w="12vw"
            h="5em"
            justifyContent="center"
          >
            <Text fontSize="1em" color="gray">
              Price
            </Text>
            <RangeSlider
              h="3.3vh"
              colorScheme="purple"
              aria-label={["min", "max"]}
              defaultValue={[0, 0]}
              min={0}
              max={50000}
              onChangeEnd={(val) => {
                setPrice({
                  min: val[0],
                  max: val[1],
                });
              }}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Text fontSize="0.9em" >
              ${price.min} - ${price.max}
            </Text>
          </Flex>

          <Center height="2.5em">
            <Divider orientation="vertical" borderColor="gray" />
          </Center>

          <Flex direction="column" alignItems="center" w="12vw" h="10v">
            <Text fontSize="1em" color="gray">
              Property Type
            </Text>
            <Select
              w="12vw"
              textAlign="center"
              focusBorderColor="#805AD5"
              placeholder="Select type"
              border="none"
              onChange={propertyHandle}
              _focusVisible="none"
            >
              {propertyTypes.map((prop, id) => (
                <option value={prop} key={id}>
                  {prop}
                </option>
              ))}
            </Select>
          </Flex>
          <Center height="2.5em">
            <Divider orientation="vertical" borderColor="gray" />
          </Center>
          <Button colorScheme="purple" size="md" onClick={submitHandle}>
            Search
          </Button>
        </HStack>
        <VStack
          display={["flex", "flex", "none", "none"]}
          h="23em"
          w="100%"
          bg="white"
          padding="1em"
          borderRadius="10px"
          className="responsive"
        >
          <Flex
            w="100%"
            h="3em"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="1em" w="6em" color="gray">
              Location
            </Text>
            <Select
              placeholder="Search Location"
              bg="white"
              onChange={locationHandle}
              _focusVisible="none"
              focusBorderColor="#805AD5"
              border="none"
              w="10em"
            >
              {locations.map((loc, id) => (
                <option value={loc} key={id}>
                  {loc}
                </option>
              ))}
            </Select>
          </Flex>
          <Flex
            w="100%"
            h="5em"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="1em" w="8em" color="gray">
              Select Move-in Date
            </Text>
            <Flex>
              <DatePicker
                placeholderText="Set Date"
                selected={when}
                dateFormat="MMMM d, yyyy"
                onChange={(date) => setWhen(date)}
              />
            </Flex>
          </Flex>

          <Flex
            w="100%"
            h="3em"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="1em" color="gray" w="3em">
              Price
            </Text>
            <RangeSlider
              colorScheme="purple"
              aria-label={["min", "max"]}
              defaultValue={[0, 0]}
              min={0}
              max={50000}
              onChangeEnd={(val) => {
                setPrice({
                  min: val[0],
                  max: val[1],
                });
              }}
              w="9em"
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>

              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </Flex>
          <Flex w="100%" justifyContent="flex-end">
            <Text fontSize="0.7em" color="gray">
              ${price.min} - ${price.max}
            </Text>
          </Flex>
          <Flex
            w="100%"
            h="3em"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="1em" color="gray">
              Property Type
            </Text>
            <Select
              w="17em"
              textAlign="right"
              focusBorderColor="#805AD5"
              placeholder="Select type"
              border="none"
              onChange={propertyHandle}
              _focusVisible="none"
            >
              {propertyTypes.map((prop, id) => (
                <option value={prop} key={id}>
                  {prop}
                </option>
              ))}
            </Select>
          </Flex>
          <Button colorScheme="purple" onClick={submitHandle}>
            Search
          </Button>
        </VStack>
        <SimpleGrid w="100%" spacingY="10" marginY="4em" justifyItems="center" minChildWidth="18.5em">
          {data && data.map((item) => (
            <Box bg="white" h="23em" flexDirection="column" borderRadius="1.5em" w="18.5em">
              <Image
                src={item.image}
                w="100%"
                h="12em"
                borderRadius="1.5em 1.5em 0em 0em"
              ></Image>
              <Box padding="0.7em" justifyContent="space-between">
                <Text color="purple.500" fontSize="1.2em" fontWeight={600} maxH="1.5em">
                  $ {item.price}/month
                </Text>
                <Text fontSize="1.5em" fontWeight={600} maxH="1.8em">
                  {item.name}
                </Text>
                <Text color="gray" fontSize="1em" maxH="3em">{item.address}</Text>
                <Divider />
                <Flex justifyContent="space-between" maxH="1.5em" flexWrap="wrap">
                  <Text color="gray" fontSize="1em">{item.bhk} beds</Text>
                  <Text color="gray" fontSize="1em">{item.bathrooms} bathrooms</Text>
                  <Text color="gray" fontSize="1em">{item.area} m2</Text>
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
