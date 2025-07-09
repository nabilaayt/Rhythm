import TrackCardItem from "./TrackCardItem";
// import * as api from "../services/api";

const TrackList = ({ albums }) => {

    return(
        <section id="trackList" className="mx-2 flex flex-col">
            <div className="flex flex-row">
                {Array.isArray(albums) && albums.map((album, index) => (
                    <TrackCardItem
                        key={index}
                        cover={album.images[0]?.url}
                        title={album.name}
                        artist={album.artist[0]?.name}
                        album={album.release_date}
                        duration={""}
                    />
                ))}
            </div>
        </section>
    );
};

export default TrackList;