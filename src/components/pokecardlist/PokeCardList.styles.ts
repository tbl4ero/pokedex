
import styled from "styled-components";

export const StyledList = styled.div`
max-width: 1200px;
width: 80%;
margin: 0 auto;
flex-direction: column;
`;

export const SearchField = styled.input`
padding: 10px 0;
text-indent: 10px;
width: 100%;
margin: 10px 0;
border-radius: 12px;
outline: none;
border: none;
`;

export const CardGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, 270px);
padding: 10px;
justify-content: center;
grid-gap: 20px;
`;