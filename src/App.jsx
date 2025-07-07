import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/Topbar";


function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex">
      <Sidebar/>
        <div className="flex-1 flex flex-col bg-custom-primary">
          <TopBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />

          {/* ROUTES */}
          <Routes>
            <Route path="/" element={<Home searchInput={searchInput}/>} />
            {/* <Route path="/albums" element={<Albums/>} />
            <Route path="/songs" element={<Songs/>} />
            <Route path="/artists" element={<Artists/>} /> */}
          </Routes>
        </div>
    </div>
  )
}

export default App;
