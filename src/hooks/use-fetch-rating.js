import { useEffect, useState } from "react";
import axios from '../utils/axios'
import { API_KEY } from "../utils/requests";

export default function useFetchRating(id, mediaType) {
    const [rating, setRating] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(mediaType === "tv" ? `/tv/${id}/content_ratings?api_key=${API_KEY}&language=ko` : `/movie/${id}/release_dates?api_key=${API_KEY}&language=ko`)
            let certification = request.data.results.filter((rating) => rating.iso_3166_1 === "KR");
            setRating(mediaType === "movie" ? certification[0].release_dates[0].certification : certification[0].rating)
            return request;
        }
        fetchData().catch((error) => {
            console.log(error.message)
        });
    }, [id, mediaType])
    return rating
}