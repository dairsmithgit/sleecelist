import { Box, Flex } from "@chakra-ui/react";
import Card from "./Card";

function Feed() {
  return (
    <Flex justifyContent="space-evenly" flexWrap="wrap" h="100%">
      <Card />
      <Card />
      <Card />
      <Card />
    </Flex>
  );
}

export default Feed;
