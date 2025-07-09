import { useState, useEffect } from "react";
import SongCardItem from "./SongCardItem";
import { getAccessToken } from "../services/api";
// import * as api from "../services/api";

const SongList = () => {
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        // API Access Token
        const fetchToken = async () => {
            try {
                const token = await getAccessToken();
                setAccessToken(token);
                // console.log("Token:", token);
            } catch(error) {
                console.log(error.message);
            }
        };

        fetchToken();
    }, []);

    return(
        <section id="songList" className="mx-2 flex flex-col">
            <div className="flex flex-row">
                <SongCardItem/>
            </div>
        </section>
    );
};

export default SongList;