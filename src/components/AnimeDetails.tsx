import { useQuery } from "@apollo/client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Media } from "../generated/anilist-graphql";
import { GET_ANIME_DETAILS } from "../query/mediaQuery";

function AnimeDetails() {
  // const { loading, error, data } = useQuery(GET_ANIME_DETAILS, {
  //   // variables: { animeId },
  // });

  return (
    <Flex>
      {anime.characters?.nodes?.map((character) => (
        <Text>{character?.name?.full}</Text>
      ))}
    </Flex>
  );
}

export default AnimeDetails;
