import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const ContainerTable = styled.div`
    max-width: 1120px;
    margin: 2rem auto 0;

    table {
        width: 100%;
        
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

            &.positive{
                color: ${Colors.positive}
            }

            &.negative{
                color: ${Colors.negative}
            }
        }
    }

`