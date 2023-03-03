import { useQuery } from "@apollo/client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { Media } from "../generated/anilist-graphql";
import { GET_ANIME_DETAILS } from "../query/mediaQuery";
import { animeAtom } from "../store/store";

function AnimeDetails() {
  const [animeDetail, setAnimeDetail] = useAtom(animeAtom);
  // const { loading, error, data } = useQuery(GET_ANIME_DETAILS, {
  //   // variables: { animeId },
  // });

  return (
    <Flex>
      {animeDetail?.characters?.nodes?.map((character) => (
        <Text>{character?.name?.full}</Text>
      ))}
    </Flex>
  );
}

export default AnimeDetails;
