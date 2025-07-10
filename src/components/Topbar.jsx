import SearchBar from "./SearchBar";

const TopBar = ({ accessToken, searchInput, setSearchInput, setAlbums, setTrack }) => {

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
                setTrack={setTrack}
            />
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