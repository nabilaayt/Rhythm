import { useEffect } from "react";
import { searchArtist, albumsArtist } from "../services/api";

const SearchBar = ({ accessToken, searchInput, setSearchInput, setAlbums }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch();
        }, 500); 

        return () => clearTimeout(timer);
    }, [searchInput, accessToken]);

    const handleSearch = async () => {
        if (!searchInput.trim() || !accessToken) {
            setAlbums([]);
            return;
        }

        try {
            console.log("Search for " + searchInput);
            const artistID = await searchArtist(searchInput, accessToken);
            console.log(artistID);
            const albums = await albumsArtist(artistID, accessToken);
            console.log(albums);
            setAlbums(albums);
            // setSearchResult(artistData ? [artistData] : []); // optional kalau mau ditampilkan
        } catch (error) {
            console.log(error.message);
        }
    };

    return(
        <div id="searchBar" className="flex bg-custom-secondary p-4 px-5 w-full max-w-md rounded-2xl items-center">
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
                    className="text-font-color2 flex-1 h-full rounded-full outline-none border-none px-5" 
                />
        </div>
    );
}

export default SearchBar;