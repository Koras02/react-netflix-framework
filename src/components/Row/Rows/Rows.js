import React, {useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from '../../../axios/axios';
// import { FontAwesomeIcon } from "@fortAw"
import {faPlay, faChevronIcon } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { requests } from '../../../utils/requests';


function Rows(props) {

    const {title, fetchUrl} = props;

    const [movies, setMovies] = useState([]);
    const [movieDetail, setMovieDetail] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [cardOpen, setCardOpen] = useState(false);
    
 

    

    useEffect(() => {

    })

    return (
        <div>
            
        </div>
    )
}

export default Rows;
