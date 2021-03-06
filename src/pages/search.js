import React,{useState, useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import axios from '../utils/axios';
import { 
    searchVideosFail,
    searchVideosRequest,
    searchVideosSuccess,
} from '../reducers/slices/searchVideoSlice';
import { API_KEY } from '../utils/requests';
import { AiOutlineSearch } from 'react-icons/ai';

import { SearchContent, SearchHeader, SearchSection } from './css/SearchStyles';
import Card from './form/card';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { useForm } from 'react-hook-form';
import { Form } from  '../containers/styles/browserHeader';


export default function Search() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { videos } =  useSelector((state) => state.searchVideos);
    const [category, setCategory] = useState('series');


    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

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
    const handleSubmitOnClick = async ({ search }) => {
        dispatch(searchVideosRequest());
        try {
            const {
                data: { results },
            } = await axios.get(
                `/search/multi?api_key=${API_KEY}&language=ko&query=${search}&page=1&include_adult=false`
            );
            const movies = results.filter(
                (movie) => movie.media_type === 'tv'
            );
            dispatch(searchVideosSuccess(movies));
            history.push(`/search?q=${search}`);
        } catch (error) {
            dispatch(searchVideosFail(error.message));
        }
    };
 
    const { register, handleSubmit } = useForm();
    
    

    return (
        <>
        <Header.Frame>
             <Header.Group>
                 <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                    <Header.TextLink active={category === "trending" ? "true" : "false"}
                    onClick={() => setCategory("trending")}
                    >
                        ???     
                    </Header.TextLink>
                    <Header.TextLink 
                          active={category === 'tv' ? 'true' : 'false'} 
                          onClick={() => setCategory('series')}>
                        tv????????????
                      </Header.TextLink>
                      <Header.TextLink 
                          active={category === 'movie' ? 'true' : 'false'} 
                          onClick={() => setCategory('films')}>
                        ??????
                      </Header.TextLink>
                     
                        <Header.TextLink
                          active={category === 'mylist' ? 'true' : 'false'}
                          onClick={() => setCategory('mylist')}
                        >
                          ???????????? ?????????       
                        </Header.TextLink>
             </Header.Group>

     
                 <Form onSubmit={handleSubmit(handleSubmitOnClick)}>
                    <button type='submit'>
                            <AiOutlineSearch />
                        </button>
                        <input
                            type='text'
                            placeholder='????????? ????????? ??????????????????'
                            {...register('search', {
                                required: true,
                            })}
                        />
                 </Form>
  
             <Header.Group>
                          <Header.TextLink 
                          active={category === 'kids' ? 'true' : 'false'} 
                          onClick={() => setCategory('kids')}
                        >
                        ??????
                      </Header.TextLink>
                      
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />

                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <span>{user.displayName}</span>
                               </Header.Group>
                               <Header.Group>
                                  <Header.TextLinks to={ROUTES.HOME}>
                                    ????????? ??????
                                  </Header.TextLinks>
                                </Header.Group>
                                 <Header.Group>
                                  <Header.TextLinks to={ROUTES.HOME}>
                                    ?????? ??????
                                  </Header.TextLinks>
                                  </Header.Group>
                                <Header.Group>
                                  <Header.TextLinks onClick={() =>  firebase.auth().signOut()}>
                                    ?????? ??????
                                  </Header.TextLinks>
                                 </Header.Group>
                                 
                                
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
        </Header.Frame>
        <SearchSection>
          <SearchHeader>
            <p> ?????? ??????: </p>
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