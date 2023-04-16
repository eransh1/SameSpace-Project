import { gql } from "@apollo/client";

export const LOAD_PLAYLIST=gql`
query {
    getPlaylists {
      title
      id
    }
  }
`;

export const LOAD_SONGS=gql`
query ExampleQuery($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      _id
      artist
      duration
      photo
      title
      url
    }
  }
`;

export const SEARCH_SONGS=gql`
query ExampleQuery($search: String, $playlistId: Int!) {
  getSongs(search: $search, playlistId: $playlistId) {
    _id
    artist
    duration
    photo
    title
    url
  }
}`