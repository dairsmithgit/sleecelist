import { Box, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import Card from "./Card";
import { GET_MEDIA_TEST } from "../query/mediaQuery";
import type { Media } from "../generated/anilist-graphql";

function Feed() {
  const { loading, error, data } = useQuery(GET_MEDIA_TEST);
  console.log(data);

  return (
    <Flex justifyContent="space-evenly" flexWrap="wrap" h="100%">
      {loading ? (
        <Text>Anime is loading...</Text>
      ) : error ? (
        <Text>{error.message}</Text>
      ) : (
        data.Page.media.map((anime: Media) => {
          <Box>{anime.title?.romaji}</Box>;
        })
      )}
    </Flex>
  );
}

export default Feed;
