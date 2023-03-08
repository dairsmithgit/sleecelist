import { atom } from "jotai";
import { Media } from "../generated/anilist-graphql";

// jotai global store
const defaultAnimeValue = {
  id: 1,
  isFavourite: false,
  isFavouriteBlocked: false,
};

// atom for the anime the user was last viewing the details for
export const animeAtom = atom<Media>(defaultAnimeValue);

// atom for the list of animes that are returned from a search or front page
export const animesAtom = atom<Media[]>([]);

// atom for the list of animes to be exported as the sharable anime list
export const animesListAtom = atom<Media[]>([]);
