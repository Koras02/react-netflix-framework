import React from 'react'
import { Container,Row, Column, Link, Title, Text, Break } from './styles/PassWordFooter';

export default function PassWordFooter({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
};

PassWordFooter.Row = function PassWordFooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
};

PassWordFooter.Column = function PassWordFooterColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
};

PassWordFooter.Link = function PassWordFooterLink({ children, ...restProps }) {
   return <Link {...restProps}>{children}</Link>
};

PassWordFooter.Title = function PassWordFooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

PassWordFooter.Text = function PassWordFooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

PassWordFooter.Break = function PassWordFooterBreak({ children, ...restProps}) {
    return <Break {...restProps}>{children}</Break>
}