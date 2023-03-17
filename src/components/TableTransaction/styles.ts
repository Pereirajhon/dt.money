import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const ContainerTable = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 2rem auto 0;
    table {
        width: 100%;
        border: 1px solid blue;
        th {
            padding: 1rem 2rem;
            line-height: 3rem;
            text-align: left;
        }

        tr{
            color: #fff;
        }

        td {
            padding: 1rem 2rem;
            line-height: 2rem;
            background-color: ${Colors.grid};
            border: 1px solid orange;
            &.positive{
                color: ${Colors.positive}
            }

            &.negative{
                color: ${Colors.negative}
            }
        }

        @media(max-width: 480px){
            
        }
    }

`