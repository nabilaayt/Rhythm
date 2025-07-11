import AlbumCardItem from "./AlbumCardItem";

const AlbumList = ({ albums }) => {
    return(
        <section id="albumList" className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums.map((album, index) => {
                console.log(album);
                    return (
                        <AlbumCardItem
                            key={index}
                            cover={album.images[0]?.url}
                            title={album.name}
                            artist={album.artists[0]?.name}
                        />
                    );
                })}
        </section>
    );
};

export default AlbumList;