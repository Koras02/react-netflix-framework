import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  SvgIcon  from '@material-ui/core/SvgIcon';
import  Modal  from '@material-ui/core/Modal';
import  Backdrop  from '@material-ui/core/Backdrop';
import  Fade from "@material-ui/core/Fade"
import axios from 'axios';
import { img_original, unavailable } from '../../axios/config/config';
// import  Button  from '@material-ui/core';
import YouTubeIcon from "@material-ui/icons/YouTube";
import { GlobalContext } from '../../context/GlobalState'; 
import { api_key } from '../../axios/urls';
import "./ContentFocus.css";
import Carousel from '../Carousel/Carousel';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '90%',
        maxWidth: '780px',
        height: '95%',
        border: '1px solid #282c34',
        borderRadius: 10,
        backgroundColor: "#39445a",
        color: "white",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 3),
    },
    button: {
        // display: 'block',
        // display: 'flex',
        margin: "0px auto",
        justifySelf: 'center',
        // width: '30em',
        maxWidth: 'calc(40em - 20px)',
        // justifyContent: 'center',
        borderRadius: '10px',
    },
    mySvgStyle: {
        fill: 'red',
        // display: 'inline-flex',
        verticalAlign: 'middle',
        // whiteSpace: 'pre',
        // margin: 'auto 0px',
        // alignItems: 'center',
        // justifySelf: 'center',
    },
}));

export default function ContentFocus({children, id, media_type}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [movie,setMovie] = useState();
    const [video, setVideo] = useState();

    function getMovie() {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${api_key}&language=ko`
        }).then(response => {
            setMovie(response.data ?? [])
        })
    }
 
    function getVideo() {
        axios({ 
            method:"GET",
            url: `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${api_key}&language=ko`
        }).then(response => {
            setVideo(response.data.results[0]?.key ?? [])
        })
    }

    useEffect(() => {
        getMovie();
        getVideo();
    }, []);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const {
        add_Movie_to_watchlist,
        remove_Movie_from_watchlist,
        add_Movie_to_watched,
        remove_from_watched,
        watchlist,
        watched
    } = useContext(GlobalContext);
    let storedMovie = watchlist?.find(o => o.id === id) ? true : false ?? false;
    let watchedMovie = watched?.find(o => o.id === id) ? true : false ?? false;

    return (
        <div className={'movie-card'}>
            <button className="movie" type="button" onClick={handleOpen}>
                {children}
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >  
              <Fade in={open}>
                  {movie && (
                  <div className="content__wrapper">
                  <div className="content__container">

                      <div className="content__poster">
                          <img className={'back__poster'}
                               src={movie.backdrop_path ? `${img_original}/${movie.backdrop_path}` : unavailable}
                               alt={`${movie.title ? movie.title : (movie.original_title ? movie.original_title : (movie.name ? movie.name : movie.original_name))} Poster`}/>
                      </div>
                      <div className="content__about">
                       <span className="content__title">
                           {movie.title ? movie.title : (movie.original_title ? movie.original_title : (movie.name ? movie.name : movie.original_name))}({(movie?.release_date || movie?.first_air_date || '_____').substring(0, 4)})
                       </span>
                          &emsp;
                          <a href={`http://youtu.be/${video}`} target={"__blank"}>
                              <SvgIcon className={classes.mySvgStyle}>
                                  <YouTubeIcon/>
                              </SvgIcon>
                          </a>
                            </div>
                            <div className="content__tag">
                              {movie.tagline && (<i className={'content__tagline'}>{movie.tagline}</i>)}

                              &emsp;
                              {!watchedMovie ? 
                                <i className={'fa-fw far fa-eye content_focus__icon'}
                                onClick={() => (add_Movie_to_watched(movie))} />
                                : <i className="fa fa-eye-slash content_focus__icon" aria-hidden="true"
                                onClick={() => (remove_from_watched(movie.id))} /> 
                              }
                              &emsp;
                              {!watchedMovie ?
                                        !storedMovie
                                            ? <i className="fa fa-bookmark-o content_focus__icon" aria-hidden="true"
                                                 onClick={() => (add_Movie_to_watchlist(movie))}/>
                                            : <i className={"fa fa-bookmark content_focus__icon"}
                                                 onClick={() => (remove_Movie_from_watchlist(id))}/>
                                        : <></>}

                            </div>

                            <div className="content__description">
                               {movie.overview}
                            </div>

                            <div className="content__carusel">
                               <Carousel media_type={media_type} id={id} />    
                            </div>
                         </div>
                      </div>
                  )}
              </Fade>

            </Modal>
        </div>
    )
}
 