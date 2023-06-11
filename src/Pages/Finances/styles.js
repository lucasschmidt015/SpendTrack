import styled from "styled-components";

export const FinancesContainer = styled.div`
    background-color: rgb(12, 7, 7);
    height: 100vh;
    color: #FFF;
    display: flex;
`;

export const RemainingAreaFinances = styled.div`
    height: 100%;
    width: calc(100% - 60px);
    margin-left: 60px;
    display: flex;
    padding: 25px 0;
    align-items: center;
    flex-direction: column;

    h1 {
        margin-bottom: 18px;
    }
`;

export const Earnings = styled.div`
    width: 88%;
    height: 90px;
    border-radius: 7px;
    background-color: #141111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 28px;
    font-size: 20px;

    button {
        width: 165px;
        height: 45px;
        border-radius: 7px;
        border: none;
        background-color: #5F00D8;
        color: #fff;
        font-size: 17px;
        transition: ease 0.3s;
    }

    button:hover{
        transform: scale(1.03);
        background-color: #6f0df0;
    }
`;

export const Expenses = styled.div`
    display: flex;
    flex-direction: column;
    width: 88%;
    height: auto;
    margin-top: 35px;
    

    #TitleExpenses {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 60px;
        justify-content: space-between;
        align-items: center;

        h1 {
            width: 55%;
            text-align: end;
        }
        
        button {
            width: 102px;
            height: 38px;
            border: none;
            border-radius: 7px;
            background-color: #5F00D8;
            color: #fff;
            font-size: 18px;
            transition: ease 0.3s;
        }

        button:hover{
            transform: scale(1.03);
            background-color: #6f0df0;
        }
    }

`;

export const GridExpenses = styled.div`
    border-radius: 7px;
    background-color: #141111;
    height: 710px;

    table {
        
    }
`;