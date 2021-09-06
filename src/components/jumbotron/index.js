import React from "react";
import { 
    Item,
    Inner,
    Container,
    Pane,
    Title,
    Image,
    SubTitle,
    Video,
    Show

} from "./styles/jumbotron";

export default function Jumbotron({ children, direction = 'row', ...restPRops}) {
    return (
        <Item>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    );
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage ({children , ...restProps }) {
    return <Image {...restProps}></Image>
}

Jumbotron.Video = function JumboVideo ({ tpye, children, ...restProps }) {
    return (
    <Video></Video>
    )
}

Jumbotron.Videos = function JumboVideos ({ type, children, ...restProps}) {
    return (
        <Video
        {...restProps}
        type='video/mkv' 
        autoPlay="true" 
        loop="true"
        muted
        playsInline=""
        >

        </Video>
    )
}

Jumbotron.Show = function JumboShow ({ type, children, ...restProps}) {
    return <Show {...restProps}></Show>
}