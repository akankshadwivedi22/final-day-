import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; // Remove margin from body
    background-color: white; 
    //E6E6FA
  }
`;

export const CountdownComponent = styled.div`
  background-color: white;
  height:180px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;  

  h2{
 color: #000066;

  }

`;

export const TimerBox = styled.div`
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0eff7;

 
`;

export const TimeUnit = styled.span`
  font-size: 20px;
  padding: 10px;
  color: #2c3e50;
  
  &::after {
    content: '|'; /* Adds the vertical line character */
    margin-left: 10px; /* Space between number and line */
 color:#2c3e50; 
  }

  &:last-child::after {
    content: '';
  }
`;

// export const ModalCardWrapper=styled.div`
// height:300px;
// display:flex;
// align-items:center;
// justify-content:center;

// `

export const ModalCardWrapper = styled.div`
height:300px;
display:flex;
align-items:center;
justify-content:center;

  &.modal-transition-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  &.modal-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  &.modal-transition-exit {
    opacity: 1;
    transform: translateY(0);
  }

  &.modal-transition-exit-active {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const ModalCard = styled.div`
margin-top:50px;
  height:320px;
  width:800px;
  display: flex; 
  flex-direction: column;
  border-radius:5px;
  background-color:white;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

export const TextWrapper=styled.div`
padding-top:30px;
height:180px;
font-family: 'Poppins', sans-serif;
text-align:center;
justify-content:center;
display:flex;
align-items:center;
font-size:20px;
color:#000957;
`
export const ButtonWrapper = styled.div`
  height:80px;
  margin-top: auto; 
  display:flex;
  justify-content:center;
  align-items:center;
  gap:250px;
  padding-left:20px;
  padding-right:20px;
  background-color:#f0f8fd;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

 button{
  height:40px;
  width:200px;
  border:none;
  background-color:white;

  &:hover{
  color:#000957;
 background-color:#2c3e50;
 color:white;
   cursor:pointer;
  font-size:18px;
  }

  &:disabled {
    opacity: 0.5;  /* Inactive button appearance */
    background-color:white;
    color:black;
    font-size:14px;
  }
 }
`
export const Footer = styled.div`
  height: 30px;
    background-color: #e0eff7; 
  display: flex;
  justify-content: center;
  align-items: center;
  // border-top: 2px solid #ddd;
  margin-top: auto;
      color:#000957; 
`;


export const BdayOldNewCard = styled.div`
  padding: 20px;
  background-color: #e0eff7;
  border-radius: 10px;
  width: 80%;
  height:480px;
   overflow:auto;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); /* Add box shadow */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slight scale-up on hover */
    width: 85%; /* Expand the width on hover */
    height: 510px; /* Increase height on hover */
  }
`;


export const Header=styled.div`
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#F4FFCC;
  `

  export const Section=styled.div`
  height:300px;
  `

export const ItemsWrapper=styled.div`
height:400px;
margin-top:20px;
overflow:auto;
`
export const ItemList=styled.div`
background-color:white;
height:100px;
display:flex;
align-item:center;

p{
text-align:left;
margin-left:20px;
margin-right:20px;
  display: block;

}
`

export const GobackButton=styled.div`
height:50px;
display:flex;
align-items:center;
justify-content:center;
margin-top:30px;

 button{
  height:40px;
  width:200px;
  border:none;
  background-color:white;

  &:hover{
  background-color:#2c3e50;
 color:white;
  color:white;

  cursor:pointer;
  font-size:16px;
  }
}
`

export const Section2 = styled.div`
height:350px;
display:flex;
align-items:center;
 justify-content:center;
background-color:white;

p{
text-align:left;
margin-left:20px;
margin-right:20px;
  display: block;
  font-family: 'Poppins', sans-serif;

`

export const GoBackWrapper=styled.div`
height:50px;
display:flex;
align-items:center;
justify-content:center;
margin-top:30px;

 button{
  height:40px;
  width:200px;
  border:none;
  background-color:white;

  &:hover{
  color:#000957;
 background-color:#2c3e50;
 color:white;
  cursor:pointer;
  font-size:16px;
  }
}
  `
