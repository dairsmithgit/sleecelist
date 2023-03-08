import {
  Link,
  Flex,
  Box,
  Heading,
  Text,
  Spacer,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import ColorToggle from "./ColorToggle";
import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";

function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      position="fixed"
      w="100%"
      p="1"
      bg={useColorModeValue("#F7FAFC40", "#1A202C80")}
      css={{ backdropFilter: "blur(10px)" }}
      borderBottom="1px"
      borderColor={useColorModeValue("gray.800", "gray.100")}
    >
      <Box>
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
