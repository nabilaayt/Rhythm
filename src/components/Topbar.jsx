import { useState, useEffect } from "react";
import SongList from "../components/SongList";
import { getAccessToken, searchArtist, albumsArtist } from "../services/api";

const TopBar = () => {
    const [accessToken, setAccessToken] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    // API Access Token
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const token = await getAccessToken();
                setAccessToken(token);
                // console.log(token);
            } catch(error) {
                console.log(error.message);
            }
        };

        fetchToken();
    }, []);

    const search = async () => {
        if (!searchInput.trim() || !accessToken) {
            setSearchResult([]);
            return;
        }

        try {
            console.log("Search for " + searchInput);
            const artistID = await searchArtist(searchInput, accessToken);
            console.log(artistID);
            const albums = await albumsArtist(artistID, accessToken);
            console.log(albums);
            // setSearchResult(artistData ? [artistData] : []); // optional kalau mau ditampilkan
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        const timer = setTimeout(search, 500); 
        return () => clearTimeout(timer);
    }, [searchInput, accessToken]);


    return(
        <section id="topBar" className="flex items-center justify-between px-20 py-6">
            {/* <div className="flex items-center gap-5">
                <button className="rounded-full flex items-center justify-center w-14 h-14 bg-custom-secondary">
                    <img src="/img/icons/ArrowLeftDefault.png" className="w-5 h-5" />
                </button>
                <button className="rounded-full flex items-center justify-center w-14 h-14 bg-custom-secondary">
                    <img src="/img/icons/ArrowRightActive.png" className="w-5 h-5" />
                </button>
            </div> */}

            <div className="flex bg-custom-secondary p-4 px-5 w-full max-w-md rounded-2xl items-center">
                <img src="/img/icons/Search.png" className="w-5 h-5" alt="icon search" />
                <input 
                    type="input" 
                    placeholder="Type here to search"
                    onKeyDown={e =>{   // event handler yg akan dipanggil saat tombol keyboard ditekan
                        if(e.key == "Enter"){
                            search();
                        }
                    }} 
                    onChange={e => setSearchInput(e.target.value)} // mengambil nilai yg diketik(e.target.value) kemudian menyimpannya ke dalam searchInput melalui setSearchInput
                    className="text-font-color2 flex-1 h-full rounded-full outline-none border-none px-5" 
                />
            </div>

            <div className="flex items-center gap-2">
                <img src="/img/icons/Notification.png" className="w-5 h-5 mr-3" />
                <div className="flex items-center gap-2">
                    <img src="/img/kucing.jpeg" className="rounded-full w-14" />
                    <p className="font-medium text-1xl text-font-color1">Natuna</p>
                </div>
            </div>
        </section>
    );
};

export default TopBar;