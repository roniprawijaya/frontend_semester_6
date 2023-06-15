import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  // PROPS VARIANT
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};
  
    // PROPS SIZE
${(props) => {
    switch (props.size) {
        case "sm":
        return css`
            font-size: 0.8rem;
            padding: 0.2rem 0.5rem;
        `;
        case "lg":
        return css`
            font-size: 1.3rem;
            padding: 0.5rem 1rem;
        `;
        default:
        return css`
            font-size: 1rem;
            padding: 0.5rem 1rem;
        `;
    }
    }}

  // PROPS FULL
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
