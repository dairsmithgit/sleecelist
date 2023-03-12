import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import Card from "./Card";
import { GET_MEDIA_TEST } from "../query/mediaQuery";
import type { Media } from "../generated/anilist-graphql";
import { useAtom } from "jotai";
import { animeAtom, animesAtom } from "../store/store";
import { useEffect } from "react";

function Feed() {
  const [animes, setAnimes] = useAtom(animesAtom);
  const { loading, error, data } = useQuery(GET_MEDIA_TEST);
  if (data) {
    setAnimes(data.Page.media);
  }

  return (
    <Flex flexDirection="column" p={2}>
      <Heading pb={1}>Popular</Heading>
      {loading ? (
        <Text>Anime is loading...</Text>
      ) : error ? (
        <Text>{error.message}</Text>
      ) : (
        <Flex justifyContent="space-evenly" flexWrap="wrap" h="100%">
          {data.Page.media.map((anime: Media) => (
            <Card key={anime.id} anime={anime} />
          ))}
        </Flex>
      )}
    </Flex>
  );
}

export default Feed;
