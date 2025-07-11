import { useState, useEffect } from "react";
import { trackArtist, searchArtist, searchTrack } from "../services/api";
import TrackList from "../components/TrackList";


const Song = ({ accessToken }) => {
    const [topTrack, setTopTrack] = useState([]);
    const [topCharts, setTopCharts] = useState([]);

    // Weekly Top Track
    const handleTopTrack = async () => {
        try {
            const artistNames = [
                "Shawn Mendes",
                "Ed Sheeran",
                "Sabrina Carpenter", 
                "Ariana Grande"
            ];

            const allTracks = await Promise.all(
                artistNames.map(async (name) => {
                    const artistID = await searchArtist(name, accessToken);
                    const tracks = await trackArtist(artistID, accessToken);
                    return {
                        artist: name,
                        track: tracks.slice(0,1),
                    };
                })
            );

            // Penggabungan semua albums dalam 1 Array (flatMap)
            const flatTracks = allTracks.flatMap(item => item.track);
            setTopTrack(flatTracks.slice(0,4));
        } catch (error) {
            console.log(error.message);
        }
    };

    // Sheila on 7 Radio
    const handleSheila = async () => {
        try {
            const sheilaRadio = [
                { title: "Seberapa Pantas", artist: "Sheila On 7" },
                { title: "Betapa", artist: "Sheila On 7" },
                { title: "Lapang Dada", artist: "Sheila On 7" },
                { title: "Melompat Lebih Tinggi", artist: "Sheila On 7" },
                { title: "Sahabat Sejati", artist: "Sheila On 7" },
            ];

            const allTracks = await Promise.all(
                sheilaRadio.map(async ({ title, artist }) => {
                    const query = `${title} ${artist}`;
                    console.log(query);
                    const searchResults  = await searchTrack(query, accessToken);
                    console.log(query, searchResults );
                    // return track;
                    return searchResults && searchResults.length > 0 ? searchResults[0] : null;
                })
            );         
            console.log(allTracks);  

            const validTracks = allTracks.filter(Boolean);
            setTopCharts(validTracks);
        } catch (error) {
            console.log(error.message);
        }
    };


    useEffect(() => {
        if(accessToken){
            handleTopTrack();
            handleSheila();
        }
    }, [accessToken]);


    return(
        <section id="song" className="relative w-full min-h-screen px-5">
            <div className="mb-10">
                <h2 className="text-font-color1 text-2xl font-semibold mb-5">Weekly Top Track</h2>
                {topTrack.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topTrack.slice(0, 6).map((track, index) => (
                        <div
                        key={index}
                        className="w-62 p-4 mb-2 rounded-lg hover:bg-neutral-900 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
                        >
                        <img
                            src={track.album?.images?.[0]?.url}
                            alt={track.name}
                            className="w-full h-auto object-contain rounded-md mb-3"
                        />
                        <h2 className="text-font-color1 font-semibold text-base truncate">{track.name}</h2>
                        <p className="text-font-color1 text-sm truncate">{track.artists?.[0]?.name}</p>
                        </div>
                    ))}
                    </div>
                ) : (
                    <p className="text-font-color2">Loading tracks...</p>
                )}
            </div>
            <div className="mb-10">
                <h2 className="text-font-color1 text-2xl font-semibold mb-5">Sheila On 7 Radio</h2>
                {topCharts.length > 0 ? (
                    <TrackList track={topCharts} />
                ) : (
                    <p className="text-font-color2">Loading tracks...</p>
                )}
            </div>
        </section>
    );
};

export default Song;