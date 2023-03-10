import { IconButton } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { useAtom } from "jotai";

import { animesListAtom } from "../store/store";
import { Media } from "../generated/anilist-graphql";

interface Anime {
  anime: Media;
}

function AnimeAction({ anime }: Anime) {
  const [animeList, setAnimeList] = useAtom(animesListAtom);
  // TODO: do not allow the same anime to be added multiple times

  return (
    <IconButton
      variant="action"
      aria-label="Add anime to the anime list"
      icon={<FiPlus />}
      size="sm"
      onClick={() => setAnimeList([...animeList, anime])}
    >
      Add to list
    </IconButton>
  );
}

export default AnimeAction;
