import React, {useState, useContext, useEffect} from 'react'
import Fuse from "fuse.js";
import {FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Header, Loading, Card, Player } from '../components';
// import { useAuthListener } from 'hooks';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from './footer';
import axios from "axios";

 
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
    

    // TV
    function getTrending() {
      // eslint-disable-next-line no-undef
      axios({
         method: "GET",
         url: `http://api.themovie.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=ko`
      }).then(response => {
         setMovies(response.data.results ?? [])
      })
    }
    

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName]);
  
     useEffect(() => {
         setSlideRows(slides[category]);
     }, [slides, category]);

     useEffect(() => {
       getTrending();
     }, [])

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
                         active={category === 'series' ? 'ture' : 'false'}
                         onClick={() => setCategory('series')}>
                         홈
                         </Header.TextLink>
                         <Header.TextLink
                           active={category === 'films' ?  'true' : 'false'} onClick={() => setCategory('series')}>
                          TV프로그램       
                        </Header.TextLink>
                        <Header.TextLink
                           active={category === 'films' ?  'true' : 'false'} onClick={() => setCategory('films')}>
                          영화 
                        </Header.TextLink>
                        <Header.TextLink
                           active={category === 'films' ?  'true' : 'false'}>
                          최신 콘텐츠       
                        </Header.TextLink>
                        <Header.TextLink
                           active={category === 'films' ?  'true' : 'false'}>
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
                <Header.Feature>
                     <Header.FeatureCallOut>조커</Header.FeatureCallOut>
                   <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                   </Header.Text>
                   <Header.PlayButton>플레이</Header.PlayButton>
                </Header.Feature>
          </Header>       

          <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <div className="movies">
              {slideItem.length > 0 && movies.map((movie, index) => (
                <div key={movie.id} id={movie.id} media_type={movie.category} movie={movie} {...movie} />
               ))} 
               </div>
            <Card.Entities>
              {/* {slideItem.data.map((src ,item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={src ? process.env.PUBLIC_URL + `/images/${category}/${item.genre}/${item.slug}/small.jpg` : `/images'/users/${item.genre}`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))} */}
            </Card.Entities>
            {/* <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="./videos/bunny.mp4" />
              </Player>
            </Card.Feature> */}
          </Card>
        ))}
      </Card.Group>

        <FooterContainer />
        </>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    
    )
}