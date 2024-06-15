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
    position: relative;
}

.schedule p{
    font-family:  'DM Sans', sans-serif;
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
    font-family: 'Poppins', sans-serif;
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

.categories{
    display: flex;
    width: 65%;
    margin: 2% auto;
    align-items: center;
}
.cat-left{
    width: 75%;
}
.cat-left img{
    width: 85%;
}
.cat-boxes{
    display: grid;
    grid-template-columns: auto auto;
}
.cat-right{
    width: 70%;
}
.cat-box{
    padding: 10%;
    border: 1px solid #e3d8d8;
    margin: 2%;
    text-align: center;
}
.cat-box svg{
    width: 50px;
    color: #6000F9;
    aspect-ratio: 1/1;
    padding: 4% 0;
}

@media (max-width:1000px) {
    .text h1{
        font-size: 1.4rem;
        color: #353535;
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
        color: #484848;
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
    .categories .cat-left{
        display: none;
    }
    .categories{
        width: 90%;
    }
    .cat-right{
        width: 100%;
    }
    .cat-box svg{
        width: 30px;
    }
    .cat-box h3{
        font-size: 1rem;
        font-weight: 400;
    }
}

.heading{
    text-align: center;
    margin-top: 2.5%;
}
.heading h2{
    font-size: 2rem;
    font-weight: 600;
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

/* Why to choose us section css */
.why-consulthub-section{
    background-color: #f6f9fc;
}
.why-consulthub{
    display: grid;
    grid-template-columns: 40% 60%;
    width: 75%;
    margin: auto;
    padding: 0% 0;
    align-items: center;
}
.why-consulthub-section .heading{
    padding-top: 2%;
}
.left-side .left-card{
    background-color: white;
    padding: 4%;
    margin: 2% 0;
}
.left-card h3{
    font-size: 1.3rem;
    /* color: #000000cf; */
    font-weight: 600;
}
.left-card p{
    font-size: 1.1rem;
    margin-top: 1%;
}
.why-consulthub .right-side{
    /* padding: 0 9%; */
    /* margin-left: 10%; */
}
.why-consulthub .right-side h2{
    color: #6000F9;
    font-size: 2rem;
}
.why-consulthub .right-side img{
    /* padding: 0 9%; */
    width: 100%;
}
@media (max-width:1000px) {
    .why-consulthub-section{
        padding-bottom: 4%;
    }
    .why-consulthub{
        grid-template-columns: auto;
        width: 85%;
    }
    .left-card h3{
        font-size: 1rem;
        font-weight: 500;
    }
    .left-card p{
        font-size: 0.9rem;
    }
    .why-consulthub-section .heading{
    padding-top: 6%;
    padding-bottom: 5%;
    }
    .why-consulthub .right-side img{
    /* padding: 0 9%; */
    /* width: 100%; */
    display: none;
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
    width: 60%;
    margin: 3% auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.host-image{
    position: relative;
}
.host-image img{
    width: 500px;
  aspect-ratio: 1/1.2;
  object-fit: cover;
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
    margin-top: 3%;
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
@media (max-width:1600px) {
    .session-section{
        width: 70%;
    }
}
@media (max-width:1000px) {
    .r-side ul li h4{
        font-size: 1.1rem;
    }
    .r-side p{
        font-size: 0.9rem;
    }
    .host-image img{
    width: 100%;
  aspect-ratio: 1/1.2;
  object-fit: cover;
}
.r-side ul li h4{
    font-size: 1rem;
}
.r-side ul li h4{
    font-size: 0.9rem;
}
.schedule p{
    font-size: 1rem;
}
.host-info h4 b{
    padding: 1% 0;
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

export const AboutStyle = styled.div`
    .about-section{
        width: 65%;
        margin: 3% auto;
        text-align: center;
    }
    .about-section h2{
        font-size: 1.8rem;
    }
    .about-section p{
        font-size: 1.1rem;
        color: #312f2f;
    }
    .problem{
        text-align: left;
        background-color: #f7f7f7;
        padding: 2%;
        margin-bottom: 2%;
    }
    .problem h3{
        font-size: 1.2rem;
        font-weight: 600;
        color: #353333;
    }
    @media (max-width:1000px) {
        .about-section{
            width: 90%;
            margin: 5% auto;
        }
        .about-section h2{
            font-size: 1.1rem;
            margin: 0;
            padding: 0;
        }
        .about-section p{
            margin-top: 4px;
            padding: 0;
            font-size: 0.9rem;
        }
        .problem{
            padding: 5%;
            margin: 3% 0;
        }
        .problem h3{
            font-size: 1rem;
            margin: 4px 0;
        }
        .problem p{
            font-size: 0.9rem;
        }
    }
`;

export const ContactStyle = styled.div`
    .contact-head{
        text-align: center;
        background-color: #f7f7f7;
        margin: 0;
        padding: 5%;
    }
    .contact-head h1{
        font-size: 2.4rem;
        font-weight: bolder;
        margin: 0;
    }
    .contact-head p{
        margin: 4px 0;
        font-size: 1.1rem;
    }
    .contact-section{
        width: 75%;
        margin: 3% auto;
        display: grid;
        grid-template-columns: 50% 50%;

    }
    .contact-box{
        background-color: white;
        border: 1px solid #ebe4e4;
        padding: 4%;
        margin: 1%;
    }
    .contact-box svg{
        color: gray;
        font-size: 50px;
    }
    .contact-box p{
        font-size: 1.1rem;
    }
    @media (max-width:1000px) {
        .contact-head h1{
            font-size: 1.4rem;
        }
        .contact-head p{
            font-size: 0.9rem;
        }
        .contact-section{
            grid-template-columns: auto;
            width: 90%;
        }
        .contact-box p{
            font-size: 0.9rem;
        }
    }
`;

export const CommunityStyle = styled.div`
    .heading{
        text-align: center;
        margin: 2% 0;
    }
    .heading h1{
        font-weight: 500;
    }
    .com-cards{
        display: grid;
        grid-template-columns: 23% 23% 23% 23%;
        gap: 2%;
        width: 75%;
        margin: auto;
    }
    .com-cards .single-card{
        border: 0.4px solid #e8e4e4;
    }
    .com-cards .image-section img{
        width: 100%;
    }
    .com-cards .text-section{
        padding: 2% 5%;
    }
    .com-cards .text-section h3{
        margin: 1% 0;
        font-size: 1.2rem;
        font-weight: 600;
    }
    .com-cards .text-section ul{
        list-style: none;
        margin: 3% 0;
        padding: 0;
    }
    .com-cards .text-section ul li{
        padding: 1% 0;
        font-size: 1rem;
        align-items: center;
        display: flex;
    }
    .com-cards .text-section ul li h5{
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
        margin: 0 3%;
    }
    .com-cards .text-section ul li svg{
        width: 25px;
        height: 25px;
    }
    .btn{
        text-align: center;
    }
    .com-cards a{
        text-decoration: none;
        color: #6000F9;
    }
    .btn{
        padding: 2%.5%;
        width: 92%;
        margin: 3% auto;
        border: 1px solid #6000F9;
    
    }
    @media (max-width:1000px) {
        .com-cards{
            grid-template-columns: auto;
            width: 90%;
        }
        .heading h1{
            font-size: 1.3rem;
            margin: 4%;
        }
        .com-cards .text-section h3{
            font-size: 1.1rem;
        }
    }
`;

export const NotFoundStyle = styled.div`
        .container{
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    .container h1{
        font-size: 4rem;
        color: #6000F9;
    }
    .container h4{
        font-size: 1.4rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin: 1% 0;
    }
    .container p{
        font-size: 1.2rem;
        color: rgb(70, 67, 67);
        margin: 2% 0;
    }
    .container .btn a{
        color: white;
        text-decoration: none;
    }
    .container .btn{
        background-color: #6000F9;
        padding: 2% 3%;
        border: none;
        font-size: 1.2rem;
        margin-top: 2%;
    }
`