import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const DashboardContainer = styled.div`
    position: relative;
    top: -50px ;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 2rem;

    @media screen and (max-width: 480px){
        padding-left: 1rem;
        display: flex;
        justify-content: flex-start;
        max-width: 100%;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar{
            display: none;
        }
    }
    
`

export const Card = styled.div`
    width: 352px;
    max-width: 100%;
    padding: 2rem;
    background-color: ${Colors.grid};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        font-size: 2rem;
        color: ${Colors.textColorCard};
        line-height: 3rem;
    }

    :nth-last-child(1){
        background-color:${Colors.darkgreen};
    }

    @media screen and (max-width: 768px){
        min-width: 327px;
    }

`



