import styled from "styled-components";

export const ConsultentListStyle = styled.div`
.main-section{
    width: 75%;
    margin: auto;
    font-family: 'Poppins', sans-serif;

}
.filters-section{
    border: 1px solid #fff8f8;
    box-shadow: 0.2px 0.2px 1px 1px #a5a4a41a;
    padding: 5% 0% 15% 2%; 
    width: 90%;
    display: block;
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
    grid-template-columns: 50% 50%;
    gap: 20px;
}
@media screen and (max-width:1000px){
    .filters-section{
        display: none;
    }
    .main-section{
        width: 90%;
        grid-template-columns: auto;
    }
    .cards-list{
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
    /* gap: 20px; */
}
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
        padding: 12.2px;
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
        width: 90%;
        margin: 6% auto;
    }
    .search-field{
        margin: auto;
        width: 100%;
    }
    .search-field input{
        padding: 12px 0px;
        font-size: 0.8rem;
    }
    .search-field select{
        padding: 9.5px 5px;
        font-size: 0.8rem;
    }
}
`;

export const LoginPageStyle = styled.div`
.alert h6{
    font-size: 0.9rem;
    margin: 5px 0;
    border: 2px solid #db12125c;
    background-color: #ff00002e;
    padding: 3px;
    font-weight: 400;
    color: #ff0000a8;
}
    .logo-section{
        margin: 8% auto;
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
    width: 75%;
    margin: 4% auto;
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
    cursor: pointer;
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
   .google{
    border: 1px solid #80808057;
    cursor: pointer;
   }
   .google-login{
    display: grid;
    align-items: center;
    grid-template-columns: 20% 75%;
    width: 40%;
    padding: 1%;
    margin: auto;
    justify-content: space-evenly;
   }
   .google-text p{
    margin: 0;
    padding: 0;
   }
   .google-image img{
    width: 100%;
   }
   .form-section{
    width: 90%;
   }
   @media screen and (max-width:1000px){
    .login-page{
        grid-template-columns: auto;
        width: 80%;
        margin: 20% auto;
        z-index: 9;
        border: 1px solid #80808057;
        padding: 4%;
    }
    .form-section{
    width: 100%;
   }
    .form-section h2{
        text-align: center;
        font-size: 1.2rem;
    }
    .form-section h3 {
        text-align: center;
        font-size: 1rem;
        margin: 4px;
    }
    .form-section h4{
        text-align: center;
        font-size: 0.9rem;
    };
    .form-section form input{
        font-size: 0.9rem;
    }
    .form-section form button{
        font-size: 1rem;
    }
    .form-section p{
        font-size: 0.8rem;
    }
    .image-section{
        display: none;
    }
    .google-login{
        width: 50%;
        padding: 0.5%;
    }
   }
`;

