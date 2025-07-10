import { useState, useEffect } from "react";
import { albumsArtist, searchArtist, trackArtist } from "../services/api";
import TrackList from "../components/TrackList";
import AlbumList from "../components/AlbumList";

const Home = ({ accessToken }) => {
    const [defaultTrack, setDefaultTrack] = useState([]);
    const [recomendedAlbums, setRecomendedAlbums] = useState([]);

    // Hits Track Artis
    const handleHitsTrack = async () => {
        try {
            const artistID = await searchArtist("NIKI", accessToken); //hits track berdasarkan artis niki
            const tracks = await trackArtist(artistID, accessToken);
            setDefaultTrack(tracks);
        } catch (error) {
            console.log(error.message);
        }
    }; 

    // Rekomendasi Albums Artis
    const handleRecomendedAlbums = async () => {
        try {
            const artistNames = [
                "The Weeknd",
                "Maudy Ayunda",
                "Charlie Puth", 
                "Gracie Abrams"
            ];

            const allAlbums = await Promise.all(
                artistNames.map(async (name) => {
                    const artistID = await searchArtist(name, accessToken);
                    const albums = await albumsArtist(artistID, accessToken);
                    return {
                        artist: name,
                        albums: albums.slice(0,1),
                    };
                })
            );

            // Penggabungan semua albums dalam 1 Array (flatMap)
            const flatAlbums = allAlbums.flatMap(item => item.albums);
            setRecomendedAlbums(flatAlbums.slice(0,4));
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if(accessToken){
            handleHitsTrack();
            handleRecomendedAlbums();
        }
    }, [accessToken]);

    return(
        <section id="home" className="relative w-full min-h-screen px-5">
            <div className="relative w-full h-full overflow-hidden rounded-3xl mb-10 mt-5">
                <img src="/img/bg-niki.png" className="absolute w-full h-full z-0 top-0 left-0 object-cover" alt="background NIKI" />
                <div className="relative z-10 p-15 max-w-[600px]">
                    <h2 className="text-font-color1 text-2xl font-semibold mb-12">Trending New Hits</h2>
                    <h1 className="text-font-color1 text-6xl font-semibold mb-4">This is NIKI</h1>
                    <h2 className="text-font-color1 text-4xl font-semibold mb-4">NIKI</h2>
                    <p className="text-font-color1 text-sm">Take a chance with NIKI because even if she lets go,  you’ll still be in her heart.</p>
                </div>
            </div>
            <div className="mb-10">
                <h2 className="text-font-color1 text-2xl font-semibold mb-5">Today's biggest hits</h2>
                {defaultTrack.length > 0 ? (
                    <TrackList track={defaultTrack.slice(0, 5)} />
                ) : (
                    <p className="text-font-color2">Loading track...</p>
                )}
            </div>
            <div className="mb-10">
                <h2 className="text-font-color1 text-2xl font-semibold mb-5">You might also like</h2>
                {recomendedAlbums.length > 0 ? (
                    <AlbumList albums={recomendedAlbums} />
                ) : (
                    <p className="text-font-color2">Loading albums...</p>
                )}
            </div>
        </section>
    );
};

export default Home;