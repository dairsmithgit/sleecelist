import { atom } from "jotai";
import { Media } from "../generated/anilist-graphql";

// jotai global store

export const animeAtom = atom<Media | null>(null);
export const animesAtom = atom<Media[]>([]);
export const animesListAtom = atom<Media[]>([]);
