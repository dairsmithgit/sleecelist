import {
  Flex,
  Text,
  Heading,
  Spacer,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import ColorToggle from "./ColorToggle";
import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";

function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      position="fixed"
      zIndex={999}
      w="100%"
      p="1"
      bg={useColorModeValue("#f5f5f540", "#0f0f0f80")}
      css={{ backdropFilter: "blur(10px)" }}
      borderBottom="1px"
      borderColor={useColorModeValue("brand.900", "brand.100")}
    >
      <Link to="/">
        <Heading _hover={{ color: "brand.300" }}>
          <Text>SleeceList</Text>
          <Text fontFamily="noto-sans-jp" fontSize="sm">
            アニメ一覧
          </Text>
        </Heading>
      </Link>

      <Spacer />
      <Flex alignItems="center" gap={2}>
        <ColorToggle />
        {isLargerThan800 ? <NavMenu /> : <NavMenuMobile />}
      </Flex>
    </Flex>
  );
}

export default Navbar;
