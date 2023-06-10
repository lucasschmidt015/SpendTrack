import styled from "styled-components";

export const SidebarContainer = styled.div`
    height: 100vh;
    color: #FFF;
    width: ${props => props.showDescription ? '200px' : '60px'};
    background-color: #141111;
    display: flex;
    flex-direction: column;
    transition: ease 0.2s;
    position: fixed;
    z-index: 10;

    @media screen and (max-width: 600px) {
       height: 60px;
       width: 100%;
       flex-direction: row; 
       bottom: 0;
    }
`;


export const ButtomHide = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    margin-left: ${props => props.showDescription ? '200px' : '62px'};
    align-items: center;
    width: 50px;
    height: 50px;   
    transition: ease 0.2s;

    svg{
        font-size: 20px;
        color: #FFF; 
    }

    svg:hover{
        font-size: 25px;
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const ButtomModule = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px;
    transition: ease 0.3s;
    background-color: ${props => props.active ? '#5F00D8' : '#141111'};

    &:hover{
        background-color: #5F00D8;
        cursor: pointer;
    }

    &:last-child{
        margin-top: calc(100vh - 50px - 50px - 50px - 50px - 55px);  
    }

    svg{
        font-size: 30px;
        margin-right: ${props => props.showDescription ? '100px' : '0px'};
    }

    p {
        font-size: 14px;
        position: absolute;
        left: 80px; 
        display: ${props => props.showDescription ? 'block' : 'none'};
    }

    @media screen and (max-width: 600px) {
        height: 100%;
        width: 60px;

        &:last-child {
            margin-top: 0;
            margin-left: calc(100% - 50px - 50px - 50px - 50px - 100px);
        }
    }
`;