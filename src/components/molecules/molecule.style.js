import styled from "styled-components";

export const NavbarStyle = styled.div`
   .navbar-section{
    box-shadow: 0 2px 4px rgba(33, 51, 67, 0.048);
    font-family: 'Poppins', sans-serif;
   }
   .navbar{
    display: grid;
    grid-template-columns: 15% 65% 20%;
    width: 75%;
    margin: auto;
    padding: 0.7% 0;
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

   .navbar .logo-section img{
    width: 240px;
   }
   .button-section p{
    display: flex;
    align-items: center;
    float: right;
   }
   .button-section p svg{
    width: 40px;
    padding: 0;
    margin: 0;
   }
   .button-section p h6 svg{
    width: 15px;
    height: 15px;
    margin-left: -5px;
   }
   .button-section p h6{
    margin: 0;
    font-size: 1.3rem;
    margin-left: 3%;
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
   .button-section{
    cursor: pointer;
   }
   .button-section button{
    float: right;
    margin-left: 4%;
    padding: 3% 8%;
    font-size: 1.1rem;
    color: #6000F9;
    border: 1px solid #6000F9;
    background-color: white;
    border-radius: 2px;
    font-weight: 400;
    transition: 1s ease;
    cursor: pointer;
        font-family: 'Poppins', sans-serif;
   }
   .button-section button:hover{
    color: white;
    background-color: #6000F9;
   }
   .button-section button:hover a{
    color: white;
   }
   .button-section button a{
    color: #6000F9;
    text-decoration: none;
    font-weight: 1000;
    font-family:  'DM Sans', sans-serif;
   }
   .burger{
    display: none;
   }
   .response-bar{
    /* display: none; */
    position: fixed;
    z-index: 10;
    
   }
   .burger-cut{
    display: none;
   }
   .response-bar{
    left: -100%;
   }
   @media screen and (max-width:1600px) {
    .navbar{
    grid-template-columns: 17% 63% 20%;
   }
}
   @media screen and (max-width:1000px) {
    .menu-section ul{
        display: none;
        margin: 0;
        padding: 0;
    }
    .navbar .logo-section img{
    width:180px;
    padding: 10% 0;
   }
    .response-bar ul li{
        list-style: none;
        margin-left: -6%;
        padding: 0;
    }
    .navbar{
        width: 90%;
    }
    .navbar-section .button-section{
        
        display: none;
    }
    .navbar .logo-section a img{
        padding: 5%;
    }
    .logo-section h3{
        font-size: 1.4rem;
    }
    .burger{
        display: block;
        transition: 1s ease;
        position: relative;
    }
    .burger-icon.remove{
        display: none;
    }
    .burger-cut{
        display: none;
        position: relative;
    }
    .burger-cut.cuticon{
        display: block;
    }
    .burger.remove{
        display: none;
    }
    .burger svg{
        width: 30px;
        position: absolute;
        right: 0;
        top: 0;
    }
    .burger-cut svg{
        width: 30px;
        position: absolute;
        top: 0;
        right: 0;
    }
    .burger button{
        background-color: white;
        border: none;
    }
    .burger-cut button{
        background-color: white;
        border: none;
    }
    .response-bar{
        background-color: #f2f2f2;
        position: fixed;
        top: 0;
        left: -100%;
        width: 60%;
        height: 100%;
        transition: 1s ease;
    }
    .response-bar.open{
        left: 0;
    }
    .response-bar .logo-section{
        margin-left: 6%;
        margin-bottom: 6%;
    }
    .response-bar ul li{
        margin-bottom: 10%;
    }
    .response-bar ul li a{
        color: black;
        text-decoration: none;
    }
    .response-bar .button-section button{
        float: none;
        margin-left: 0;
        margin-bottom: 3%;
    }
    .response-bar .button-section{
        float: none;
        display: flex;
        flex-direction: column;
        margin: 2% -8%;
    }
    .response-bar .button-section{
        width: 70%;
    }
    .response-bar .button-section button{
        background-color: #f2f2f2;
    color: #6000F9;
    border: 1px solid #6000F9;
    padding: 2% 15%;
    margin: 0% 0;
    margin-bottom: 12%;
    }
    .button-section button:hover a{
    color: #6000F9;
   }
    .response-bar .button-section button a{
        font-size: 0.9rem;
    }
    .response-bar .logo-section{
        display: flex;
        justify-content: space-between;
        width: 85%;
    }
    .response-bar .logo-section img{
        width: 180px;
        margin-top: 5%;
    }
   }
`;



