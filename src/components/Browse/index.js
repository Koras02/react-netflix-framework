import axios from "axios";
import React, { Profiler } from "react";
import { useEffect, useState} from "react";
import requests from "../../utils/requests";
import Fuse from "fuse.js";
import { Card } from "react-bootstrap";
 
 
export default function Browse({ children,slides, ...restProps }) {
    const [movies, seMovies] = useState([]);
    const [slidesRows, setSlideRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
 
    
    useEffect(() => {
        const fuse = new Fuse(slidesRows, {keys: ['data.description', 'data.title', 'data.genre']});
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (slidesRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
             setSlideRows(results);

        } else {
            setSlideRows(slides);
        }
    }, [searchTerm]);


    return profile.dispalyName ? (
        <>
      <Card.Group>
        {slidesRows.map((slideItem) => (
          <Card >
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
                ))}
                </Card.Entities>
                </Card>
                
         ))}
         </Card.Group>
         </>
     ) : (
             <div></div>
        )
}


 