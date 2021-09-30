 
import React, { useState, useContext, createContext } from 'react';
 
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
  // Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
  // Rating,
  // FeatureCategory,
  Slider,
  // Left,
  // Right
} from './styled/card';
import * as SOURCE  from '../../constants/source';
// import { tvGenres, movieGenres } from '../../constants/genre';
import { useFetchRating } from '../../hooks';
import { FaRegWindowClose } from 'react-icons/fa';
 
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
 
  
  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
 
      <Container {...restProps}>{children}</Container>
 
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children,...restProps }) {
 
  return (
    <>
    <Group {...restProps}>
    {children}
    </Group>
 
   </>
  );
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

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
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
  const is_MediaType_Undedfined = itemFeature.media_type === undefined;
  const mediaType=is_MediaType_Undedfined ? category === 'series' ? 'tv' : 'movie' : itemFeature.media_type
   // eslint-disable-next-line no-unused-expressions
   showFeature ? itemFeature.rating = useFetchRating(itemFeature.id, mediaType) : null

  return showFeature ? (
    <Feature {...restProps} src={`${SOURCE.BASE_IMG_URL}${itemFeature.backdrop_path}`}>
      <Content>
        <FeatureTitle>{itemFeature.title || itemFeature.name} </FeatureTitle>
        <FeatureText>{itemFeature.description || itemFeature.overview}</FeatureText>
         <FeatureClose onClick={() => setShowFeature(false)}>
          <FaRegWindowClose />
         </FeatureClose>
        {children}
      </Content>
    </Feature>) : null;
};


Card.Slider = function CardSlider({ ...restProps }) {
  return <Slider {...restProps} />;
};



// Card.Left = function CardLeft({ id, ...restProps }) {
//   return (
//   <Left {...restProps}
//     onClick={() => {
//       document.getElementById(id).scrollLeft -= window.innerWidth - 80;
//     }}
//   >
//       <ArrowBackIosIcon/>          
//   </Left>
//   );
// };

// Card.Right = function CardRight({ id ,...restProps }) {
//   return (
//   <Right {...restProps}
//   onClick={() => {
//     document.getElementById(id).scrollLeft += window.innerWidth - 80;
//   }}
//   >
//       <ArrowForwardIosIcon />
//   </Right>
//   );
// };