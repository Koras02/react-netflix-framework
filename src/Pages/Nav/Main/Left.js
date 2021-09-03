import React from "react";
import { Link } from "react-router-dom";
import { LeftWrapper, Logo } from "./Main.styled";
import movie from "../../assets/Netflix.png"

function Left() {
    return (
        <LeftWrapper>
            <Logo>
                <Link to="/">
                    <img src={movie} alt="movie"/>
                </Link>
                <Link to="/">
                    
                </Link>
            </Logo>
        </LeftWrapper>
    )
}

export default Left;