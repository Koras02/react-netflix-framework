/* eslint-disable no-restricted-globals */
import React, {useState, useContext, useEffect} from 'react'
import Fuse from "fuse.js";
import {FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Header, Loading } from '../components';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
import { FooterContainer } from '../containers/footer';
 
 
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
        }, 3000)
    }, [profile.displayName]);


    useEffect(() => {
      setTimeout(() => {
        setOpning(false)
      }, 6000)
    }, [profile.displayName]);
  
    
    
    useEffect(() => {
         setSlideRows(slides[category]);
     }, [slides, category]);

     
    
 
   
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
          <Header src="joker">
                <Header.Frame>
                {/* 메인 Nav메뉴 부분 */}
                    <Header.Group>
                      <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                      <Header.TextLink to={ROUTES.HOME}>   
                       홈
                      </Header.TextLink>
                         <Header.TextLink
                         style={
                          history.location.pathname === "/browse/tv"
                            ? { color: "white" }
                            : {}
                        }
                        onClick={() => history.push("/browse/tv")}
                         >
                          TV프로그램       
                        </Header.TextLink>
                        <Header.TextLink 
                           style={
                            history.location.pathname === "/browse/movies"
                              ? { color: "white" }
                              : {}
                          }
                          onClick={() => history.push("/browse/movies")}
                        >
                          영화 
                        </Header.TextLink>
                        <Header.TextLink
                          onClick={() => history.push(ROUTES.BROWSELATEST)}
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
                        <Header.Profile>
                            <Header.Search
                              searchTerm={searchTerm}
                              setSearchTerm={setSearchTerm}
                            />
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>로그 아웃</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
          </Header>       
        
        <FooterContainer />      
        </>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    
    )
}