import React, {useState, useContext, createContext} from "react";
import { FaClosedCaptioning } from "react-icons/fa";
// import { img_300, unavailable, unavaliable } from "../config/config";
 
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image,
} from './styled/card';
// import Badge from "@material-ui/core/Badge";
 

export const FeatureContext = createContext();


export default function Card({ user, children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    );
};

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
} 

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
  };


Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
} 

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>
} 

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>
} 

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item
          onClick={() => {
              setItemFeature(item);
              setShowFeature(true);
          }}
          {...restProps}
          >
              {children}
          </Item>
    );
};

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
   
    const { showFeature, itemFeature, setShowFeature} = useContext(FeatureContext);

    return showFeature ? (
        <Feature>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <FaClosedCaptioning alt="Close" />
                </FeatureClose>


                <Group margin="30px 0" flexDirection="row" alignItems="center" border="0">
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                  <FeatureText fontWeight="bold">
                      {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                  </FeatureText>
                </Group>

                {children}
            </Content>
        </Feature>
    ) : null;
}; 


 
Card.Landing = function CardLanding({ children, ...restProps }) {
        return (   
            <div clssName="main-container">
                 asdsa
            </div>
        )
}

Card.Row = function CardRow ({children, ...restProps}) {

    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);
    const [movieDetail,setMovieDetail] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [cardOpen, setCardOpen] = useState();



    return (
        <div className="row">
           영화
        </div>
    )
}