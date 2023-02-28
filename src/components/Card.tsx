import { Link, Box, Flex, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Media } from "../generated/anilist-graphql";

interface Anime {
  anime: Media;
}

function Card({ anime }: Anime) {
  return (
    <Flex
      flexDirection="column"
      border="2px"
      borderColor="gray.100"
      borderRadius="md"
      m="2"
      w="20%"
      _hover={{ borderColor: "blue.400" }}
    >
      <Link as={NavLink} to="/details" _hover={{ textDecoration: "none" }}>
        <Box p={1}>
          <Text>{anime.title?.romaji}</Text>
          <Text>{anime.title?.native}</Text>
        </Box>
        <Flex justifyContent="space-between" p={1}>
          <Text>
            {anime.episodes === 1
              ? `${anime.episodes} Episode`
              : `${anime.episodes} Episodes`}
          </Text>
          <Text>{anime.averageScore}</Text>
        </Flex>
        <Box w="100%" overflow="hidden">
          <Image
            src={anime.coverImage?.large}
            alt="cover image for anime"
            w="100%"
          />
        </Box>
        <Box p={1}>
          <Text>
            {anime.description
              ?.replaceAll(/(<([^>]+)>)/gi, "")
              .substring(0, 400) + "..."}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
}

export default Card;
