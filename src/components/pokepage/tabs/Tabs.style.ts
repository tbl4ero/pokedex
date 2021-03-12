import styled from 'styled-components';

export const AttributeHeader = styled.h2<{ active: boolean }>`
    color: ${props => props.active ? '#f5f5f5' : 'white'};
    margin: 20px 10px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration-color: ${props => props.active ? '#f5f5f5' : '#fff'};
    text-underline-offset: 5px;
    text-decoration: ${props => props.active ? 'underline' : ''};
    font-size: 30px;
    position: relative;
    :after{
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        display: block;
        bottom: -2px;
        right: 0;
        background: #fff;
        transition: width .3s ease;
    }
    :hover:after{
        width: 100%;
        left: 0;
        background: #fff;
    }
`;

export const PropertiesContainer = styled.div<{ direction?: string }>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    @media (max-width: 800px) and (min-width: 640px) {
        margin-left: 100px;
    }
`;
