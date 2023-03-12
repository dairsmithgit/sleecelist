import { Box, Text, Input } from "@chakra-ui/react";

function Search() {
  return (
    <Box p={2}>
      <Text>Search Anime</Text>
      <Input placeholder="Name" w="400px" />
    </Box>
  );
}
export default Search;
