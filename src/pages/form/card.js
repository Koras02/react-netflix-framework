import React from 'react'
import { useHistory } from 'react-router-dom';
import { CardStyle } from '../css/Card';



export default function Card( video,id, poster_path, backdrop_path, isLarge ) {
    const history = useHistory();
    // const dispatch = useDisptach();

    // const { loading: loadingAdd } = useSelector((state) => state.myList);

    // const [ show, setShow ] = useState(false);

    // const isAdded = myList && myList.find((item) => item.id === video?.id);


    const handleOnClick = () => {
        if (video.media_type === 'movie') {
            history.push(`/title/${id}/movie`);
        } else {
            history.push(`/title/${id}/tv`);
        }
    }

    // const handleRemoveOnClick = async() => {
    //     // dispatch(removeFromMyListReque)
    // }

    

    return (
        <CardStyle 
           isLarget
        //    onMouseOver={() => setShow(true)}
        //    onMouseLeave={() => setShow(false)}
           >
               <img 
                  onClick={handleOnClick}
                  key={id}
                  src={`http://image.tmdb.org/t/p/w300${
                      isLarge ? poster_path : backdrop_path
                  }`}
                  alt="poster"
                >
            
                </img>
           </CardStyle>
    )

}