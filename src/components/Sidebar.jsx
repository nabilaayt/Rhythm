import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

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
                    <NavLink to={"/"} className= {({ isActive }) => `flex items-center h-full rounded-md transition-all duration-200 ${isActive ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}`}>
                        {({ isActive }) => (
                            <div className="relative flex items-center w-full gap-3">
                                <img src={isActive ? "img/icons/HomeActive.png" : "img/icons/HomeDefault.png"} className="w-5 h-5" alt="home"/>
                                <span className={`${!open && "hidden"}`}>Home</span>
                                {isActive && open && (
                                    <div className={`absolute top-0 bottom-0 right-57 w-1 rounded-e-lg bg-third transition-all duration-200 ${!open && "left-0"}`}></div>
                                )}
                            </div>
                        )}
                    </NavLink>
                </li>
                <li className="list-none block h-10 rounded-md mb-2 relative">
                    <NavLink to={"/albums"} className= {({ isActive }) => `flex items-center h-full rounded-md transition-all duration-200 ${isActive ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}`}>
                        {({ isActive }) => (
                            <div className="relative flex items-center w-full gap-3">
                                <img src={isActive ? "img/icons/AlbumsActive.png" : "img/icons/AlbumsDefault.png"} className="w-5 h-5" alt="albums"/>
                                <span className={`${!open && "hidden"}`}>Albums</span>
                                {isActive && open && (
                                    <div className={`absolute top-0 bottom-0 right-57 w-1 rounded-e-lg bg-third transition-all duration-200 ${!open && "left-0"}`}></div>
                                )}
                            </div>
                        )}
                    </NavLink>
                </li>
                <li className="list-none block h-10 rounded-md mb-2 relative">
                    <NavLink to={"/songs"} className= {({ isActive }) => `flex items-center h-full rounded-md transition-all duration-200 ${isActive ? "text-primary font-semibold" : "text-font-color2 hover:text-font-color1"}`}>
                        {({ isActive }) => (
                            <div className="relative flex items-center w-full gap-3">
                                <img src={isActive ? "img/icons/SongActive.png" : "img/icons/SongDefault.png"} className="w-5 h-5" alt="song"/>
                                <span className={`${!open && "hidden"}`}>Song</span>
                                {isActive && open && (
                                    <div className={`absolute top-0 bottom-0 right-57 w-1 rounded-e-lg bg-third transition-all duration-200 ${!open && "left-0"}`}></div>
                                )}
                            </div>
                        )}
                    </NavLink>
                </li>
            </ul>
        </section>
    );
};

export default Sidebar;