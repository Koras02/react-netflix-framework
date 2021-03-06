/* eslint-disable no-restricted-globals */
import React, {useState, useContext, useEffect} from 'react'
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from '../containers/footer';
import {FirebaseContext } from '../context/firebase';
import { Header, Loading, Card,Player} from '../components';
import  { API_KEY } from '../utils/requests';
import axios from '../utils/axios';
import * as ROUTES from '../constants/routes';
 
import logo from '../logo.svg';
import {  useHistory } from 'react-router-dom';
import * as SOURCE from '../constants/source';
import { AiOutlineSearch } from 'react-icons/ai'
// import {  FaInfoCircle, FaPlay} from 'react-icons/fa';
import { searchVideosFail, searchVideosRequest, searchVideosSuccess } from '../reducers/slices/searchVideoSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Form } from './styles/browserHeader';


// const baseURL = 'https://image.tmdb.org/t/p/original/';

// 배열로 영화 이름 title mediaType을 받아온다.
export function BrowseContainer({ slides ,id }) {
 
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  
  // 검색 부분 
  const [category,setCategory] = useState('series');
  // const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  // 프로필 == 메인 이동시 로딩구현 
  const [profile, setProfile] = useState([]);
  const [loading,setLoading] = useState(true);
 
  
  const [background] = useState([])

  
  
  // 메인홈
  const history = useHistory();
  const [value] = React.useState(0);
 
   const dispatch = useDispatch();

  
  useEffect(() => {
    if (value === 0) history.push('/browse');
    if (value === 1) history.push('tv');
    if (value === 2) history.push('movies');
    if (value === 3) history.push('kids');

  }, [value,history])

  const [handleShow] = useState(false);
 
  const { register, handleSubmit } = useForm();
 
  useEffect(() => {


    const navHandler = () => {
      if(window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

      window.addEventListener("scroll", navHandler);

      return () => {
        //clean up
        window.removeEventListener("scroll", navHandler);
      }

   },[]);
 
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [profile.displayName]);

 
  
     useEffect(() => {
         setSlideRows(slides[category]);
     }, [slides, category]);


  // 이동 마치고 clen up 함수
     useEffect(() => {
       return () => setLoading(false);
     }, [loading]);

  //    useEffect(() => {
  //     async function fetchData() {
  //         const request = await axios.get(requests.fetchNetflixOriginals);
  //         setBackGround(
  //             request.data.results[
  //             Math.floor(Math.random() * request.data.results.length - 1)
  //             ]
  //         );
  //         return request;
  //     }
  //     fetchData();
  // }, []);

 
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

       
    return profile.displayName ? (
      <>

  
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody /> }
 
        
          <Header.SubBackground src={background.backdrop_path !== undefined ? `${SOURCE.BASE_IMG_URL}${background.backdrop_path}` : '/images/misc/home-bg.jpg'}>
            
                {/* <Header.Banner src={`${baseURL}${background?.backdrop_path}`}> */}
               
                <Header.Frame>
                {/* 메인 Nav메뉴 부분 */}
                {/*  selection -filter에서 가져온 장르 메뉴들 */}
                    <Header.Group>
                      <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                      <Header.TextLink active={category === 'trending' ? 'true' : 'false'} 
                        onClick={() => setCategory('trending')}
                      >
                        홈
                      </Header.TextLink>
                      <Header.TextLink 
                          active={category === 'tv' ? 'true' : 'false'} 
                          onClick={() => setCategory('series')}>
                        TV프로그램
                      </Header.TextLink>
                      <Header.TextLink 
                          active={category === 'movie' ? 'true' : 'false'} 
                          onClick={() => setCategory('films')}>
                        영화
                      </Header.TextLink>
                     
                        <Header.TextLink
                          active={category === 'mylist' ? 'true' : 'false'}
                          onClick={() => setCategory('mylist')}
                        >
                          내가찜한 콘텐츠       
                        </Header.TextLink>

                    </Header.Group>
                    {/* 메인 Nav메뉴 부분 */}
                     {/* 프로필 창 */}
                     <Form onSubmit={handleSubmit(handleSubmitOnClick)}>
                        <button type='submit'>
                            <AiOutlineSearch />
                        </button>
                        <input
                            type='text'
                            placeholder='검색할 제목을 입력해주세요'
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
                        키즈
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
                                    프로필 관리
                                  </Header.TextLinks>
                                </Header.Group>
                                 <Header.Group>
                                  <Header.TextLinks to={ROUTES.HOME}>
                                    고객 센터
                                  </Header.TextLinks>
                                  </Header.Group>
                                <Header.Group>
                                  <Header.TextLinks onClick={() =>  firebase.auth().signOut()}>
                                    로그 아웃
                                  </Header.TextLinks>
                                 </Header.Group>
                                {/* <Header.ButtonGroup>
                                    <Header.TextLinks onClick={() => firebase.auth().signOut()}>프로필 관리</Header.TextLinks>
                                    <Header.TextLinks onClick={() => firebase.auth().signOut()}>설정</Header.TextLinks>
                                    <Header.TextLinks onClick={() => firebase.auth().signOut()}>계정</Header.TextLinks>
                                    <Header.TextLinks onClick={() => firebase.auth().signOut()}>고객센터</Header.TextLinks>
                                    <Header.TextLinks onClick={() => firebase.auth().signOut()}>로그 아웃</Header.TextLinks>
                              </Header.ButtonGroup> */}
                                
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                {/* <Header.Feature>
                   <Header.FeatureCallOut>{background?.title || background?.name}</Header.FeatureCallOut>
                   <Header.Text>{background.original_name}</Header.Text>
                   <Header.Text>{background.overview}</Header.Text>
                   <Header.PlayButton>
                   <Header.InfoH1>
                         재생
                    </Header.InfoH1>
                    <FaPlay />
                   </Header.PlayButton>
                   <Header.InfoButton>
                    <Header.InfoH1>
                         More Info
                    </Header.InfoH1>
                    <FaInfoCircle />
                   </Header.InfoButton>
                </Header.Feature> */}
              {/* </Header.Banner> */}
          </Header.SubBackground>       
 

          <Card.Group>

             {slideRows.map((slideItem) => (
               <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>

            <Card.Slider>
            <Card.Entities id={id}>
              {slideItem.data.map((item) => (
               <Card.Item 
                  key={item.docId || item.id} item={item}
                >
                  <Card.Image src={`${SOURCE.BASE_IMG_URL}${item.poster_path}` || `images/${category}/${item.genre}/${item.slug}/smail.jpg`} />
                </Card.Item>
              ))}
            </Card.Entities>
            </Card.Slider>
          
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video />
              </Player>
            </Card.Feature>
            
          </Card>
        ))}
   
      </Card.Group>
         
        <FooterContainer />      
        </>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    
    )
}