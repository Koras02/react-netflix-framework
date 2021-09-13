import React from 'react'

import { ReleaseBody, Spinner,VideoWrapper,VideoPlayer} from './styles/Intro'
import JumboVideo from '../../fixtures/video.json';
import Videio from './styles/Netflix logo intro (2021).mp4'


export default function Intro ()  {
    return (
        <Spinner>
        {JumboVideo.map(item => (
                    <VideoWrapper key={item.id}>
                    <VideoPlayer 
                    src={Videio}
                    width="100%"
                    height="100%"

                    frameborder="0"
                    framespacing="0"
                    marginheight="0"
                    marginwidth="0"
                
                    scrolling="no"
                    vspace="0"
                    ></VideoPlayer>
               </VideoWrapper>        
        ))
        }
     </Spinner>
    )
}


Intro.ReleaseBody = function IntroReleaseBody() {
    return <ReleaseBody/>
}