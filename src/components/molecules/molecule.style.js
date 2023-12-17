import styled from "styled-components";

export const NavbarStyle = styled.div`
   .navbar-section{
    box-shadow: 0 2px 4px rgba(33, 51, 67, 0.048)
   }
   .navbar{
    display: grid;
    grid-template-columns: 8% 78% 15%;
    width: 75%;
    margin: auto;
    padding: 0% 0;
    align-items: center;
   } 
   .logo-section{
    display: flex;
    align-items: center;
   }
   .logo-section svg{
    width: 50px;
    aspect-ratio: 1/1;
   }
   .logo-section h3{
    font-size: 1.7rem;
    color: black;
    font-weight: 700;
   }
   .logo-section h3 b{
    color: #6000F9;
    /* padding: 2px; */
    font-weight: 700;
    margin: 1px;
    border-radius: 2px;
   }
   .menu-section ul{
    list-style: none;
    display: flex;
   }
   .menu-section ul li{
    margin-left: 4%;
    font-size: 1.1rem;
    cursor: pointer;
   }
   .menu-section ul li a{
    color: black;
    text-decoration: none;
   }
   .button-section button{
    float: right;
    padding: 5%;
    font-size: 1.1rem;
    color: white;
    /* border: 1px solid #6000F9; */
    background-color: #6000F9;
    border: none;
    border-radius: 2px;
    font-weight: 500;
   }
`;

export const SearchStyle = styled.div`
    .search-bar{
        display: grid;
        grid-template-columns: 86% 15%;
        width: 75%;
        margin: 2% auto;
        align-items: center;
    }
    .search-field input{
        width: 100%;
        padding: 0.8% 0% 0.8% 0%;
        font-size: 1rem;
        border: 1px solid lightgray;
    }
    .search-field input::placeholder{
        color: gray;
        padding-left: 2%;
    }
    .button-section button{
        padding: 5.1%;
        width: 100%;
        font-size: 1rem;
        font-weight: 500;
        background-color: #6000F9;
        border: none;
        color: white;
    }
`;