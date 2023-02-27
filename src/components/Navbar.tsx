import { Link, Flex, Box, Text, Spacer, useMediaQuery } from "@chakra-ui/react";
import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";

function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box color="blue.400" fontWeight="bold">
        <Link href="/" _hover={{ textDecoration: "none", color: "blue.200" }}>
          <Text fontSize="2xl">SleeceList</Text>
          <Text fontSize="sm">アニメ一覧</Text>
        </Link>
      </Box>
      <Spacer />
      <Flex gap={2}>{isLargerThan800 ? <NavMenu /> : <NavMenuMobile />}</Flex>
    </Flex>
  );
}

export default Navbar;
