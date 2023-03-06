import {
  Link,
  Flex,
  Box,
  Heading,
  Text,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import ColorToggle from "./ColorToggle";
import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";

function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      w="100%"
      p="2"
      backgroundColor="gray.800"
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Box color="blue.400">
        <Link href="/" _hover={{ textDecoration: "none", color: "blue.200" }}>
          <Heading>SleeceList</Heading>
          <Heading fontFamily="noto-serif-jp" fontSize="sm">
            アニメ一覧
          </Heading>
        </Link>
      </Box>
      <Spacer />
      <Flex alignItems="center" gap={2}>
        <ColorToggle />
        {isLargerThan800 ? <NavMenu /> : <NavMenuMobile />}
      </Flex>
    </Flex>
  );
}

export default Navbar;
