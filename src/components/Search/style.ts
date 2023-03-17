import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const ContainerSearch = styled.form`
    max-width: 1120px;
    width: 100%;
    display: flex;
    margin: auto;  
    margin-top: 1rem;
    gap: 1rem;  

    input{
        background-color: ${Colors.search};
        color: ${Colors.textBase} ;
        flex: 1;
        font-size: 1rem; 
        padding: 1rem;
        border: none;
        outline: none;
    }

    button{
        border: 3px solid${Colors.btnSearch};
        background-color: transparent ;
        color: #fff;
        border-radius: 6px ;
        font-size: 1rem;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        svg{
            color: ${Colors.btnSearch};
            font-weight: bold;
        }

    }

`
    

