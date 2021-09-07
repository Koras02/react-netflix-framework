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
            <h2>{title}</h2>
            <div className="row__movies">
                {loaded && 
                  movies.map((movie) => {
                    // type 중에 영화 tpye이라면 Movie 컴포넌트로 
                    // type 중에 TV type 이라면 Tv 시리즈를 보여줌
                      return type == "movies" ? (
                          <Movie data={movie} key={movie.id}/>
                      ) : (
                          <Series data={movie} key={movie.id} />
                      )
                  })
                }
            </div>
        </div>
    )
}

export default Row;