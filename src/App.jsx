import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/Topbar";
import AlbumList from "./components/AlbumList";
import { getAccessToken } from "./services/api";

function App() {
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

  return (
    <div className="flex bg-custom-secondary">
      <Sidebar/>
        <div className="flex-1 flex flex-col bg-custom-primary">
          <TopBar
            accessToken={accessToken}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setAlbums={setAlbums}
          />
            <div className="px-10 mt-4">
              {searchInput.trim() !== "" && albums.length > 0 ? (
                <AlbumList albums={albums} /> // Tampilkan hasil pencarian
              ) : (

                // Jika tidak melakukan pencarian, tampilkan halaman Home atau Route lain
                <Routes>
                  <Route path="/" element={<Home />} />
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
