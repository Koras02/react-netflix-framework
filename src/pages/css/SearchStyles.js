import styled from 'styled-components';

export const SearchSection = styled.section`
    min-height: 100vh;
    padding: 0px 1rem 0 1rem;
    background-color: #141414;

    @media (min-width: 600px) {
        padding: 41px 2rem 0 2rem;
    }
    @media (min-width: 900px) {
        padding: 28px 4rem 0 4rem;
    }
`;

export const SearchHeader = styled.div`
    margin: 4rem 0 1rem 0;
    font-size: 11px;
    color: #808080;
    display: flex;

    @media (min-width: 900px) {
        font-size: 1.25vw;
    }
    p {
        min-width: 35%;

        @media (min-width: 600px) {
            min-width: 20%;
        }
        @media (min-width: 900px) {
            min-width: 15%;
        }
    }
    ul {
        list-style: none;
        margin-left: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        li {
            font-size: 11px;
            color: #ffffff;
            padding: 0 0.5rem;
            border-right: 1px solid rgba(255, 255, 255, 0.5);
            &:hover {
                color: #e50f14;
                cursor: pointer;
            }

            @media (min-width: 900px) {
                font-size: 1.0625vw;
            }
        }
    }
`;

export const SearchContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 0.2rem;

    @media (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 4rem 0.2rem;
    }
    @media (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1440px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;
