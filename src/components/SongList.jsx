import SongCardItem from "./SongCardItem";

const SongList = () => {

    return(
        <>
            <section id="songList" className="mx-2 flex flex-col">
                <div className="flex flex-row">
                    <SongCardItem/>
                </div>
            </section>
        </>
    );
};

export default SongList;