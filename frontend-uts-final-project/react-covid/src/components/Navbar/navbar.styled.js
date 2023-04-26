import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color: #06D6A0;
    padding: 1rem;
    color: #fff;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  nav {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    nav {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        margin-bottom: 2rem;
        margin-left: 4rem;
    }
    ul {
        flex-direction: row;
        margin-right: 6rem;
    }
    li {
        margin: 0 1rem;
    }
  }
  @media (min-width: 992px) {
  }
`;

export default StyledNavbar;