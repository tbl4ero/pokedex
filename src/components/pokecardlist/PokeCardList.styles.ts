
import styled from "styled-components";

export const StyledHeader = styled.div<{ scrolled: number, minimized: boolean }>`
    height: 70px;
    display: grid;
    position: ${props => props.scrolled ? 'fixed' : 'sticky'};
    top: 0;
    transition: .2s ease-in-out;
    cursor: ${props => props.scrolled && 'pointer'};
    width: 100%;
    border-radius: ${props => props.scrolled ? '0 20px 20px 0' : 'none'};
    grid-template-columns: 100px auto 100px;
    background-color: #56AEFF;
    margin-bottom: 40px;
    ${props => props.scrolled && `
        width: ${props.minimized ?'5%' : '20%'};
        :hover {
            box-shadow: 0 0 2px black;
        }
    `
    }
`;

export const StyledList = styled.div`
    max-width: 1200px;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
`;

export const SearchField = styled.input`
    justify-self: center;
    border-radius: 0;
    background: rgba(0,0,0,0);
    color: white;
    outline: none;
    height: 18px;
    margin: auto 0;
    font-family: Roboto;
    caret-color: black;
    border: none;
    font-weight: 700;
    border-bottom: 1px solid rgba(255,255,255,.4);
    :after {
        content: url()
    }
    ::placeholder {
        color: rgba(255,255,255,.4);
    }
    :hover {
        border-bottom: 1px solid rgba(255,255,255,.7);

    }
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 220px);
    grid-gap: 20px;
    justify-content: center;
`;