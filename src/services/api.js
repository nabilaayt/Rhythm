const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export const getAccessToken = async () => {
    const authParameters = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    const response = await fetch("https://accounts.spotify.com/api/token", authParameters);
    const data = await response.json();
    return data.access_token;
};

export const searchArtist = async (searchInput, accessToken) => {
    const artistParameters = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    };

    const response = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist", artistParameters);
    const data = await response.json();
    return data.artists?.items[0].id; // mengembalikan array artist index ke-0 hasil search dari spotify
};

export const albumsArtist = async (artistId, accessToken) => {
    const albumsParameters = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    };
    
    const url = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`;
    const response = await fetch(url, albumsParameters);
    const data = await response.json();
    return data.items;
}