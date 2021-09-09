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
} from './styles/PasswordFormStyle';


export default function PasswordForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

PasswordForm.Error = function PasswordFormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>
}

PasswordForm.Success = function PasswordFormSuccess({ children, ...restProps }) {
    return <Success {...restProps}>{children}</Success>
}

PasswordForm.Base = function PasswordFormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

PasswordForm.Title = function PasswordFormTitle({ children , ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

PasswordForm.Text = function PasswordFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

PasswordForm.TextSmall = function PasswordFormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

PasswordForm.Link = function PasswordFormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

PasswordForm.AboutLink = function PasswordFormAboutLink({ children, ...restProps }) {
    return <AboutLink {...restProps}>{children}</AboutLink>
}

PasswordForm.Input = function PasswordFormInput({ children, ...restProps}) {
    return <Input 
     {...restProps}
     >{children}</Input>
}

PasswordForm.Input2 = function PasswordFormInput({ children, ...restProps}) {
    return <Input {...restProps}
    >{children}</Input>
}

PasswordForm.Submit = function PasswordFormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}

PasswordForm.Loader = function PasswordFormLoader({ children, ...restProps }) {
    return <Loading {...restProps}>{children}</Loading>
}

PasswordForm.ToggleButton = function PasswordFormToggleButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}