import React, {useEffect, useRef, useState} from 'react'
import axios from '../../../axios/axios';
import { Add,Close,PlayArrow} from '@material-ui/icons';
import YouTube from "react-youtube";
// import Loading from "../Load"
import { API_KEY, BASE_URL } from '../../../utils/requests';
import { turncate } from '../../../utils/turncate';

function Details({ itemDetails, handleClose }) {
   const [trailerUrl, setTrailerUrl] = useState("");
   const [loading, setLoading] = useState(false);
   const trailerBox = useRef(null);


   useEffect(() => {
       
   }, [itemDetails])


    return (
        <div>
            
        </div>
    )
}

export default Details
