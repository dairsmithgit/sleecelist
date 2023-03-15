import { Box, Flex, Heading, Text, IconButton } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FiCopy } from "react-icons/fi";

import { animesListAtom } from "../store/store";

function List() {
  const [animeList, setAnimeList] = useAtom(animesListAtom);
  console.log(animeList);

  if (animeList.length > 0) {
    return (
      <Flex flexDirection="column" mt={1}>
        <Flex gap={2} justifyContent="center" alignItems="center">
          <Heading>Your Anime List</Heading>
          <IconButton
            aria-label="copy to clipboard"
            icon={<FiCopy />}
            variant="menu"
            onClick={() => {
              navigator.clipboard.writeText("hello"); // make the text the contents of state or the contents of the div
            }}
          />
        </Flex>
        <Box mx="auto" my={2} w="50%" border="1px">
          {animeList.map((anime) => (
            <Flex gap={2} p={1} justifyContent="center">
              <Text fontWeight="bold">{anime.title?.romaji}</Text>
              <Text>({anime.title?.native})</Text>
            </Flex>
          ))}
        </Box>
      </Flex>
    );
  } else {
    return (
      <Box m={2} textAlign="center">
        <Text fontWeight="bold">No animes in this list to display...</Text>
      </Box>
    );
  }
}

export default List;
