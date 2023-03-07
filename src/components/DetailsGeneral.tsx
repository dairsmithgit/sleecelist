import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Media } from "../generated/anilist-graphql";

interface Anime {
  anime: Media | null;
}

function DetailsGeneral({ anime }: Anime) {
  return (
    <Flex>
      <Image src={anime?.coverImage?.large} alt="cover image for anime" />
      <Box m={2} w="50%">
        <Text mb={2}>{anime?.description}</Text>
        <Text mb={2}>{anime?.episodes} Episodes</Text>
        <Flex mb={2}>
          <Text>Studio:&nbsp;</Text>
          {anime?.studios?.nodes?.map((studio) => (
            <Text>{studio?.name},&nbsp;</Text>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default DetailsGeneral;
