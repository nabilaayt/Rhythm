import AlbumCardItem from "./AlbumCardItem";
// import * as api from "../services/api";

const AlbumList = ({ albums }) => {

    return(
        <section id="trackList" className="mx-2 flex flex-col">
            <div className="flex flex-row">
                {Array.isArray(albums) && albums.map((album, index) => (
                    <AlbumCardItem
                        key={index}
                        cover={album.images[0]?.url}
                        title={album.name}
                        artist={album.artist[0]?.name}
                        realeseDate={album.release_date}
                    />
                ))}
            </div>
        </section>
    );
};

export default AlbumList;