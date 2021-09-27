import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
    width: 100%;
    height: 41px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: ${(props) => props.show === true && '#141414'};
    transition: background-color 1s ease;
    @media (min-width: 900px) {
        height: 68px;
        padding: 0 4rem;
        font-size: 25px;
    }
`;

export const Logo = styled(Link)`
    width: 63px;
    margin-top: 0.3rem;
    max-height: 31px;

    @media (min-width: 900px) {
        width: 92px;
        margin-right: 1rem;
    }
`;

export const Navbar = styled.nav`
    flex: 1;
    padding-left: 1rem;
    justify-self: flex-start;
    align-self: center;
    color: #e5e5e5;
    font-size: 14px;
    ul {
        list-style: none;
        li a {
            transition: filter 0.5s ease;
            &:hover {
                text-decoration: none;
                filter: brightness(0.8);
            }
        }
    }
`;

export const Form = styled.form`
    margin: 0 0.5rem 0 auto;
    display: flex;
    align-items: center;
    position: relative;
    width: 32px;
    overflow: hidden;
    transition: width 0.5s ease;

    &:focus-within {
        width: 300px;
   
        background-color: #000000;
        input {
            cursor: initial;
            opacity: 1;
        }
    }

    button {
        background-color: transparent;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 0.4rem;
        transform: translateY(-40%);
        border:none;
        color:red;
    }

    input {
        opacity: 0;
        outline: none;
        border: none;
        color: #ffffff;
        padding: 0.5rem 0.5rem 0.5rem 3rem;
        background-color: transparent;
        z-index: 1;
        cursor: pointer;
    }
`;

export const Avatar = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 0.2rem;
    background-color: transparent;
    overflow: hidden;
`;

export const DropDown = styled.div`
    font-size: 14px;
    min-width: 160px;
    background-color: #000000;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 3rem;
    right: 2rem;

    &::after {
        content: '';
        width: 0;
        height: 0;
        border-left: 0.5rem solid transparent;
        border-right: 0.5rem solid transparent;
        border-bottom: 0.5rem solid white;
        position: absolute;
        top: -0.6rem;
        right: 0.5rem;
    }

    @media (min-width: 900px) {
        top: 68px;
        right: 4rem;
    }
    ul {
        list-style: none;
        li {
            padding: 0 0.5rem 0.5rem 0.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;
            &:hover {
                text-decoration: underline;
            }
            img {
                width: 32px;
                height: 32px;
                border-radius: 0.2rem;
            }
            span {
                flex: 1;
                margin-left: 0.5rem;
            }
        }
        li:first-child {
            font-weight: normal;
            padding: 0.5rem;
        }
        li:nth-child(2) {
            font-weight: normal;
            padding: 0 0.5rem 0.5rem 0.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        li:nth-child(3) {
            padding: 0.5rem;
        }
    }
`;
