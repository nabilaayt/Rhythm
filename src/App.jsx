import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/Topbar";
import AlbumList from "./components/AlbumList";
import TrackList from "./components/TrackList";
import { getAccessToken } from "./services/api";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [track, setTrack] = useState([]);
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

  useEffect(() => {
    console.log(track);
  }, [track]);

  return (
    <div className="flex bg-custom-secondary">
      <Sidebar/>
        <div className="flex-1 flex flex-col bg-custom-primary">
          <TopBar
            accessToken={accessToken}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setAlbums={setAlbums}
            setTrack={setTrack}
          />
            <div className="px-16 mt-4">
              {searchInput.trim() !== "" && (albums.length > 0 || track.length > 0) ? (
                <>
                  <TrackList track={track} />
                  <AlbumList albums={albums} />
                </>
              ) : (

                // Jika tidak melakukan pencarian, tampilkan halaman Home atau Route lain
                <Routes>
                  <Route path="/" element={<Home accessToken={accessToken}/>} />
                  {/* <Route path="/albums" element={<Albums />} />
                  <Route path="/songs" element={<Songs />} />
                  <Route path="/artists" element={<Artists />} /> */}
                </Routes>
              )}
            </div>
        </div>
    </div>
  )
}

export default App;
