import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { animeAtom } from "../store/store";
import DetailsCharacter from "./DetailsCharacter";

function AnimeDetails() {
  const [animeDetail, setAnimeDetail] = useAtom(animeAtom);

  return (
    <Flex wrap="wrap">
      <Box>
        {animeDetail?.characters?.nodes?.map((character) => (
          <Box m={2} key={character?.id}>
            <DetailsCharacter character={character} />
          </Box>
        ))}
      </Box>
    </Flex>
  );
}

export default AnimeDetails;
