import { img_300, unavailable } from "../../axios/config/config";
import Badge from "@material-ui/core/Badge";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ContentFocus from "../FocusModal/ContentFocus";
import "./SingleMovie.css"

const SingleMovie = ({movie, id, title, poster_path, media_type, first_air_date, release_date, original_title, name, original_name, backdrop_path, vote_average }) => { 
  const {
    add_Movie_to_watchlist,
    remove_Movie_from_watchlist,
    add_Movie_to_watched,
    remove_from_watched,
    watchlist,
    watched
} = useContext(GlobalContext)
  
let storedMovie = watchlist?.find(o => o.id === movie.id) ? true : false ?? false;
let watchedMovie = watched?.find(o => o.id === movie.id) ? true : false ?? false;

return (
    <>
       <div className="handler">
            
            <ContentFocus media_type={media_type} id={id}>
           {!watchedMovie ?
            
               <i className={'fa-fw far fa-eye single_movie__icon watch_page__icon'} 
                  onClick={() => (add_Movie_to_watched(movie))} />
               : <i className="fa fa-eye-slash single_movie__icon" aria-hidden="true"
                   onClick={()=> (remove_Movie_from_watchlist(movie.id))} />
            } 

            {!watchedMovie ?
                    !storedMovie
                        ? <i className="fa fa-bookmark-o single_movie__icon" aria-hidden="true"
                             onClick={() => (add_Movie_to_watchlist(movie))} />
                        : <i className={"fa fa-bookmark single_movie__icon"}
                             onClick={() => (remove_from_watched(id))} />
                    : <></>}
               <Badge className={'beadg__handler'} badgeContent={vote_average} color={
                 (vote_average >= 7 ? 'primary' : (vote_average >= 5 && vote_average < 7) ? 'secondary' : 'error')
               }/>
               <div className="poster__container">
                        <img className={'poster'} src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                             alt={`${title ? title : (original_title ? original_title : (name ? name : original_name))}`}/>
                    </div>
               <div className="title">
                 <b>{title ? title : (original_title ? original_title : (name ? name : original_name))}</b>
               </div>
               <div className={'subtitle'}>
                 <span>
                     {media_type === "tv" ? "TV Series" : "Movie"}
                   </span>
                   <span>
                       {first_air_date ? first_air_date : release_date}
                    </span>
               </div>
            </ContentFocus>
              
       </div>
    </>
)
}

export default SingleMovie;