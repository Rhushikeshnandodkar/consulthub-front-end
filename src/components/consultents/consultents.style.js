import styled from "styled-components";

export const ConsultentListStyle = styled.div`
.main-section{
    display: grid;
    grid-template-columns: 30% 70%;
    width: 75%;
    margin: auto;
    font-family: 'Poppins', sans-serif;
}
.filters-section{
    border: 1px solid #fff8f8;
    box-shadow: 0.2px 0.2px 1px 1px #a5a4a41a;
    padding: 5% 0% 15% 2%; 
    width: 90%;
}
.filter-box{
    margin-left: 4%;
}
.filter-box h3{
    font-size: 1.5rem;
    font-weight: 500;
    color: black;
}
.category-input{
    margin: 3% 0;
}
.category-input label{
    font-size: 1.1rem;
}
.category-input input{
    margin-top: 2%;
    padding: 1.8%;
    width: 90%;
    border: 1px solid #f9f0f0;
    font-size: 0.9rem;
}
.booleans{
    margin-top: 6%;
}
.booleans .checkbox-container{
    padding-bottom: 3%;
}
.checkbox-container label{
    font-size: 1rem;
    color: #262424;
    margin-left: 1%;
}
.dropdown-container{
    margin-top: 5%;
}
.dropdown-container label{
    font-size: 1rem;
    margin-top: 3%;
    color: #262424;
}
.dropdown-container select{
    margin-top: 2%;
    border: 1px solid #f9f0f0;
    -webkit-appearance: none;
  -moz-appearance: none;
    font-size: 0.9rem;
    padding: 2% 5%;
    width: 90%;
    background-color: white;
    background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  border: 1px solid #dfdfdf;
}
.cards-list{
    display: grid;
    grid-template-columns: auto;
    gap: 20px;
}

`;

export const SearchStyle = styled.div`
    .search-bar{
        font-family: 'Poppins', sans-serif;
        width: 60%;
        margin: 2% auto;
        align-items: center;
        gap: 1px;
    }
    .search-bar .search-field{
        display: grid;
        grid-template-columns: 40% 60%;
        margin: auto;
    }
    .search-field input{
        width: 100%;
        padding: 15px;
        font-size: 1.1rem;
        border: 1px solid #f1e9e9;
    }
    .search-field select{
        font-family: 'Poppins', sans-serif;
        width: 100%;
        padding: 13.5px;
        font-size: 1.1rem;
        border: 1px solid #f1e9e9;
        background-color: white;
    border: 1px solid #f9f0f0;
    -webkit-appearance: none;
  -moz-appearance: none;
    background-color: white;
    background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
  border: 1px solid #dfdfdf;
    }
    
    .language-suggetions{
        display: none;
    }
    .search-field input:focus{
        border: none;
        border: 1px solid #cbc5c5;
        outline: none;
    }
    .input-language input:focus .language-suggetions{
        display: block;
    }
    .search-field input::placeholder{
        color: gray;
        padding-left: 2%;
    }
    .button-section button{
        width: 100%;
        font-size: 1.1rem;
        font-weight: 500;
        padding: 10px;
        background-color: #6000F9;
        border: none;
        color: white;
    }
    @media screen and (max-width:1000px){
    .search-bar{
        width: 80%;
        margin: 6% auto;
    }
    .search-field{
        margin: auto;
        width: 100%;
    }

}
`;

export const LoginPageStyle = styled.div`
    .logo-section{
        margin: 1% auto;
        width: 85%;
        padding: 1%;
        font-family: 'Poppins', sans-serif;
    }
    .logo-section h3{
    font-size: 1.7rem;
    color: black;
    font-weight: 700;
   }
   .logo-section h3 b{
    color: #6000F9;
    font-weight: 700;
    margin: 1px;
    border-radius: 2px;
   }
   .form-section{
    margin: 2% auto;
   }
   .login-page{
    display: grid;
    grid-template-columns:  auto 50%;
    gap: 2%;
    width: 80%;
    margin: auto;
    /* position: absolute; */
    align-items: center;
    padding: 0;
    
   }
   .image-section{
    width: 100%;
   }
   .image-section .image-part img{
    width: 95%;
    float: right;
   }

   .google-login img{
    width: 15%;
    margin-right: 1.2%;
    object-fit: cover;
   }
   .form-section h2{
    font-size: 2rem;
    padding: 0;
    margin: 0;
   }
   .form-section h4{
    font-size: 1.2rem;
    color: gray;
    font-weight: 500;
    margin-top: 7px;
    padding: 0;
    margin-bottom: 5px;
   }
   .form-section h3{
    margin: 3px;
   }
   .form-section form{
    display: flex;
    flex-direction: column;
    margin-top: 4%;
   }
   .form-section form input{
    background-color: white;
    border: none;
    padding: 3%;
    font-size: 1.2rem;
    margin: 1.2% 0;
    border: 1px solid #80808057;
   }
   .form-section h3 b{
    color: #6000F9;
   }
   .form-section form button{
    background-color: #6000F9;
    padding: 3%;
    border: none;
    color: white;
    font-size: 1.3rem;
    margin-top: 2%;
   }
   .form-section p{
    font-size: 1rem;
    margin: 5%;
    color: gray;
    text-align: center;
   }
   .google-login-button{
    display: grid;
    grid-template-columns: 40% 40%;
    margin: auto;
    width: 100%;
    padding: 2% 0;
    align-items: center;
    border: 1px solid #80808057;
   }
   .google-login .google-login-text p{
    font-size: 1.1rem;
    color: black;
    margin: 0;
    float: left; 
   }
   .google-login-button .google-login-image img{
    float: right;
   }
   .login-page p b{
    color: #6000F9;
   }
`;