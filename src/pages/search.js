import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory} from 'react-router-dom';
import axios from '../utils/axios';
import { 
    searchVideosFail,
    searchVideosRequest,
    searchVideosSuccess,
} from '../reducers/slices/searchVideoSlice';
import { API_KEY } from '../utils/requests';
import { SearchContent, SearchHeader, SearchSection } from './css/SearchStyles';
import Card from './form/card';


export default function Search() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { videos } =  useSelector((state) => state.searchVideos);

    const titles = videos
    .filter((movie) => movie.media_type === 'movie')
    .map((video) => video.title);

    const handleClick = async(title) => {
        dispatch(searchVideosRequest());

        try {
            const {
                data: {results},
            } = await axios.get(
                `/search/multi?api_key=${API_KEY}&language=ko-KR&query=${title}&page=1&include_adult=false`
            );
            const movies = results.filter(
                (movie) => movie.media_type === 'movie'
            );
            dispatch(searchVideosSuccess(movies));
            history.push(`/search/q=${title}`);
        } catch (error) {
            dispatch(searchVideosFail(error.message));
        }
    }

    return (
        <>
        <SearchSection>
          <SearchHeader>
            <p> 검색 결과: </p>
            <ul>
             {titles.map((title, i) => {
                 return (
                     <li onClick={() => handleClick(title)} key={i}>
                         {title}
                     </li>
                 );
                })}
         </ul>
        </SearchHeader>
        <SearchContent>
         {videos 
             ?.filter((video) => video.backdrop_path)
             .map((video) => {
                 return <Card key={video.id} {...video} video={video} />;
                })}
          </SearchContent>
       </SearchSection>
         </>
    )
}