import React, {useEffect,useState} from 'react'
import axios from "axios";
import { api_key } from '../../axios/urls';
import "./Trending.css";
import SingleMovie from '../SingleMovie/SingleMovie';
import PaginationComponent from '../Pagination/PaginationComponent';


const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

   function getTrending(page) {
       axios({
           method: "GET",
           url: `http://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&language=ko-KR&page=${page}`
       }).then(response => {
           setMovies(response.data.results ?? [])
       })
   }
   useEffect(() => {
       getTrending(page);
   }, [page])


    return (
        <>

            <div className="movies">
                {movies.length > 0 && movies.map((movie,index) => (
                    <React.Fragment key={movie.id}>
                      <SingleMovie key={movie.id} id={movie.id} media_type={movie.media_type} movie={movie} {...movie} />
                    </React.Fragment>
                ))}
            </div>
            <PaginationComponent setPage={setPage} />
        
    </>
    )
}

export default Trending
