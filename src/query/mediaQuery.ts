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
          native
        }
        episodes
        averageScore
        id
        description(asHtml: false)
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
