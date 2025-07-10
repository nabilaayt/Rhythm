import { useState, useEffect } from "react";
import { albumsArtist, searchArtist } from "../services/api";
import AlbumList from "../components/AlbumList";

const Albums = ({ accessToken }) => {
    const [oldAlbums, setOldAlbums] = useState([]);

    // Album lama
    const handleThrowbackAlbums = async () => {
        try {
            const artistNames = [
                "Westlife",
                "Miley Cyrus",
                "Backstreet Boys", 
                "Britney Spears"
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
                setOldAlbums(flatAlbums.slice(0,4));
            } catch (error) {
                console.log(error.message);
            }
        };
    
    useEffect(() => {
        if(accessToken){
            handleThrowbackAlbums();
        }
    }, [accessToken]);


    return(
        <section id="albums" className="relative w-full min-h-screen px-5">
            <div className="mb-10">
                <h2 className="text-font-color1 text-2xl font-semibold mb-5">Genres</h2>
                    <div className="flex flex-wrap gap-3">
                        {["Classic", "Pop", "Indie", "Jazz", "Hip-Hop", "Techno", "House", "Country"].map((genre, index) => (
                            <button key={index} className="px-4 py-2 rounded-full bg-custom-secondary text-font-color1 border-2 border-neutral-700 cursor-pointer">
                                {genre}
                            </button>
                        ))}
                    </div>
            </div>
            <div className="mb-10">
                <h2 className="text-font-color1 text-2xl font-semibold mb-5">Throwback</h2>
                {oldAlbums.length > 0 ? (
                    <AlbumList albums={oldAlbums} />
                ) : (
                    <p className="text-font-color2">Loading albums...</p>
                )}
            </div>
        </section>
    );
};

export default Albums;