import styled from "styled-components";

export const NewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 12;
    background-color:  rgba(0, 0, 0, 0.459);
`;

export const PromptAreaExpense = styled.div`
    background-color: #000;
    width: 90%;
    height: 90%;
    max-width: 600px;
    max-height: 700px;
    border-radius: 7px;
`;