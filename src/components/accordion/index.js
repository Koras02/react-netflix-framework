import React, {useState, createContext, useContext} from "react";
import {
    Container, 
    Inner,
    Item,
    Title,
    Header,
    Body,
} from './styles/accordion'

import {FaPlus, FaMinus} from 'react-icons/fa';

const ToggleContext = createContext()


export default function Accordion ({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Accordion.Item = function AccordionItem({ children, ...restProps}) {

    const [toggleShow, setToggleShow] = useState(false);


    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps}) {

    return <Title {...restProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({ children, ...restProps}) {
    
    const { toggleShow, setToggleShow} = useContext(ToggleContext);


    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
             {children}
          {toggleShow ? (
              <FaMinus alt="close" />
          ) : (
              <FaPlus alt="Open" />
          )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restProps}) {

    const { toggleShow } = useContext(ToggleContext);

    return (
      <Body  className={toggleShow ? 'open' : 'closed'} {...restProps}>
        <span>{children}</span>
      </Body>
    )
}