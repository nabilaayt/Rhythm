import { useState } from "react";

// ICONS
import homeActive from "../assets/icons/homeActive.png";
import homeDefault from "../assets/icons/HomeDefault.png";
import albumsActive from "../assets/icons/AlbumsActive.png";
import albumsDefault from "../assets/icons/AlbumsDefault.png";
import songActive from "../assets/icons/SongActive.png";
import songDefault from "../assets/icons/SongDefault.png";
import artistActive from "../assets/icons/ArtistActive.png";
import artistDefault from "../assets/icons/ArtistDefault.png";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("Home");
    const [open, setOpen] = useState(true);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    }

    return(
        <section id="sideBar" className={`${open ? "w-72 p-5" : "w-36 p-10"} w-2xs bg-custom-secondary h-screen relative ease-in-out p-14 pt-10 transition-all duration-300`}>
          
          {/* Toggle button */}
          <div className={`absolute cursor-pointer -right-5 top-9 w-10 h-10 p-0.5 text-font-color1 text-2xl flex items-center justify-center transition-all ease-in-out duration-300 ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}>
            {open ? <TbLayoutSidebarLeftExpand/> : <TbLayoutSidebarLeftCollapse/>}    
          </div>

          <h1 className={`h-20 font-heading origin-left text-3xl flex justify-center pe-2 text-font-color1 ease-in-out duration-300 ${!open && "scale-0"}`}>Rhythm</h1>
          <h1 className={`text-1xl h-14 text-font-color1 ease-in-out duration-300`}>Menu</h1>
            <ul className="p-0">
                <li className="list-none block h-10 rounded-md mb-2 relative">
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            handleItemClick("Home");}}
                        className={`flex items-center h-full rounded-md transition-all duration-200
                            ${activeItem === "Home" ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}`}
                    >
                        <div className="relative flex items-center w-full gap-3">
                            <img src={activeItem === "Home" ? homeActive : homeDefault} className="w-5 h-5" alt="home"/>
                            <span className={`${!open && "hidden"}`}>Home</span>
                            {activeItem === "Home" && open && (
                                <div className={`absolute top-0 bottom-0 right-57 w-1 rounded-e-lg bg-third transition-all duration-200 ${!open && "left-0"}`}></div>
                            )}
                        </div>
                    </a>
                </li>

                <li className="list-none block h-10 rounded-md mb-2 relative">
                    <a 
                        href="/"
                        onClick={(e) =>{
                            e.preventDefault();
                            handleItemClick("Albums");}}
                        className={`flex items-center h-full rounded-md transition-all duration-200
                            ${open ? "justify-start" : "justify-center"}
                            ${activeItem === "Albums" ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}`}
                        >
                        <div className="relative flex items-center w-full gap-3">
                            <img src={activeItem === "Albums" ? albumsActive : albumsDefault} className="w-5 h-5" alt="albums"/>
                            <span className={`${!open && "hidden"}`}>Albums</span>
                            {activeItem === "Albums" && open && (
                                <div className={`absolute top-0 bottom-0 right-57 w-1 rounded-e-lg bg-third transition-all duration-200 ${!open && "left-0"}`}></div>
                            )}
                        </div>
                    </a>
                </li>
                <li className="list-none block h-10 rounded-md mb-2 relative">
                    <a 
                        href="/"
                        onClick={(e) =>{
                            e.preventDefault();
                            handleItemClick("Song");
                        }}
                        className={`flex items-center h-full rounded-md transition-all duration-200
                            ${open ? "justify-start" : "justify-center"}
                            ${activeItem === "Song" ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}
                            `}
                        >
                        <div className="relative flex items-center w-full gap-3">
                            <img src={activeItem === "Song" ? songActive : songDefault} className="w-5 h-5" alt="song"/>
                            <span className={`${!open && "hidden"}`}>Song</span>
                            {activeItem === "Song" && open && (
                                <div className={`absolute top-0 bottom-0 right-57 w-1 rounded-e-lg bg-third transition-all duration-200 ${!open && "left-0"}`}></div>
                            )}
                        </div>
                    </a>
                </li>
                    <li className="list-none block h-10 rounded-md mb-2 relative">
                    <a 
                        href="/"
                        onClick={(e) =>{
                            e.preventDefault();
                            handleItemClick("Artist");
                        }}
                        className={`flex items-center h-full rounded-md transition-all duration-200
                            ${open ? "justify-start" : "justify-center"}
                            ${activeItem === "Artist" ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}
                            `}
                        >
                        <div className="relative flex items-center w-full gap-3">
                            <img src={activeItem === "Artist" ? artistActive : artistDefault} className="w-5 h-5" alt="artist"/>
                            <span className={`${!open && "hidden"}`}>Artist</span>
                            {activeItem === "Artist" && open && (
                                <div className={`absolute top-0 bottom-0 right-57 w-1 rounded-e-lg bg-third transition-all duration-200 ${!open && "left-0"}`}></div>
                            )}
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Sidebar;