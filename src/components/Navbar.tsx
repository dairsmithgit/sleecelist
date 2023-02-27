import {
  Link,
  Flex,
  Box,
  Text,
  Spacer,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";

function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box color="blue.400" fontWeight="bold">
        <Link href="/" _hover={{ textDecoration: "none", color: "blue.200" }}>
          <Text fontSize="2xl">SleeceList</Text>
          <Text fontSize="lg">アニメ一覧</Text>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
