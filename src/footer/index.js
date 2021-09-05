import React from "react";
import { Container } from "./styles/"

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}