import SpotifyWebApi from 'spotify-web-api-node';

export const spoitfyApi = new SpotifyWebApi({
    clientId: "a0f873411e774fe5af38a22b7c4b52cb",
    clientSecret: "69fa64bce12749f99575759668715741",
    redirectUri: "https://bot.lavy.ws/callback"
});
