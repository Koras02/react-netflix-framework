/* eslint-disable no-restricted-globals */
import React, {useState, useContext, useEffect} from 'react'
import Fuse from "fuse.js";
import {FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Header, Loading, Card,Player} from '../components';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
import { FooterContainer } from '../containers/footer';
import {makeStyles} from '@material-ui/core/styles';
import Browse from '../components/Browse';
import axios from 'axios';
 
 
export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  
  // 프로필 == 메인 이동시 로딩구현 
  const [profile, setProfile] = useState([]);
  const [loading,setLoading] = useState(true);
  const [opening, setOpning ] = useState(true);
  
  // 검색 부분 
  const [searchTerm, setSearchTerm] = useState('');
  const [category,setCategory] = useState('series');
  const [slideRows, setSlideRows] = useState([]);

  
  // 메인홈
 
  const history = useHistory();
  const [value, setValue] = React.useState(0);
 

  
  useEffect(() => {
    if (value === 0) history.push('/browse');
    if (value === 1) history.push('tv');
    if (value === 2) history.push('movies');

  }, [value,history])

  const [show,handleShow] = useState(false);
 
 
  useEffect(() => {


    const navHandler = () => {
      if(window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      };
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
      setTimeout(() => {
        setOpning(false)
      }, 9000)
    }, [profile.displayName])
  
     useEffect(() => {
         setSlideRows(slides[category]);
     }, [slides, category]);


  // 이동 마치고 clen up 함수
     useEffect(() => {
       return () => setLoading(false);
     }, [loading]);
    
 
   
     useEffect(() => {
         const fuse = new Fuse(slideRows, { keys: ['data.description','data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if(slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);


    return profile.displayName ? (
      <>

  
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody /> }
 
            
          <Header>
                <Header.Frame>
                {/* 메인 Nav메뉴 부분 */}
                {/*  selection -filter에서 가져온 장르 메뉴들 */}
                    <Header.Group>
                      <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                      <Header.TextLink active={category === 'trending' ? 'true' : 'false'} onClick={() => setCategory('trending')}>
                        홈
                      </Header.TextLink>
                      <Header.TextLink active={category === 'tv' ? 'true' : 'false'} onClick={() => setCategory('tv')}>
                        tv프로그램
                      </Header.TextLink>
                      <Header.TextLink active={category === 'movie' ? 'true' : 'false'} onClick={() => setCategory('movie')}>
                        영화
                        </Header.TextLink>
                        <Header.TextLink
                          active={category === 'movie' ? 'true' : 'false'} onClick={() => setCategory('new')}
                        >
                          최신 콘텐츠       
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
                                    {/* <Header.Picture src={user.photoURL} /> */}
                                    
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
                <Card.Item key={item.docId} item={item}>
                  {/* <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} /> */}
              
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
              {/* {slideItem.data.map((item) => (
                 <Card.Item key={item.docId} item={item}>
                     {category.length > 0 && category.map((category,index) => {
                       <Card.Category key={category.key} id={category.id} media_type={category.media_type} category={category} {...category} /> 
                     })}
                  </Card.Item>
              ))}
               */}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
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