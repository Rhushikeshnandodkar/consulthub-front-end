import styled from "styled-components";

export const ConsultentListStyle = styled.div`
.main-section{
    display: grid;
    grid-template-columns: 30% 70%;
    width: 75%;
    margin: auto;
}
.filters-section{
    border: 1px solid gray;
    padding: 5% 0;
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
    padding: 1.2%;
    width: 80%;
    border: 1px solid gray;
    font-size: 1rem;

}

`;