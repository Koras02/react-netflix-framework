import React, { useState } from "react";
import { Container,Frame } from "./styles/Row";
import axios from "axios";
import { requests } from "../../utils/requests";
import Rows from "./Rows/Rows";


export default function Row({ children, ...restProps }) {
    const [movies, setMovies] = useState([])    
    // const [page, setPage] 
    
 
    
    return (
    
    <Container {...restProps}>
          <Frame {...restProps}>
              {/* <Row title="지금뜨는 콘텐츠" fetch={requests.fetchTrendingTV} /> */}
              <Rows title = "지금 뜨는 콘텐츠" fetchUrl={requests.fetchTrending}/>
         </Frame> 
    </Container>
    )
}
 