import React , {useState, useContext, createContext} from "react";
import ReactDOM  from "react-dom";
import {
  Container,
  Button,
  Outer,
  Inner,
  Close,
 } from "./styles/player";
 import { FeatureContext } from '../card';
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
 
export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("");
    

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer, trailerUrl, setTrailerUrl}}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    );
}


Player.Video = function PlayerVideo({ ...restProps }) {
    const { showPlayer, setShowPlayer, trailerUrl, setTrailerUrl } = useContext(PlayerContext);
    const { itemFeature } = useContext(FeatureContext);
 
 

    movieTrailer(itemFeature.title || itemFeature.name || "")
      .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));

      const opts = {
          width: '640',
          height: '390',
          playerVars:{
              autoPlay:1,
          }
      }

    return showPlayer ? ReactDOM.createPortal(
          <Outer {...restProps} onClick={() => setShowPlayer(false)} data-testid="player">
         
              <Inner>
                   <YouTube videoId={trailerUrl} opts={opts} />
                  <Close onClick={() => setShowPlayer(false)} data-testid="player-close" />
                 
              </Inner>
          </Outer>,document.body
      ) 
      : null;
};


Player.Button = function PlayerButton({ ...restProps }) {
    const { setShowPlayer} = useContext(PlayerContext);

    return (
        <Button {...restProps} onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
            플레이
        </Button>
    )
}

 