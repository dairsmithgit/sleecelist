import { Box, Flex, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { animesListAtom } from "../store/store";

function List() {
  const [animeList, setAnimeList] = useAtom(animesListAtom);

  return (
    <Box m={2}>
      {animeList ? (
        animeList.map((anime) => (
          <Flex gap={2}>
            <Text fontWeight="bold">{anime.title?.romaji}</Text>
            <Text>({anime.title?.native})</Text>
          </Flex>
        ))
      ) : (
        <Text fontWeight="bold">No animes in this list to display...</Text>
      )}
    </Box>
  );
}

export default List;
