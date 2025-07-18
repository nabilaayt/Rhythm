import { useEffect } from "react";
import { searchArtist, albumsArtist, trackArtist, searchTrack } from "../services/api";
import { TbX } from "react-icons/tb";

const SearchBar = ({ accessToken, searchInput, setSearchInput, setAlbums, setTrack }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch();
        }, 500); 

        return () => clearTimeout(timer);
    }, [searchInput, accessToken]);

    const handleSearch = async () => {
        if (!searchInput.trim() || !accessToken) {
            setAlbums([]);
            setTrack([]);
            return;
        }

        try {
            console.log("Search for " + searchInput);
            
            const trackData = await searchTrack(searchInput, accessToken);
            const artistID = await searchArtist(searchInput, accessToken);
            console.log(trackData);
            console.log(artistID);

            if (artistID) {
                const albumsData = await albumsArtist(artistID, accessToken);
                const tracksData = await trackArtist(artistID, accessToken);
                const allTracks = [...(trackData || []), ...(tracksData || [])];
                setAlbums(albumsData);
                setTrack(allTracks);
            } else {
                const trackData = await searchTrack(searchInput, accessToken);
                setAlbums([]);
                setTrack(trackData);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    // Handle
    const handleClear = () => {
        setSearchInput("");
        setAlbums([]);
        setTrack([]);
    };

    return(
        <div id="searchBar" className="relative flex bg-custom-secondary p-4 px-5 w-full max-w-md rounded-2xl items-center">
            <img src="/img/icons/Search.png" className="w-5 h-5" alt="icon search" />
                <input 
                    type="input" 
                    placeholder="Type here to search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} // mengambil nilai yg diketik(e.target.value) kemudian menyimpannya ke dalam searchInput melalui setSearchInput
                    onKeyDown={e =>{   // event handler yg akan dipanggil saat tombol keyboard ditekan
                        if(e.key == "Enter"){
                            handleSearch();
                        }
                    }} 
                    className={`flex-1 h-full rounded-full outline-none border-none px-5 transition duration-300 ${searchInput ? "text-font-color1" : "text-font-color2"}`}
                />
                {searchInput && (
                    <button
                        onClick={handleClear}
                        className="absolute right-4 text-font-color2 hover:text-font-color1 cursor-pointer"
                    >
                        <TbX size={24} />
                    </button>
                )}
        </div>
    );
};

export default SearchBar;