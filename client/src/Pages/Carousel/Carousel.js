/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import { img_300, noPicture } from "../../axios/config/config";
import "./Carousel.css";
import { api_key } from "../../axios/urls";


const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ content_type, id, media_type}) => {
    const [creadits, setCreadits] = useState([]);

    const items = creadits?.map((c) => (
        <div className="carousel__item">
            <img src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
              alt={c?.name}
              className={'carousel__item_img'}
              onDragStart={handleDragStart}
            />
            <b className={"carousel__item_text"}>{c?.name}</b>
        </div>
    ));


    const responsive = {
        0 : {
            items: 3,
        },
        512: {
            items: 5,
        },
        1024: {
            items: 7
        },
    };


    function getCredits() {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${api_key}&language=ko-KR`
        }).then(response => {
            setCreadits(response.data.cast ?? []);
        })
    }

    useEffect(() => {
        getCredits();
    }, [])


    return (
        <AliceCarousel
        mouseTracking
        fadeOutAnimation={true}
        activeIndex={-2}
        items={items}
        autoWidth={true}
        autoPlay
        animationDuration={1400}
        disableButtonsControls
        disableDotsControls
        animationType={"fadeout"}
        responsive={responsive}
    />
    );
}

export default Carousel;