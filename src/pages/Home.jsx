import TrackList from "../components/TrackList";

const Home = () => {

    return(
        <section id="home" className="relative w-full h-[400px] px-10">
            <div className="relative w-full h-full overflow-hidden rounded-3xl mb-10 mt-5">
                <img src="/img/bg-niki.png" className="absolute w-full h-full z-0 top-0 left-0 object-cover" alt="background NIKI" />
                <div className="relative z-10 p-15 max-w-[600px]">
                    <h2 className="text-font-color1 text-2xl font-semibold mb-12">Trending New Hits</h2>
                    <h1 className="text-font-color1 text-6xl font-semibold mb-4">This is NIKI</h1>
                    <h2 className="text-font-color1 text-4xl font-semibold mb-4">NIKI</h2>
                    <p className="text-font-color1 text-sm">Take a chance with NIKI because even if she lets go,  you’ll still be in her heart.</p>
                </div>
            </div>

            <div>
                <h2 className="text-font-color1 text-2xl font-semibold mb-5">Today’s biggest hits</h2>
                <TrackList/>
            </div>

            <div>
                <h2 className="text-font-color1 text-2xl font-semibold mb-5">You might also like</h2>
            </div>
        </section>
    );
};

export default Home;