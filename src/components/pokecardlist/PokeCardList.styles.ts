import styled from "styled-components";

export const StyledList = styled.div`
    max-width: 1400px;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    margin-top: 40px;
    flex-wrap: wrap;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 230px);
    grid-gap: 20px;
    justify-content: center;
`;