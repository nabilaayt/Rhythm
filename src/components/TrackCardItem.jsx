const TrackCardItem = ({ cover, title, artist, album, duration }) => { //komponen dgn props agar bisa dipakai berulangkali

    return (
        <div className="flex items-center justify-between gap-4 p-4 py-3 mb-2 rounded-md hover:bg-neutral-900 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            <div className="w-16 h-16 min-w-[64px]">
                <img src={cover} alt={title} className="w-full h-auto object-contain rounded-md"/>
            </div>
            <div className="flex flex-col flex-[2] min-w-0">
                <h2 className="text-base text-font-color1 font-semibold truncate">{title}</h2>
                <p className="text-sm text-font-color1 truncate">{artist}</p>
            </div>
            <div className="flex-2 text-sm text-font-color1 text-left hidden md:block">
                <p className="truncate">{album}</p>
            </div>
            <div className="w-20 text-sm text-font-color1 text-right flex-shrink-0">
                {duration}
            </div>
        </div>
    );
};

export default TrackCardItem;