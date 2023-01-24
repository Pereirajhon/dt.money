import styled from 'styled-components';
import { Colors } from '../../Styles/colors';

export const ContainerModal = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2{
        margin-bottom: 1.5rem;
    }

    input, button{
        border: none;
        font-size: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        border: none;
    }

    input[type= 'text']{
        background-color: ${Colors.search};
        outline: none;
        color: ${Colors.textBase};

        &::placeholder {
            color: #7C7C8A;
        }
    }
    
    button[type='submit'] {
        background-color: ${Colors.buttonHeader};
        color: #ffffff;
        margin-top: 1rem;
        font-weight: 600;
        transition: 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }

`;

export const BtnsContainer = styled.div`
    display: flex;
    gap: 1rem;   

`

interface TransactionBtnVariants {
    isActive ?: boolean
}

export const RadioBox = styled.button<TransactionBtnVariants>`
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #fff;
    background-color: ${Colors.grid};

    &.withDown{
    background-color: ${Colors.cardSaida};
    }

    &.deposit{
        background-color: ${Colors.darkgreen};
     
    }

`
