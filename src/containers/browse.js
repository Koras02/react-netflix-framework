/* eslint-disable no-restricted-globals */
import React, {useState, useContext, useEffect} from 'react'
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from '../containers/footer';
import {FirebaseContext } from '../context/firebase';
import { Header, Loading, Card,Player} from '../components';
import requests from '../utils/requests';
import axios from '../utils/axios';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { useHistory } from 'react-router-dom';
import * as SOURCE from '../constants/source';

import Fuse from "fuse.js";
 
 
// 배열로 영화 이름 title mediaType을 받아온다.
export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  
  // 검색 부분 
  const [category,setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  // 프로필 == 메인 이동시 로딩구현 
  const [profile, setProfile] = useState([]);
  const [loading,setLoading] = useState(true);
 
  
  const [background, setBackGround] = useState([])

  
  // 메인홈
  const history = useHistory();
  const [value] = React.useState(0);
 

  
  useEffect(() => {
    if (value === 0) history.push('/browse');
    if (value === 1) history.push('tv');
    if (value === 2) history.push('movies');

  }, [value,history])

  const [handleShow] = useState(false);
 
 
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

     useEffect(() => {
      async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setBackGround(
              request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
              ]
          );
          return request;
      }
      fetchData();
  }, []);
 
   
     useEffect(() => {
         const fuse = new Fuse(slideRows,
          { keys: ['data.description','data.title', 'data.genre'] });
        
        
          const results = fuse.search(searchTerm).map(({ item }) => item);

        if(slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
 
    }, [searchTerm]);


    return profile.displayName ? (
      <>

  
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody /> }
 
            
          <Header src={background.backdrop_path !== undefined ? `${SOURCE.BASE_IMG_URL}${background.backdrop_path}` : '/images/misc/home-bg.jpg'}>
                <Header.Frame>
                {/* 메인 Nav메뉴 부분 */}
                {/*  selection -filter에서 가져온 장르 메뉴들 */}
                    <Header.Group>
                      <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                      <Header.TextLink active={category === 'trending' ? 'true' : 'false'} 
                        onClick={() => setCategory('series')}
                      >
                        홈
                      </Header.TextLink>
                      <Header.TextLink 
                          active={category === 'tv' ? 'true' : 'false'} 
                          onClick={() => setCategory('films')}>
                        tv프로그램
                      </Header.TextLink>
                      <Header.TextLink 
                          active={category === 'tv' ? 'true' : 'false'} 
                          onClick={() => setCategory('films')}>
                        영화
                      </Header.TextLink>
                     
                        <Header.TextLink>
              
                          내가찜한 콘텐츠       
                        </Header.TextLink>
  
                    </Header.Group>
                    

                    {/* 메인 Nav메뉴 부분 */}
                     {/* 프로필 창 */}
                    <Header.Group>
                      <Header.SearchComponent>
                            <Header.Search
                              searchTerm={searchTerm}
                              setSearchTerm={setSearchTerm}
                            />
                          
                        </Header.SearchComponent>
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.dispalyName}</Header.TextLink>
                                </Header.Group>
                                <Header.ButtonGroup>
                                    <Header.TextLinks onClick={() => firebase.auth().signOut()}>프로필 관리</Header.TextLinks>
                                    <Header.TextLinks onClick={() => firebase.auth().signOut()}>설정</Header.TextLinks>
                                    <Header.TextLinks onClick={() => firebase.auth().signOut()}>계정</Header.TextLinks>
                                    <Header.TextLinks onClick={() => firebase.auth().signOut()}>고객센터</Header.TextLinks>
                                    <Header.TextLinks onClick={() => firebase.auth().signOut()}>로그 아웃</Header.TextLinks>
                              </Header.ButtonGroup>
                                
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
              
          </Header>       
      
          <Card.Group>
             {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId || item.id} item={item}>
                  <Card.Image src={`${SOURCE.BASE_IMG_URL}${item.poster_path}` || `images/${category}/${item.genre}/${item.slug}/smail.jpg`} />
                  <Card.Meta>
                     <Card.SubTitle>{item.title || item.name}</Card.SubTitle>
                  </Card.Meta>
                </Card.Item>
              ))}
        
            </Card.Entities>
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