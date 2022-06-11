export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "7f4725f7c0ba40788a50aaee1fcefc9e"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playeback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const loginUrl = `${authEndpoint}?client_id={clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;