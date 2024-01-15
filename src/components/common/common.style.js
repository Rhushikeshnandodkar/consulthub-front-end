import styled from "styled-components";

export const LandingPageStyle = styled.div`
*{
    margin: 0;
    padding: 0;
}
.text-section{
    /* position: relative; */
    text-align: center;
    color: var(--blackish);
    font-family: 'DM Sans', sans-serif;
    position: relative;
    
}

.text-section .text{
    width: 100%;
    height: 52vh;
    top: 0;
    left: 0;
    background-color: #f6f9fc;
}
.text h1{
    font-size: 2.9rem;
    font-weight: 900;
}
.text p{
    font-size: 1.3rem;
    margin-top: 10px;
}
.btn{
    margin-top: 3%;
}
.main-text{
    width: 65%;
    margin: auto;
    padding-top: 5%;
}
.main-text h1 b{
    color: #6000F9;
}
.btn a{
    align-items: center;
    color: white;
    background-color: #6000F9;
    text-decoration: none;
    padding: 10px 15px;
    font-size: 1.1rem;
    margin-right: 10px;
    text-align: center;
    border-radius: 2px;
    border: 1px solid #6000F9;
    transition: 0.7s ease;
}
.btn a:hover{
    background-color: transparent;
    border: 1px solid #6000F9;
    color: #6000F9;
}
.btn a.active{
    background-color: white;
    border: 1px solid #6000F9;
    color: #6000F9;
}
.btn a.active:hover{
    background-color: #6000F9;
    border: 1px solid #6000F9;
    color: white;
    transition: 0.7s ease;
}
@media (max-width:1000px) {
    .text h1{
        font-size: 1.4rem;
    }
    .main-text{
        width: 90%;
        margin: 0% auto;
        padding-top: 8%;
    }
    .text p{
        font-size: 0.9rem;
        width: 95%;
        margin: 2% auto;
    }
    .text .btn{
        display: flex;
        flex-direction: column;
        width: 60%;
        margin: 3% auto;
    }
    .text .btn a{
        font-size: 0.9rem;
        margin-top: 3%;
    }
    .text-section .text{
        height: 40vh;
    }
    .right-side{
        width: 100%;
    }
    .btn a{
        padding: 6px 8px;
        font-size: 1rem;
        margin-left: 0;
        margin-right: 0px;
    }
}

.heading{
    text-align: center;
    margin-top: 2.5%;
}
.heading h2{
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
}
.heading p{
    font-size: 1.1rem;
    margin-top: 7px;
}
.heading p b{
    font-weight: 400;
    color: #6000F9;
}
@media (max-width:1000px) {
    .heading h2{
        font-size: 1.3rem;
    }
    .heading p{
        font-size: 0.9rem;
        width: 80%;
        margin: auto;
    }
    .heading{
        margin-top: 11%;
    }
    .session-section{
        flex-direction: column;
    }
    .host-image img{
        width: 100%;
    }
}

/* guarentee section css  */
.guarentee{
    display: grid;
    grid-template-columns: 53% 45%;
    gap: 2%;
    width: 70%;
    margin: 5% auto;
    align-items: center;
}
.guarentee .left-side{
    width: 100%;
}
.guarentee .right-side video{
    width: 100%;
    opacity: 0.9;

}
.guarentee h3{
    font-size: 3rem;
    font-weight: 400;
    color: #6000F9;
    margin: 3% 0;
}
.guarentee p{
    font-size: 1.3rem;
    color: gray;
    margin-bottom: 0.5%;
}
.guarentee p svg{
    width: 25px;
    height: 25px;
    margin-right: 2%;
}
.guarentee p b{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.left-side button a{
    font-size: 1.3rem;
    margin-top: 3px;
}
.left-side .btn{
    margin-top: 6%;
}
.left-side .btn a{
    font-size: 1.3rem;
    margin: 2% 0;
}
@media (max-width:1000px) {
    .guarentee{
        grid-template-columns: 100%;
        width: 80%;
        margin-top: 7%;
    }
    .guarentee h3{
        font-size: 1.4rem;
    }
    .guarentee p{
        font-size: 1.1rem;
        margin-bottom: 1%;
    }
    .guarentee p svg{
        width: 17px;
        height: 17px;
    }
    .guarentee .btn a{
        font-size: 1rem;
    }
    .guarentee .right-side{
        margin-top: 5%;
    }
}
/* Upcomming Session Css */
.session-section{
    width: 65%;
    margin: 3% auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.host-image{
    position: relative;
}
.social-icons{
    position: absolute;
    top: 0%;
    display: flex;
    flex-direction: column;
    /* background-color: rgba(255, 99, 71, 0.308); */
    background-color: rgba(255, 255, 255, 0.267);
    /* margin-top: 3px; */
}
.social-icons svg{
    width: 40px;
    padding: 5px 9px;
    color: white;
}
.right-side .host-info h3{
    font-size: 1.7rem;
    margin-bottom: 2%;
    font-weight: 600;
}
.right-side .host-info h4 b{
    color: #6000F9;
    font-size: 1rem;
    font-weight: 400;
}
.r-side{
    margin-top: 5%;
}
.r-side ul li{
    padding-bottom: 6%;
    margin-top: -5px;
    border-left: 2px solid #6000F9;
    border-left-style: dashed;
    padding-left: 10px;
    position: relative;
    list-style: none;
}
.dot{
    background-color: #6000F9;
    /* filter: blur(1px); */
    width: 7px;
    aspect-ratio: 1/1;
    position: absolute;
    left: -5px;
    border-radius: 5px;
}
.dot.last{
    bottom: 0;
}
.r-side ul li h4{
    font-size: 1.2rem;
    font-weight: 400;
}
.r-side ul li p{
    font-size: 1rem;
    color: gray;
    margin: 5px 0;
}
.schedule{
    margin-top: 3%;
    margin-bottom: 7%;
}
.schedule p{
    font-size: 1.1rem;
    color: rgb(70, 68, 68);
}
.session-section .btn{
    margin-top: 3%;
}
.right-side{
    margin-top: 1%;
}
@media (max-width:1000px) {
    .r-side ul li h4{
        font-size: 1.1rem;
    }
    .r-side p{
        font-size: 0.9rem;
    }
}
.cards{
    display: grid;
    grid-template-columns: auto auto auto auto;
    width: 75%;
    margin: auto;
}
.single-card{
    text-align: center;
    padding: 7%;
    border: 1px solid rgba(128, 128, 128, 0.342);
    margin: 12% 2%;
    /* box-shadow: 2px 2px 2px 2px rgba(255, 99, 71, 0.329); */
    z-index: 10;
    position: relative;
}
.single-card h3{
    margin-top: 5%;
    font-size: 1.2rem;
    font-weight: 600;
}
.single-card p{
    font-size: 1rem;
    color: gray;
    margin-top: 3%;
}
.single-card h4 svg{
    width: 50px;
    color: #6000F9;
    aspect-ratio: 1/1;
}
.email-input{
    text-align: center;
    margin-top: 1%;
    background-color: #f6f9fc;
    padding: 2%;
}
.email-text h2{
    font-size: 2.4rem;
    color: var(--blackish);
    font-weight: 600;
}
.email-text p{
    font-size: 1.2rem;
    margin-top: 0.2%;
    padding: 0.3% 0;
    color: rgb(80, 79, 79);
}
.input-field{
    margin-top: 1%;
    margin-bottom: 3%;
    align-items: center;
}
.input-field form input{
    padding: 10px;
    width: 20%;
    text-align: left;
    font-size: 1rem;
    border: 1px solid rgba(128, 128, 128, 0.233);
    background-color: #f6f9fc;
}
.input-field form button{
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #6000F9;
    border: 1px solid #6000F9;
    color: white;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.5s ease;
}
.input-field form button:hover{
    background-color: #f6f9fc;
    color: var(--tomato);
}

@media (max-width:1000px) {
    .instructor-section{
        width: 85%;
        margin: 8%;
    }
    .instructor-section .instructor h2{
        font-size: 1.6rem;
        font-weight: 600;
    }
    .instructor-section .instructor p{
        font-size: 1rem;
        color: rgb(78, 78, 78);
    }
    .instructor ul{
        flex-direction: column;
    }
    .instructor ul li{
        font-size: 1.1rem;
        padding-bottom: 6px;
        margin: 3px;
    }
    .cards{
        grid-template-columns: auto;
        width: 90%;
    }
    .single-card{
        padding: 5%;
        margin: 2%;
    }
    .session-section{
        width: 80%;
    }
    .email-text{
        margin: auto;
        padding: 2%;
        width: 85%;
    }
    .email-text h2{
        font-size: 1.3rem;
        margin-bottom: 1.4%;
    }
    .email-text p{
        font-size: 0.9rem;
    }
    .input-field form input{
        width: 55%;
        padding: 5px;
        font-size: 1rem;
    }
    .input-field form button{
        padding: 4px 10px;
        font-size: 1rem;
    }
    .email-input{
        margin-top: 5%;
    }
}

`;