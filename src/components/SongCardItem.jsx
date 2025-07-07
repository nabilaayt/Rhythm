const SongCardItem = (props) => {
    const { cover, title, artist, album, duration } = props; //komponen dgn props agar bisa dipakai berulangkali

    return (
        <div className="flex items-center justify-between p-4 mb-4">
            <div className="flex items-center gap-4">
                <img src={cover} alt={title} className="w-20 h-15"/>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl text-font-color1 font-medium">{title}</h2>
                    <p className="text-1xl text-font-color1">{artist}</p>
                </div>
            </div>
            <p className=" w-1/3 text-1xl text-font-color1">{album}</p>
            <p className="text-1xl text-font-color1">{duration}</p>
        </div>
    );
};

export default SongCardItem;