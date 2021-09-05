import React from "react";
// import { Spinner } from "react-bootstrap";
import { LockBody, ReleaseBody, Spinner, Picture} from './styles/loading'
import { FaTruckLoading } from "react-icons/fa";

export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={FaTruckLoading} data-testid="loading-picture" />
        </Spinner>
    );
}


Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />;
}