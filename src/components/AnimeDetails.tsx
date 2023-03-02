import { useQuery } from "@apollo/client";
import { Box, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GET_ANIME_DETAILS } from "../query/mediaQuery";

function AnimeDetails() {
  let animeId = useParams();

  console.log(animeId);

  const { loading, error, data } = useQuery(GET_ANIME_DETAILS, {
    variables: { animeId },
  });

  if (loading) return <>nothing</>;

  if (error) return <>`Error! ${error.message}`</>;

  return <Flex>{data.Media.title}</Flex>;
}

export default AnimeDetails;
