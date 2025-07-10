import TrackCardItem from "./TrackCardItem";
// import * as api from "../services/api";

const TrackList = ({ track }) => {

    const duration = (millis) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = Math.floor((millis % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    return(
        <section id="trackList" className="mx-2 flex flex-col">
            <div className="flex flex-col">
                {Array.isArray(track) && track.map((track, index) => (
                    <TrackCardItem
                        key={index}
                        cover={track.album?.images[0]?.url}
                        title={track.name}
                        artist={track.artists[0]?.name}
                        album={track.album?.name}
                        duration={duration(track.duration_ms)}
                    />
                ))}
            </div>
        </section>
    );
};

export default TrackList;