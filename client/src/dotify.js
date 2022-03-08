// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

const AUTH_URL = "https://accounts.spotify.com/authorize"; // you can use other peoples APIs and use for authentication. hands over to spotify and the user comes back to our app
const redirectUri = "http://localhost:3000/";
const clientId = "a4684c5d6f694d58a30cfe1522a2097f";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
  return window.location.hash
}

export const loginUrl = `${AUTH_URL}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;