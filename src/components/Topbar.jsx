import { useState, useEffect } from "react";
import TrackList from "./TrackList";
import SearchBar from "./SearchBar";
import AlbumList from "./AlbumList";
import { getAccessToken } from "../services/api";

const TopBar = () => {
    const [accessToken, setAccessToken] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([]);

    // API Access Token
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const token = await getAccessToken();
                setAccessToken(token);
            } catch(error) {
                console.log(error.message);
            }
        };

        fetchToken();
    }, []);


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

            <SearchBar
                accessToken={accessToken}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setAlbums={setAlbums}
            />

            <div className="flex items-center gap-2">
                <img src="/img/icons/Notification.png" className="w-5 h-5 mr-3" />
                <div className="flex items-center gap-2">
                    <img src="/img/kucing.jpeg" className="rounded-full w-14" />
                    <p className="font-medium text-1xl text-font-color1">Natuna</p>
                </div>
            </div>

            <div className="">
                {albums.length > 0 && (
                    <AlbumList
                        albums={albums}
                    />
                )}

                {/* {tracks.length > 0 && (
                    <TrackList
                        tracks={tracks}
                    />
                )} */}
            </div>
        </section>
    );
};

export default TopBar;