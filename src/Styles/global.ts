import {createGlobalStyle} from 'styled-components'
import { Colors } from './colors'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width : 760px) {
        font-size: 87.5%;
    }
    @media (max-width: 480px){
        font-size: 81.25%;
    }
}

body{
    background-color: ${Colors.background};
    color: ${Colors.textBase};
    -webkit-font-smoothing: antialiased;
    
}

body, input, button, textarea {
    font-family: 'Poppins', sans-serif ;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600 ;
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.7;
    cursor: not-allowed;
}

.react-modal-overlay{
    background-color: rgba(0,0,0,0.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content{
    background-color: ${Colors.background};
    max-width: 542px;
    width: 100%;
    padding: 3rem;
    border-radius: 0.5rem;
  
}

`



