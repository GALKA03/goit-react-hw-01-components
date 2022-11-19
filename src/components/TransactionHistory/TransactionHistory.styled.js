import styled from 'styled-components';

export const Conteiner = styled.table`
width: 500px;
height:400px;
border:1px;
font-size:14px;
background-color:rgb(249, 249, 249);
margin-left:auto;
margin-right:auto;
border-collapse:collapse;
text-align:center;

`
export const HeadLine = styled.th`
border-right:0.5px solid white;
`
export const HeadTablet = styled.tr`
background-color:rgb(97, 174, 174);
color: white;
font-size: 16px;
text-transform:uppercase;

`
export const Zebra = styled.tr`
cursor: pointer;
&:nth-child(2n) { 
 background-color: rgb(225, 217, 217);}
&:hover{
    background-color:goldenrod;
}

`
export const Colomn = styled.td`
padding-top:5px;
padding-bottom:5px;
border-right:0.5px solid rgb(97, 174, 174);



`