export const CardStyle = styled.div`
.single-card{
    width: 100%;
    display: grid;
    grid-template-columns: 30% 60%;
    margin-bottom: 0.3%;
    border: 1px solid #eae6e6;
    /* box-shadow: 0.2px 0.2px 1px 1px #a5a4a41a; */
    align-items: center;
    position: relative;
    font-family: 'Poppins', sans-serif;
}
.single-card .image-section{
    width: 100%;
    height: 290px;
}
.single-card .image-section img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.text-section{
    margin-left: 3%;
    padding: 3%;
}
.text-section h3{
    font-size: 1.5rem;
    font-weight: 500;
    color: #6000F9;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
}
.text-section p{
    padding: 0;
    margin: 0;
    color: gray;
    font-size: 1rem;
    margin-top: 0px;

}
.text-section p b{
    font-weight: 400;
    margin-left: 5px;
}
.text-section h4{
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 8px;
    color: #2e2d2d;
    padding: 0;
    margin: 0;
    margin-top: 7px;
    color: black;
}
.text-section button{
    background-color: #6000F9;
    color: white;
    border: none;
    padding: 2% 5%;
    border-radius: 2px;
    font-size: 1rem;
    margin-top: 10px;

}
.social-buttons{
    /* position: absolute; */
    right: 3%;
    top: 3%;
}
.social-buttons ul{
    display: flex;
    list-style: none;
    align-items: center;
}
.social-buttons a svg{
    color: #808080d6;
    width: 30px;
    object-fit: cover;
    aspect-ratio: 1/1;
}
.text-section button a{
    color: white;
    text-decoration: none;
}
.text-section ul{
    display: flex;
    /* grid-template-columns: auto auto auto; */
    width: 60%;
    align-items: center;
    padding: 1%;
    list-style: none;
    margin: 0;
    padding: 0;
    
    margin-top: 5px;
}
.text-section ul li{
    /* font-size: 0.9rem; */
    background-color: white;
    margin-right: 5px;
    /* margin-bottom: 5px; */
    border-radius: 2px;
    /* padding: 5px; */
    text-align: center;
}
.social-buttons ul li a{
    margin: 0;
    padding: 0;
}
.text-section p svg{
    align-items: center;
    margin-top: 2px;
}
@media screen and (max-width:1000px){
    .filters-section{
        display: none;
    }
    .text-section h3{
        font-size: 1.1rem;
        margin-bottom: 0px;
        margin-bottom: 5px;
    }
    .single-card{
        grid-template-columns: 30% 65%;
    }
    .single-card .image-section{
        height: 100%;
    }
    .text-section ul{
        /* font-size: 0.7rem; */
        display: none;
    }
    .text-section p{
        font-size: 0.8rem;
        /* margin: 3px 0; */
        padding: 0;
    }
    .text-section h4{
        font-size: 0.9rem;
    }
    .text-section button{
        margin-top: 6px;
    }
    .text-section button a{
        font-size: 0.9rem;
    }
    .single-card .image-section img{
    width: 100%;
    height: 190px;
    object-fit: cover;
}
}
`;

export const LoaderStyle = styled.div`
.loader-section{
    height: 100vh;
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #6000F9; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
  left: 45%;
  top: 40%;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@media screen and (max-width:1000px){
    .loader{
        width: 50px;
        height: 50px;
        left: 38%;
    }
}
`;

