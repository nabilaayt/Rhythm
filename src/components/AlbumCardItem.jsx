const AlbumCardItem = ({ cover, title, artist }) => {

    return (
        <div className="flex flex-col p-4 mb-2 rounded-lg hover:bg-neutral-900 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            <img src={cover} alt={title} className="w-full h-auto object-contain rounded-md mb-3"/>
            <div className="flex flex-col gap-2">
                <h2 className="text-1xl text-font-color1 font-semibold break-words">{title}</h2>
                <p className="text-md text-font-color1">{artist}</p>
            </div>
        </div>
    );
};

export default AlbumCardItem;