import {
  Link,
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { Media } from "../generated/anilist-graphql";
import { animeAtom } from "../store/store";

interface Anime {
  anime: Media;
}

function Card({ anime }: Anime) {
  const [animeDetail, setAnimeDetail] = useAtom(animeAtom);

  let animeScore = anime.averageScore!;
  let scoreColor = "purple.500";
  if (animeScore < 90) {
    scoreColor = "green.600";
  }
  if (animeScore <= 85) {
    scoreColor = "green.200";
  }
  if (animeScore <= 75) {
    scoreColor = "yellow.300";
  }
  if (animeScore <= 60) {
    scoreColor = "orange.400";
  }
  if (animeScore <= 50) {
    scoreColor = "red.500";
  }

  return (
    <Flex
      onClick={() => setAnimeDetail(anime)}
      flexDirection="column"
      border="1px"
      borderColor={useColorModeValue("gray.800", "gray.100")}
      borderRadius="md"
      m="2"
      w="xs"
      _hover={{ borderColor: "blue.400" }}
    >
      <Link
        as={NavLink}
        to={"/details/" + anime.id}
        _hover={{ textDecoration: "none" }}
      >
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
          <Text backgroundColor={scoreColor} paddingX={1} fontWeight="bold">
            {anime.averageScore}
          </Text>
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
              .substring(0, 100) + "..."}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
}

export default Card;