export const ConsutltentDetails = styled.div`
    .consultent-details{
        width: 75%;
        margin: 2% auto;
    }
    .first-box{
        display: grid;
        grid-template-columns: 25% 70%;
        gap: 3%;
        border: 1px solid #80808057;
        align-items: center;
    }
    .first-box{
        padding: 0%;
    }
    .first-box .image-section img{
        width: 100%;
        height: 500px;
        object-fit: cover;
    }
    .first-box .text-section h3{
        font-size: 1.5rem;   
        font-weight: 400;
        margin: 1% 0;
        padding: 0;
    }    
    .text-section p{
        margin: 5px 0;
        font-size: 1.1rem;
        color: gray;
    }
    .social-buttons ul li a svg{
        width: 30px;
        height: 30px;
    }
    .social-buttons ul{
        display: flex;
        list-style: none;
        width: 60%;
        margin: 0;
        padding: 0;
    }
    .social-buttons ul li{
        padding: 5px;
        /* border: 1px solid #80808057; */
        margin-right: 5px;
        border-radius: 3px;
    }
    .social-buttons ul li a{
        color: #898989;
    }
    .constultations{
        display: flex;
        justify-content: space-between;
        width: 75%;
    }
    .constultations .consultation-completed{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .constultations .consultation-completed b{
        margin: 0 20px;
        color: #6000F9;
    }
    .rating{
        display: flex;
        width : 20%;
        margin: 1% 0;
        justify-content: space-between;
    }
    .minute-sections{
        margin: 1% 0;
        width: 40%;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        gap: 2%;
    }
    .minute-sections .btn.active{
        background-color: #6000F9;
        border: none;
        margin-right: 1% ;
        padding: 1.1% 2.5%;
        color: white;
        font-size: 1.1rem;
    }
    .minute-sections .btn{
        background-color: #80808057;
        border: none;
        margin-right: 1% ;
        padding: 10% 2.5%;
        color: black;
        cursor: pointer;
        border-radius: 3px;
        font-size: 1.1rem;
        text-align: center;
    }
    .fees{
        font-size: 1.4rem;
        padding: 1% 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    }
    .fees b{
        color: #6000F9;
        margin-right: 2%;
    }
    .btn{
        background-color: #6000F9;
        padding: 1.4% 3%;
        margin: 1% 0;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
    }
    .description ul{
        display: flex;
        /* justify-content: space-around; */
        list-style: none;
        margin: 2% 0;
        width: 80%;
        text-align: center;
        padding: 0;
    }
    .description ul li{
        float: left;
        padding: 3px 10px;
        font-size: 1rem;
        margin-right: 10px;
        border: 1px solid #80808057;
    }
    .second-section{
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 4%;
        width: 75%;
        margin: auto;
    }
    .calender-section{
        border: 1px solid #80808057;
        padding: 2%;
    }
    .calender-section .select-days{
        display: grid;
        grid-template-columns: 33% 33% 33%;
        text-align: center;        
    }
    .calender-section .select-days {
        border-bottom: 2px solid #80808057;
    }
    .calender-section .select-days .day.active{
        border-bottom: 4px solid #6000F9;
        margin-bottom: -2px;
    }
             
    .calender-section .day h3{
        margin: 4px 0;
        font-size: 1.3rem;
        color: black;
        font-weight: 500;
    }
    .calender-section .day p{
        margin: 10px 0;
        font-size: 0.9rem;
        color: gray;
        padding-bottom: 8px;
    }
    .calender-section h3{
        padding: 0;
        margin: 0;
    }
    .calender-section .head{
        font-size: 1.4rem;
        margin: 3%;
        font-weight: 400;
        padding: 0;
    }
    .blocks-section{
        padding: 2%;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        gap: 0%;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .blocks .single-block{
        margin: 4%;
    }
    .blocks .single-block h3{
        padding: 8%;
        font-size: 1.4rem;
        font-weight: 200;
        color: #6000F9;
        border: 1px solid #6000F9;
        border-radius: 3px;

    }
    .user-description{
        width: 71%;
        margin: auto;
        border: 1px solid #80808057;
        padding: 2%;
    }
    .user-description h3{
        font-size: 1.5rem;
        color: black;
        font-weight: 500;
    }
    .user-description p{
        font-size: 1.1rem;
        color: #312f2f;
    }
    .user-description h4{
        margin: 1% 0;
        font-size: 1.3rem;
        color: #312f2f;
        padding: 0;
    }
    .user-description ul{
        list-style: none;
        padding: 0;
    }
    .user-description ul li{
        font-size: 1.2rem;
        margin: 3px 0;
        color: #312f2f;
    }
    .heading{
        color: #312f2f;
        font-weight: 300;
        font-size: 1.4rem;
    }
    .heading h2{
        font-weight: 400;
    }
    .review-section{
        width: 75%;
        margin: 4% auto;
    }
    .review-input label{
        font-size: 1.2rem;
        margin: 1% 0;
    }
    .review-input textarea{
        margin-top: 1rem;
        width: 100%;
        border: 1px solid #89898957;
        padding: 2% 0;
        font-size: 1.1rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .btn a{
        color: white;
        text-decoration: none;
    }
    .stars{
        display: flex;
    }
    .review-input input{
        width: 100%;
        padding: 1% 0;
        border: 1px solid #89898957;
        font-size: 1.1rem;
        margin-top: 1.4%;
    }
    @media screen and (max-width:1000px){
        .consultent-details{
            width: 90%;
            margin-top: 5%;
        }
        .first-box{
            grid-template-columns: 100%;
            gap: 0;
        }
        .text-section{
            padding: 3%;
            padding-bottom: 6%;
        }
        .first-box .image-section img{
            height: 300px;
        }
        .first-box .text-section h3{
            font-size: 1.3rem;
            margin: 1% 0 ;
        }
        .text-section p{
            font-size: 0.9rem;
        }
        .constultations{
            flex-direction: column;
            width: 90%;
        }
        .consultation-completed{
            margin-top: 1%;
        }
        .rating{
            width: 50%;
            margin: 2% 0;
        }
        .description ul{
            display: grid;
            grid-template-columns: auto auto;
            flex-direction: column;
            text-align: center;
            width: 95%;
            margin-top: 2%;
        }
        .description ul li{
            margin-top: 5px;
            font-size: 0.8rem;

        }
        .minute-sections{
            width: 80%;
            margin: 5% 0;
        }
        .minute-sections .btn{
            font-size: 0.9rem;
        }
        .fees{
            font-size: 1.1rem;
            margin-bottom: 2%;
        }
        .btn{
            margin: 1% 0;
            font-size: 1rem;
            padding: 1.8% 4%;
        }
        .user-description{
            width: 86%;
        }
        .user-description h3{
            font-size: 1.1rem;
            margin: 2% 0;
        }
        .review-section{
            width: 90%;
        }
        .user-description h4{
            font-size: 1.1rem;
            font-weight: 400;
        }
        .user-description ul li{
            font-size: 1rem;
        }
        .user-description p{
            font-size: 0.85rem;
            margin: 2% 0;
        }
    }
`;

