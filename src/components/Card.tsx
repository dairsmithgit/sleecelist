import {
  Link,
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

import { Media } from "../generated/anilist-graphql";
import { animeAtom } from "../store/store";

interface Anime {
  anime: Media;
}

function Card({ anime }: Anime) {
  const [animeDetail, setAnimeDetail] = useAtom(animeAtom);

  const [descClick, setDescClick] = useState(false);

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
      flexDirection="column"
      border="1px"
      borderColor={useColorModeValue("gray.800", "gray.100")}
      borderRadius="md"
      m="2"
      w="xs"
      _hover={{ borderColor: "blue.400" }}
    >
      <Link
        onClick={() => setAnimeDetail(anime)}
        as={NavLink}
        to={"/details/" + anime.id}
        _hover={{ textDecoration: "none" }}
      >
        <Box p={1}>
          <Text noOfLines={1}>{anime.title?.romaji}</Text>
          <Text noOfLines={1}>{anime.title?.native}</Text>
        </Box>
      </Link>
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
      <Link
        onClick={() => setAnimeDetail(anime)}
        as={NavLink}
        to={"/details/" + anime.id}
        _hover={{ textDecoration: "none" }}
      >
        <Box w="100%" overflow="hidden">
          <Image
            src={anime.coverImage?.large}
            alt="cover image for anime"
            w="100%"
            maxHeight="450px"
          />
        </Box>
      </Link>
      <Flex p={1} justifyContent="space-between">
        <Box m={1}>
          {!descClick ? (
            <Text noOfLines={3}>
              {anime.description?.replaceAll(/(<([^>]+)>)/gi, "")}
            </Text>
          ) : (
            <Text noOfLines={3} overflow="scroll">
              {anime.description?.replaceAll(/(<([^>]+)>)/gi, "")}
            </Text>
          )}
        </Box>
        <IconButton
          size="sm"
          aria-label="Show anime description"
          icon={<FaAngleDown />}
          onClick={() => setDescClick(!descClick)}
        >
          Show Description
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default Card;
