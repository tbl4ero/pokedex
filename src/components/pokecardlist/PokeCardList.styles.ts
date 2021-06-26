import styled from "styled-components";

export const StyledList = styled.div`
    max-width: 1200px;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 220px);
    grid-gap: 20px;
    justify-content: center;
`;