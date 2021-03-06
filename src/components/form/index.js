import React from "react";
import { 
    Container, 
    Error,
    Success,
    Base,
    Title,
    Text,
    TextSmall,
    Link,
    AboutLink,
    Input,
 
    Submit,
    Loading,
    Button
} from './styles/form';


export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>
}

Form.Success = function FormSuccess({ children, ...restProps }) {
    return <Success {...restProps}>{children}</Success>
}

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({ children , ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Form.AboutLink = function FormAboutLink({ children, ...restProps }) {
    return <AboutLink {...restProps}>{children}</AboutLink>
}

Form.Input = function FormInput({ children, ...restProps}) {
    return <Input 
     {...restProps}
     >{children}</Input>
}

Form.Input2 = function FormInput({ children, ...restProps}) {
    return <Input {...restProps}
    >{children}</Input>
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}

Form.Loader = function FormLoader({ children, ...restProps }) {
    return <Loading {...restProps}>{children}</Loading>
}

Form.ToggleButton = function FormToggleButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}
