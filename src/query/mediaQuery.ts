import { gql } from "@apollo/client";

export const GET_MEDIA_TEST = gql(/* GraphQL */ `
  query {
    Page(page: 1, perPage: 16) {
      media(
        season: FALL
        seasonYear: 2022
        sort: POPULARITY_DESC
        type: ANIME
        isAdult: false
      ) {
        title {
          romaji
          english
        }
        id
        description(asHtml: true)
        popularity
        coverImage {
          large
          medium
          color
        }
      }
    }
  }
`);
