import React, {useState, useContext, useEffect} from 'react'
import Fuse from "fuse.js";
import {FirebaseContext } from '../context/firebase';
import {  Loading } from '../components';
import * as ROUTES from '../constants/routes';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import Header from 'components/header';
import logo from '../logo.svg';
import { FaTruckLoading } from 'react-icons/fa';

 
export function BrowseContainer({ slides }) {
    const [category,setCategory] = useState('series');
    const [profile, setProfile] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading,setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName]);
  
     useEffect(() => {
         setSlideRows(slides[category]);
     }, [slides, category]);

     useEffect(() => {
         const fuse = new Fuse(slideRows, { 
             keys: ['data.description','data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if(slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);


    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={Loading} />
            ) : (<Loading.ReleaseBody />)}


          <Header src="joker">
                <Header.Frame>
                    <Header.Group>
                      <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                      <Header.TextLink
                         active={category === 'series' ? 'ture' : 'false'}
                         onClick={() => setCategory('series')}>
                         홈
                         </Header.TextLink>
                         <Header.TextLink
                           active={category === 'films' ?  'true' : 'false'}>
                          TV프로그램       
                        </Header.TextLink>
                        <Header.TextLink
                           active={category === 'films' ?  'true' : 'false'}>
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
                </Header.Feature>
          </Header>         

 
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    
    )
}