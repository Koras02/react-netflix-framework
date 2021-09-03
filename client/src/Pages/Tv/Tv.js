import React, {useEffect, useState} from 'react'
import axios from "axios"; 
import { api_key } from '../../axios/urls';
import SingleMovie from "../SingleMovie/SingleMovie"
 
import PaginationComponent from "../Pagination/PaginationComponent";

const Tv = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(10);

    function getMovies(page) {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=ko&region=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        }).then(response => {
            setMovies(response.data.results ?? [])
            setNumPages(response.data.total_pages)
        })
    }

    useEffect(() => {
        getMovies(page);
    }, [page])
     
    return (
        <>
           <span className="tv_container">
              TV 프로그램
           </span>
           <div className="movies">
               {movies.length > 0 && movies.map((movie, index) => (
                   <SingleMovie key={movie.id} media_type={'tv'} movie={movie} {...movie} /
                   >
               ))}
           </div>
           {numPages > 1 && (
               <PaginationComponent setPage={setPage} numPages={numPages}/>
           )}
        </>
    )
}

export default Tv
