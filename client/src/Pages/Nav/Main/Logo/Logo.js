import React from 'react';
import './styles/HeaderStyles.css';
import Img from './images/misc/logo.svg'
import {Image} from "./LogoStyle";

function Logo({ children, ...restProps }) {
    return (
        <div>
            <a href="/" {...restProps}>
                {children}
            <Image src={Img}/>
            </a>
        </div>
    )
}

export default Logo;