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

      // 로딩 끝난뒤에 는 필수로 cleanup 해주어야한다.
      // 그래야 메모리 누수를 방지할 수있다.
      useEffect(() => {
          return () => setLoading(false);
      }, [loading])

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

 