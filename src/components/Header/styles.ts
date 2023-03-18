import styled from 'styled-components'
import { Colors } from '../../Styles/colors';

export const Container = styled.header`
    background-color: ${Colors.header} ;
    padding: 2.5rem 1rem 7rem ; 
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    button{
        background: ${Colors.buttonHeader};       
        color: #ffffff;
        font-weight: 600;
        padding: 0 1.5rem;
        height: 3rem;
        border: none;
        border-radius: 0.25rem;
        transition: 0.2s;
        font-size: 1rem;

        &:hover {
            filter:brightness(0.9);
        }

    }

    

`;