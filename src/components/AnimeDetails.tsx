import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { animeAtom } from "../store/store";
import AnimeAction from "./AnimeAction";
import DetailsCharacter from "./DetailsCharacter";
import DetailsGeneral from "./DetailsGeneral";

function AnimeDetails() {
  const [animeDetail, setAnimeDetail] = useAtom(animeAtom);
  console.log(animeDetail);

  return (
    <Flex wrap="wrap">
      <Image src={animeDetail?.bannerImage} alt="banner for selected anime" />
      <Box p={2}>
        <Flex alignItems="center" gap={2}>
          <Heading>{animeDetail?.title?.romaji}</Heading>
          <AnimeAction anime={animeDetail} />
        </Flex>
        <DetailsGeneral anime={animeDetail} />
      </Box>
      <Box p={2}>
        <Heading>Characters</Heading>
        <Flex wrap="wrap" justifyContent="space-evenly">
          {animeDetail?.characters?.edges?.map((character) => (
            <Box m={2} key={character?.node?.id}>
              <DetailsCharacter character={character} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default AnimeDetails;
