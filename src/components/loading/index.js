import React from "react";
 
// import { Spinner } from "react-bootstrap";
import { LockBody, ReleaseBody, Spinner, Picture} from './styles/loading'
 

export default function Loading({ src, ...restProps }) {
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

 