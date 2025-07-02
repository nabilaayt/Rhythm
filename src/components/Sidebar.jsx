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

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("Home");

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    }

    return(
        <div className="w-2xs bg-custom-secondary absolute h-screen p-14 pt-15 transition-all duration-1000">
          <header className="h-20 font-heading text-3xl flex justify-center pe-2 text-font-color1">Rhythm</header>
          <h1 className="text-1xl h-14 text-font-color1 ">Menu</h1>
            <ul className="p-0">
                <li className="list-none block h-8 rounded-md mb-2 relative">
                    <a 
                        href="/"
                        onClick={(e) =>{
                            e.preventDefault();
                            handleItemClick("Home");
                        }}
                        className={`flex items-center h-full rounded-md transition-all duration-200
                            ${activeItem === "Home" ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}
                        `}
                        >
                            <img src={activeItem === "Home" ? homeActive : homeDefault } className="w-5 h-5 mr-3"/>
                            Home
                            {activeItem === "Home" && (
                                <div className="absolute left-56 top-0 bottom-0 w-1.5 bg-amber-950 rounded-l-sm"></div>
                            )}
                    </a>
                </li>
                    <li className="list-none block h-8 rounded-md mb-2 relative">
                    <a 
                        href="/"
                        onClick={(e) =>{
                            e.preventDefault();
                            handleItemClick("Albums");
                        }}
                        className={`flex items-center h-full rounded-md transition-all duration-200
                            ${activeItem === "Albums" ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}
                            `}
                        >
                            <img src={activeItem === "Albums" ? albumsActive : albumsDefault } className="w-5 h-5 mr-3"/>
                            Albums
                            {activeItem === "Albums" && (
                                <div className="absolute left-56 top-0 bottom-0 w-1.5 bg-amber-950 rounded-l-sm"></div>
                            )}
                    </a>
                </li>
                <li className="list-none block h-8 rounded-md mb-2 relative">
                    <a 
                        href="/"
                        onClick={(e) =>{
                            e.preventDefault();
                            handleItemClick("Song");
                        }}
                        className={`flex items-center h-full rounded-md transition-all duration-200
                            ${activeItem === "Song" ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}
                            `}
                        >
                            <img src={activeItem === "Song" ? songActive : songDefault } className="w-5 h-5 mr-3"/>
                            Song
                            {activeItem === "Song" && (
                                <div className="absolute left-56 top-0 bottom-0 w-1.5 bg-amber-950 rounded-l-sm"></div>
                            )}
                    </a>
                </li>
                    <li className="list-none block h-8 rounded-md mb-2 relative">
                    <a 
                        href="/"
                        onClick={(e) =>{
                            e.preventDefault();
                            handleItemClick("Artist");
                        }}
                        className={`flex items-center h-full rounded-md transition-all duration-200
                            ${activeItem === "Artist" ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}
                            `}
                        >
                            <img src={activeItem === "Artist" ? artistActive : artistDefault } className="w-5 h-5 mr-3"/>
                            Artist
                            {activeItem === "Artist" && (
                                <div className="absolute left-56 top-0 bottom-0 w-1.5 bg-amber-950 rounded-l-sm"></div>
                            )}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;