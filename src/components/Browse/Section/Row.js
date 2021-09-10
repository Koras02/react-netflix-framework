import axios from "axios";
import React, { useState } from "react";

function Row (props) {
    const {title} = props;

    const [movies,setMovies] = useState([]);
    const [movieDetail, setMovieDetail] = useState([]);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ cardOpen, setCardOpen ] = useState(false);


    const openModal = () => {
        setModalOpen(true)
        setCardOpen(false)
    }

    const closeModal = () => {
        setModalOpen(false)
    } 
    const openCard = (e, movie) => {
        setCardOpen(true)
        setMovieDetail(movie)
    }

    function getMovie() {
        axios({
            method:"GET",
        })
    }

    return (
       <div>
           {title}
       </div>
    )
}

export default Row;