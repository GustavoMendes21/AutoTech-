import styled from "styled-components";

export const Button = styled.button`
  color: #ffff;
  padding: 1rem;
  background-color: var(--primary-red);
  font-weight: 600;
  font-size: 1.3rem;
  border: none;
  border-radius: .4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter .2s ease-in-out;

  svg {
    margin-left: 1rem;
  }

  &:hover {
    filter: brightness(.8);
  }
`