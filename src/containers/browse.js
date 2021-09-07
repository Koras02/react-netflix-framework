/* eslint-disable no-restricted-globals */
import React, {useState, useContext, useEffect} from 'react'
import Fuse from "fuse.js";
import {FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Header, Loading, Card } from '../components';
// import { useAuthListener } from 'hooks';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from './footer';
 
import { useHistory } from 'react-router-dom';
import axios from 'axios';



export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  
  // 프로필 == 메인 이동시 로딩구현 
  const [profile, setProfile] = useState([]);
  const [loading,setLoading] = useState(true);
  
  // 검색 부분 
  const [searchTerm, setSearchTerm] = useState('');
  const [category,setCategory] = useState('series');
  const [slideRows, setSlideRows] = useState([]);
  
  // 메인홈
  const [movies, setMovies] = useState([]);
  const [value, setValue] = React.useState(0);
  const [page,setPage] = useState(1);
 

  const history = useHistory();

  useEffect(() => {
    if (value===0) history.push('/browse') 
    else if (value===1) history.push('homes')
    else if (value===2) history.push('tv')
    else if (value===3) history.push('movies')
  },[value,history]);

 
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName]);
  
     useEffect(() => {
         setSlideRows(slides[category]);
     }, [slides, category]);

      
    function getTrending(page) {
      axios({
        method:"GET",
        url: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&l&page=${page}`
      }).then(response => {
          setMovies(response.data.results ?? [])
          // setPage(response.data.total_pages)
          // console.log(response.data.results)
      })
    }
    
    
    useEffect(() => {
    getTrending(page);
    },[page])



     useEffect(() => {
         const fuse = new Fuse(slideRows, { 
             keys: ['data.description','data.title', 'data.genre'] });
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
            {loading ? (
                <Loading src={Loading} />
            ) : (<Loading.ReleaseBody />)}


          <Header src="joker">
                <Header.Frame>
                {/* 메인 Nav메뉴 부분 */}
                    <Header.Group>
                      <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                      <Header.TextLink
                        onClick={()=>{history.push('/browse')}}
                      >
                         홈
                      </Header.TextLink>
                         <Header.TextLink
                          onClick={()=>{history.push('/tv')}}
                         >
                          TV프로그램       
                        </Header.TextLink>
                        <Header.TextLink
                           onClick={()=>{history.push('/movies')}}
                        >
                          영화 
                        </Header.TextLink>
                        <Header.TextLink
                          onClick={() => history.push('/')}
                        >
                          최신 콘텐츠       
                        </Header.TextLink>
                        <Header.TextLink>
              
                          내가찜한 콘텐츠       
                        </Header.TextLink>
                    </Header.Group>

                    {/* 메인 Nav메뉴 부분 */}

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
                
                {/* 메인 광고창 */}
                {/* <Header.Feature>
                     <Header.FeatureCallOut>조커</Header.FeatureCallOut>
                   <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                   </Header.Text>
                   <Header.PlayButton>플레이</Header.PlayButton>
                </Header.Feature> */}
          </Header>       

          <Card.Group>
             <Card.SingleMovie/>
      </Card.Group>

        <FooterContainer />
        </>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    
    )
}