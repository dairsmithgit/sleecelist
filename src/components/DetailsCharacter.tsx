import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { Character } from "../generated/anilist-graphql";

interface animeCharacter {
  character: Character | undefined;
}

function DetailsCharacter({ character }: animeCharacter) {
  return (
    <Box>
      <Text>{character?.name?.full}</Text>
      <Text>{character?.age}</Text>
      <Image
        src={character?.image?.medium}
        alt="image of character from this anime."
        w="100px"
        h="150px"
      />
    </Box>
  );
}

export default DetailsCharacter;
