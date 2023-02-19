import styled from "styled-components";
import { StyledContainer } from "../../App.styled";

export const StyledHeader = styled.header`
margin-bottom: 20px;
@media (min-width: 768px){
    margin-bottom: 60px;
}`

export const StyledHeaderContainer = styled(StyledContainer)`
height: 230px;
position: relative;
flex-direction: column;
display: flex;
@media (min-width: 768px){
    background-color: black;
    flex-direction: row;
} `

