import React, { useEffect, useState } from "react";
// import { Intro } from "../";
 
// import { Spinner } from "react-bootstrap";
import { LockBody, ReleaseBody, Spinner, Picture} from './styles/loading'
 

export default function Loading({ src, ...restProps }) {
    const [opening, setOpning ] = useState(true);
    const [profile, setProfile] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setOpning(false)
        }, 2000)
      }, [profile.displayName])


    return (
        <Spinner {...restProps}>
            <LockBody />

            <Picture src={src ? process.env.PUBLIC_URL + `/images/users/${src}.png` : `/images/users/${src}.png` }  data-testid="loading-picture"/>
 
             
        </Spinner>
    );
}


Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
}

 