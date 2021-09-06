import React from "react";
import JumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';
import JumboVideo from '../fixtures/jumboVideo.json';
import "./styles/JumboShow.css";

export function JumbotronContainer() {
    
    
    

    return (
        <Jumbotron.Container>
         {JumboVideo.map(item  => (
             <Jumbotron key={item.id} direction={item.direction}>
                <Jumbotron.Pane>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <div className="home-story-show">
                        <img src={item.image} alt={item.alt} />   
                        <video autoPlay playsInline="" muted loop>
                            <source src={item.video} />
                        </video>
                   </div>        
                </Jumbotron.Pane>
             </Jumbotron>
        ))}
        {JumboData.map(item => (
                    <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                       <Jumbotron.Image src={item.image} alt={item.alt} />           
                    </Jumbotron.Pane>
                 </Jumbotron>
            ))}
        </Jumbotron.Container>
    );
}