export const CreateUserProfileStyle = styled.div`
    .heading h1{
        text-align: center;
        margin-top: 2%;
        margin-bottom: 2%;
        font-size: 2rem;
        font-weight: 400;
        color: gray;
    }
    .alert h6{
    font-size: 0.9rem;
    margin: 5px 0;
    border: 2px solid #db12125c;
    background-color: #ff00002e;
    padding: 3px;
    font-weight: 400;
    color: #ff0000a8;
}
.success h6{
    font-size: 0.9rem;
    margin: 5px 0;
    border: 2px solid #0080007a;
    background-color: #0080007a;
    padding: 3px;
    font-weight: 400;
    color: white;
}
    .form-section{
        width: 75%;
        margin: auto;
    }
    .form-section form .first-line{
        display: flex;
        justify-content: space-evenly;
    }

    .form-section form .first-line input{
        width: 90%;
        padding: 1% 1%;
        font-size: 1rem;
        margin-right: 2%;
    }
    .form-text h4{
        margin-top: 2%;
        margin-bottom: 0;
        font-size: 1.1rem;
        font-weight: 500;
    }
    .form-text p{
        font-size: 1rem;
        font-weight: 300;
        margin-top: 0.5%;
    }
    .form-section form input{
        width: 96%;
        padding: 1% 1%;
        border: 1px solid #80808057;
        font-size: 1rem;
    }

    .interests{
        position: relative;
    }
    .interests .button{
        background-color: #80808057;
        display: flex;
        padding: 1% 1%;
        align-items: center;
        font-size: 1rem;
        justify-content: space-between;
        margin: 2% 0;
        border: none;
        font-weight: 300;
        margin-right: 15px;
        border: 3px;
    }
    .selected-options{
        display: flex;
    }
    .interests .button h4{
        margin: 0%;
        font-size: 1rem;
        font-weight: 400;
        margin-right: 20px;
    }
    .interests .button svg{
        width: 25px;
        height: 25px;
        float: right;
        /* margin-left: 1; */
        cursor: pointer;
    }
    .btn{
        margin: 1.3% 0;
        padding: 1% 2%;
        font-size: 1rem;
        border: none;
        background-color: #6000F9;
        color: white;
        border-radius: 3px;
    }
    .interests .suggetions{
        position: absolute;
        background-color: #f7f7f7;
        width: 98.2%;
        margin-top: 1px;
        display: none;
    }
    .interests .suggetions.active{
        display: block;
    }
    .interests .suggetions ul{
        list-style: none;
        margin: 0% 0;
        border-bottom: 0.3px solid #aeabab57;
        padding: 0% 0%;
    }
    .interests .suggetions ul li{
        padding: 1% 1%;
        border-bottom: 0.3px solid #aeabab57;
        cursor: pointer;
    }
    @media screen and (max-width:1000px){
        .heading h1{
            font-size: 1.3rem;
            padding: 2%;
        }
        .form-section{
            width: 90%;
        }
        .first-line{
            flex-direction: column;
        }
        .form-section form .first-line input{
            width: 96%;
            font-size: 0.9rem;
            margin-top: 2%;
            padding: 2%;
        }
        .form-text h4{
            font-size: 0.9rem;
            margin-top: 3%;
        }
        .form-text p{
            font-size: 0.8rem;
            margin-bottom: 2%;
        }
        .form-section form input{
            width: 96%;
            font-size: 0.9rem;
            padding: 2%;
        }
        .selected-options{
            display: grid;
            margin-bottom: 3%;
            grid-template-columns:  50% 50%;
        }
        .selected-options .button{
            padding: 3% 4%;
        }
        .interests .button h4{
            font-size: 0.8rem;
        }
        .btn{
            padding: 2% 4%;
            font-size: 0.9rem;
            margin-top: 4%;
        }
        .suggetions ul li{
            font-size: 0.8rem;
            padding: 2% 1%;
        }
    }

`;