export const ReviewCardStyle = styled.div`
    .card-section{
        border: 1px solid #80808057;
        padding: 2%;
        margin: 2% 0;
    }
    .rating{
        display: flex;
        width : 13%;
        margin: 1% 0;
        justify-content: space-between;
    }
    .card-section h4{
        margin: 0;
        font-size: 1.2rem;
        font-weight: 400;
    }
    .card-section h5{
        font-size: 1.2rem;
        margin: 6px 0;
        font-weight: 600;
    }
    .date p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: gray;
        font-size: 0.9rem;
        margin: 7px 0;
    }
    @media screen and (max-width:1000px){
    .card-section h4{
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
    }
    .card-section h5{
        font-size: 1rem;
        margin: 6px 0;
        font-weight: 500;
    }
    .card-section p{
        font-size: 0.9rem;
        color: #535151;
    }
    .date p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: gray;
        font-size: 0.8rem;
        margin: 7px 0;
    }
}
`;

export const ThanksStyle = styled.div`
    .thanks-section{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        text-align: center;
    }
    .thanks-icon svg{
        width: 140px;
        height: 140px;
    }
    .thanks-text h1{
        font-size: 2.2rem;
        margin: 10px;
    }
    .thanks-text p{
        font-size: 1.4rem;
        margin: 0;
    }
    .thanks-text button{
        margin-top: 3%;
        background-color: #6000F9;
        border: none;
        color: white;
        padding: 2% 4%;
    }
    .thanks-text button a{
        color: white;
        font-size: 1.2rem;
        text-align: center;
        text-decoration: none;
    }
    @media screen and (max-width:1000px){
        .thanks-section{
            width: 90%;
        }
        .thanks-icon svg{
            width: 70px;
            height: 70px;
        }
        .thanks-text p{
            font-size: 1.1rem;
        }
        .thanks-text h1{
            font-size: 1.4rem;
        }
        .thanks-text button{
            padding: 1.5% 2.5%;
        }
        .thanks-text button a{
            font-size: 1rem;
        }
    }
`;

export const FooterStyle = styled.div`
    .footer-section{
        background-color: #f6f9fc;
        margin-top: 1%;

    }
    .footer{
        display: grid;
        grid-template-columns: 35% 20% 20% 20%;
        padding: 3% 3% 2% 3%;
        width: 75%;
        margin: auto;
    }
    .footer .line p{
        width: 80%;
    }
    .footer .line .logo-section img{
        width: 60%;
    }
    .footer ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .line .social-links{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
    .line .social-links li svg{
        width: 40px;
        height: 40px;
        padding: 10px;
        color: #6000F9;
        border-radius: 50%;
        border: 1px solid #6000F9;
        cursor: pointer;
        transition: 1s ease;
    }
    .line .social-links li svg:hover{
        background-color: #6000F9;
        color: white;
    }
    .line p{
        font-size: 1.1rem;
    }
    .line ul li{
        padding: 2%  0;
        font-size: 1.1rem;
    }
    .line ul li a{
        color: black;
        text-decoration: none;
    }
    .line ul li b{
        font-weight: 500;

    }
    .copy {
        text-align: center;
        padding-bottom: 1%;
    }
    .copy h5{
        font-size: 1.1rem;
        margin: 0;
        padding: 0;
        font-weight: 400;
    }
    @media screen and (max-width:1000px){
    .copy h5{
        font-size: 0.9rem;
    }
    .footer{
        grid-template-columns: auto;
        width: 85%;
        padding: 5%;
    }
    .footer-section{
        margin-top: 4%;
    }
    .footer .line .logo-section img{
        width: 65%;
        padding: 3% 0;
    }
    .footer .line p{
        margin: 1% 0;
        width: 95%;
    }
    .footer ul li{
        padding: 1% 0;
    }
    .footer .line h3{
        margin-top: 4%;
        margin-bottom: 0;
        padding-bottom: 1%;
        font-size: 1rem;
        font-weight: 600;
    }
    .line p{
        font-size: 0.9rem;
    }
    .line ul li{
        font-size: 0.9rem;
    }

}
`;