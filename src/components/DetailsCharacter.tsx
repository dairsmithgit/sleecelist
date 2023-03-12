import { Flex, Text, Image, Box, Heading } from "@chakra-ui/react";
import { CharacterEdge } from "../generated/anilist-graphql";

interface animeCharacter {
  character: CharacterEdge | undefined;
}

function DetailsCharacter({ character }: animeCharacter) {
  return (
    <Flex border="1px" m="2">
      <Box p={1}>
        <Heading fontSize="xl">{character?.node?.name?.full}</Heading>
        <Text>{character?.node?.name?.native}</Text>
        <Flex>
          Age:
          {character?.node?.age == null ? (
            <Text>&nbsp;Unknown</Text>
          ) : (
            <Text>&nbsp;{character?.node?.age}</Text>
          )}
        </Flex>
        <Text>{character?.role}</Text>
      </Box>
      <Image
        src={character?.node?.image?.medium}
        alt="image of character from this anime."
        w="100px"
        h="150px"
      />
    </Flex>
  );
}

export default DetailsCharacter;
