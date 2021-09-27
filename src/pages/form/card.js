import React from 'react'
import { useHistory } from 'react-router-dom';
import { CardStyle } from '../css/Card';



export default function Card( video,id, poster_path, backdrop_path, isLarge ) {
    const history = useHistory();
   
 

    const handleOnClick = () => {
        if (video.media_type === 'movie') {
            history.push(`/title/${id}/movie`);
        } else {
            history.push(`/title/${id}/tv`);
        }
    }
 
    

    return (
        <CardStyle 
           isLarge
        //    onMouseOver={() => setShow(true)}
        //    onMouseLeave={() => setShow(false)}
           >
            <img
                onClick={handleOnClick}
                key={id}
                src={`http://image.tmdb.org/t/p/w300${
                    isLarge ? poster_path : backdrop_path
                }`}
                alt='포스터'
            ></img>
           </CardStyle>
    )

}