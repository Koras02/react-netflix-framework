import React, { useEffect, useRef, useState } from "react";
import { Container
    ,Text,
     Input,
     Button,
     Break

} from './styles/opt-form';
import { FaChevronRight } from "react-icons/fa"

export default function OptForm({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

OptForm.Text = function OptFormText({ children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

OptForm.Input = function OptFormInput({ children, ...restProps}) {
    return (
    <>
    
    <Input {...restProps}
    >
        {children}   
    </Input>
    </>
    );
}

OptForm.Button = function OptFormButton({ children, ...restProps}) {
    return (
        <Button {...restProps}>
            {children} <FaChevronRight />
        </Button>
    )
}

OptForm.Break = function OptFormBreak ({ children, ...restProps}) {
    return <Break {...restProps} />
}