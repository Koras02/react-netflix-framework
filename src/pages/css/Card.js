import styled from 'styled-components';
 

export const CardStyle = styled.div`
    min-width: 160px;
    min-height: ${(props) => (props.isLarge ? 'auto' : '90px')};
    overflow: hidden;
    border-radius: 0.2rem;
    margin-right: 0.2rem;
    position: relative;

    @media (min-width: 600px) {
        min-width: 30vw;
    }
    @media (min-width: 900px) {
        min-width: 20vw;
    }
    @media (min-width: 1440px) {
        min-width: 15vw;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
        &:hover {
            transform: scale(1.05);
            z-index: 1;
            cursor: pointer;
        }
    }
`;