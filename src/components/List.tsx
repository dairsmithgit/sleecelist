import { Box, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { animesListAtom } from "../store/store";

function List() {
  const [animeList, setAnimeList] = useAtom(animesListAtom);

  return (
    <Box>
      {animeList.map((anime) => (
        <Box>
          <Text>{anime.title?.romaji}</Text>
          <Text>{anime.title?.native}</Text>
        </Box>
      ))}
    </Box>
  );
}

export default List;
