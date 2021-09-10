import axios from "axios";
import React from "react";
import { useEffect, useState} from "react";
import requests from "../../utils/requests";
 
import Row from './Section/Row'

export default function Browse({ children, ...restProps }) {
 

    return (
        <>
        <div className="movies" title="트렌딩">
           {/* <Row title="지금 뜨는 콘텐츠"   /> */}
        </div>
        </>
    )
}



// Trending 영화
 