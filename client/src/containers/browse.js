import React, {useState, useContext, useEffect} from 'react'
import Fuse from "fuse.js";
import {FirebaseContext } from '../context/firebase';
import { Header, Loading, Card, Player } from '../components';
import * as ROUTES from '../constants/routes';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

 
export function BrowseContainer({ slides }) {
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    const [profile, setProfile] = useState([]);
    const [loading,setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [profile.displayName]);
  
    useEffect(() => {
        const fuse = new Fuse(slideRows, { 
            keys: ['data.title', 'data.description', 'data.genre'] });
    })

   
    

    return profile.displayName ? (
        <>
          {loading ? <Loading src={user.photoURL} /> : <Loading.ReleasBody /> }
                          
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}