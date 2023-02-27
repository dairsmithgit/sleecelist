import { Link, Box, Flex, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const anime = {
  id: 123,
};

function Card() {
  return (
    <Flex
      flexDirection="column"
      border="2px"
      borderColor="gray.100"
      borderRadius="md"
      m="2"
      p="1"
      w="20%"
      _hover={{ borderColor: "blue.400" }}
    >
      <Link as={NavLink} to="/details" _hover={{ textDecoration: "none" }}>
        <Box>
          <Text>Anime Title - English</Text>
          <Text>Anime Title - Native</Text>
        </Box>
        <Flex justifyContent="space-between">
          <Text>Anime Studio</Text>
          <Text>Rating</Text>
        </Flex>
        <Image h="200px" w="100%" />
        <Box>
          <Text>Description</Text>
        </Box>
      </Link>
    </Flex>
  );
}

export default Card;
