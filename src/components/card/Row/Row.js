import React, {useEffect, useState } from "react";
import requests from "../../../utils/requests";
import Movie from "../Type/Movie";
import Series from "../Type/Series";
import "./Row.css"


function Row({ title, fetchUrl,localUrl, type }) {
    const {api, urls} = requests;
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function getPupularMovies() {
            const response = localUrl
            ? await api.get(fetchUrl)
            : await api.get(fetchUrl);
        setMovies(response.data.results);
        setLoaded(true);

        return response;
        }

        getPupularMovies();
    }, [fetchUrl])

    return (
        <div className="row">
            <h2 class="row__title">{title}</h2>
            <div className="row__movies">
     
            </div>
        </div>
    )
}

export default Row;