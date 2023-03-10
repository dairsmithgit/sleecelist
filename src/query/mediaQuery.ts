import { gql } from "@apollo/client";

export const GET_MEDIA_TEST = gql(/* GraphQL */ `
  query {
    Page(page: 1, perPage: 20) {
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
        startDate {
          year
          month
          day
        }
        id
        description(asHtml: false)
        popularity
        bannerImage
        coverImage {
          large
          medium
          color
        }
        studios {
          nodes {
            name
            siteUrl
          }
        }
        characters {
          edges {
            role
            node {
              id
              name {
                first
                middle
                last
                full
                native
                userPreferred
              }
              image {
                large
                medium
              }
              age
            }
          }
        }
      }
    }
  }
`);

export const GET_ANIME_DETAILS = gql(/* GraphQL */ `
  query GetAnimeDetails($animeId: Int!) {
    Media(id: $animeId) {
      title {
        romaji
        native
      }
      episodes
      averageScore
      description(asHtml: false)
      popularity
      coverImage {
        large
        medium
        color
      }
      characters {
        nodes {
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          age
          image {
            large
            medium
          }
        }
      }
      id
      studios {
        nodes {
          name
        }
      }
    }
  }
`);
