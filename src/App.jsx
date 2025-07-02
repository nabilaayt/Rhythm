import { useState } from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/Topbar";


function App() {

  return (
    <>
      <div className="flex">
          <Sidebar/>
          <div className="flex-1 flex flex-col">
            <TopBar/>
            <Home/>
          </div>
      </div>
    </>
  )
}

export default App;
