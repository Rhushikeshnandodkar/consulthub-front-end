import styled from "styled-components";

export const NavbarStyle = styled.div`
   .navbar-section{
    box-shadow: 0 2px 4px rgba(33, 51, 67, 0.048);
    font-family: 'Poppins', sans-serif;
   }
   .navbar{
    display: grid;
    grid-template-columns: 8% 78% 14%;
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
   .button-section p{
    display: flex;
    align-items: center;
    float: right;
   }
   .button-section p h6{
    font-size: 1.1rem;
    margin: 0;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
   }
   .button-section p svg{
    width: 40px;
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
   .button-section button a{
    color: white;
    text-decoration: none;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
   }
   .burger{
    display: none;
   }
   .response-bar{
    /* display: none; */
    position: fixed;
    
   }
   .burger-cut{
    display: none;
   }
   .response-bar{
    left: -100%;
   }
   @media screen and (max-width:1000px) {
    .menu-section ul{
        display: none;
        margin: 0;
        padding: 0;
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
    .logo-section h3{
        font-size: 1.4rem;
    }
    .burger{
        display: block;
        transition: 1s ease;
    }
    .burger-cut{
        display: none;
    }
    .burger-cut.cuticon{
        display: block;
    }
    .burger.remove{
        display: none;
    }
    .burger svg{
        font-size: 2rem;
        width: 30px;
    }
    .burger-cut svg{
        font-size: 2rem;
        width: 30px;
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
        margin-left: 10%;
    }
    .response-bar ul li{
        margin-bottom: 10%;
    }
    .response-bar ul li a{
        color: black;
        text-decoration: none;
    }
    .response-bar .button-section{
        float: left;
    }
    .response-bar .button-section button{
        background-color: #f2f2f2;
        color: #6000F9;
        border: 1px solid #6000F9;
    }
    .response-bar .logo-section{
        display: flex;
        justify-content: space-between;
        width: 85%;
    }
   }
`;



export const CardStyle = styled.div`
.single-card{
    width: 100%;
    display: grid;
    grid-template-columns: 25% 55%;
    margin-bottom: 1%;
    border: 1px solid #fff8f8;
    box-shadow: 0.2px 0.2px 1px 1px #a5a4a41a;
    align-items: center;
    font-family: 'Poppins', sans-serif;
}
.single-card .image-section{
    width: 100%;
    height: 250px;
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
    font-size: 1.4rem;
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
    font-size: 0.8rem;
    margin-top: 2px;

}
.text-section p b{
    font-weight: 400;
    margin-left: 5px;
}
.text-section h4{
    font-size: 1.1rem;
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
    font-size: 0.9rem;
    margin-top: 10px;

}
.text-section button a{
    color: white;
    text-decoration: none;
}
.text-section ul{
    display: grid;
    grid-template-columns: auto auto auto;
    width: 60%;
    padding: 3%;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 7px;
}
.text-section ul li{
    font-size: 0.8rem;
    background-color: white;
    border: 1px solid #2e2d2d26;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 2px;
    padding: 5px;
    text-align: center;
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
        font-size: 1rem;
        margin-bottom: 0px;
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
        font-size: 0.7rem;
        margin: 0;
    }
    .text-section h4{
        font-size: 0.8rem;
        margin: 0;
    }
    .text-section button{
        margin-top: 6px;
    }
    .text-section button a{
        font-size: 0.8rem;
    }
}
`;

export const LoaderStyle = styled.div`
    .single-card{
    width: 100%;
    display: grid;
    grid-template-columns: 25% 55%;
    margin-bottom: 1%;
    border: 1px solid #fff8f8;
    /* box-shadow: 0.2px 0.2px 1px 1px #a5a4a41a; */
    align-items: center;
    position: relative;
    background-color: #80808021;
    overflow: hidden;
}
.loader-text{
    position: absolute;
    width: 200px;
    height: 250px;
    background-color: white;
    top: 0;
    left: 0;
    filter: blur(40px);
    animation: LoaderAnimation ease infinite 1s;
}
@keyframes LoaderAnimation {
    0%{
        left: 0;
        top: 0;
    }
    100%{
        left: 80%;
    }
}
.single-card .image-section{
    width: 100%;
    height: 250px;
    background-color: #80808042;
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
`;