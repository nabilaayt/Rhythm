const Sidebar = () => {
    return(
        <div className="w-3xs bg-secondary absolute h-screen p-26 transition-all duration-1000">
            <ul className="p-0">
                <li className="list-none "><a href="/">Home</a></li>
                <li className="list-none"><a href="/">Albums</a></li>
                <li className="list-none"><a href="/">Song</a></li>
                <li className="list-none"><a href="/">Artist</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;