export const EditProfileStyle = styled.div`
    .profile-info-section{
        width: 75%;
        margin: 2% auto;
        border: 0.3px solid #aeabab57;
        padding: 1%;
        position: relative;
    }
    .heading{
        text-align: center;
        margin-top: 2%;
    }
    .heading h1{
        color: #4a4949;
    }
    .edit-icon{
        position: absolute;
        top: 6%;
        right: 2%;
    }
    .edit-icon svg{
        color: gray;
        width: 30px;
    }
    .profile{
        padding: 1%;
    }
    .profile h2{
        font-size: 1.3rem;
        font-weight: 400;
        color: #2d2c2c;
    }
    .profile ul{
        list-style: none;
        padding: 0;
        display: flex;
    }
    .profile ul li{
        font-size: 1.3rem;
        border-radius: 2px;
        background-color: #aeabab57;
        padding: 8px;
        margin-right: 10px;
    }
    .booked-table{
        width: 77.5%;
        margin: auto;
        /* border: 1px solid #aeabab57; */
        padding: 1%;
    }
    .booked-table table{
        width: 100%;
        text-align: center;
        border-collapse: collapse;
    }
    .booked-table table thead{
        background-color: #6000F9;
        border: 1px solid #6000F9;
        width: 100%;
    }
    .booked-table table thead th{
        margin: 0;
        padding: 1%;
        color: white;
        font-size: 1.2rem;
        text-align: left;
    }
    .booked-table table tbody tr {
        border: 1px solid #aeabab57;
    }
    .booked-table table tbody tr td{
        font-size: 1.1rem;
        text-align: left;
        padding: 1%;
    }
    @media screen and (max-width:1000px){
        .profile-info-section{
            width: 90%;
        }
        .profile h2{
            font-size: 0.9rem;
        }
        .edit-icon svg{
            width: 22px;
        }
        .profile ul{
            flex-direction: column;
        }
        .profile ul li{
            font-size: 0.9rem;
            padding: 2%;
            margin: 1% 0;
        }
        .booked-table{
            width: 90%;
        }
        .booked-table table thead th{
            font-size: 1rem;
            padding: 2%;
        }
        .booked-table table tbody tr td{
            font-size: 0.9rem;
            padding: 2%;
        }
    }
`;