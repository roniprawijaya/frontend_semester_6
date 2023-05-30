import styled from "styled-components";

// Membuat Styled Component Movie
const StyledHero = styled.div`
    margin: 5rem auto;
    padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
  }


  @media (min-width: 992px) {
    max-width: 1200px;
    section {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

  }
`;

export default StyledHero;
