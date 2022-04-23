import styled from "styled-components"


export const Header = styled.header`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.1rem;

  img {
    height: 5.7rem;
  }

  .input-search {
    width: 43rem;
    height: 3.8rem;
    border: 2px solid #E6E6E6;
    border-radius: .6rem;
    display: flex;
    align-items: center;
    padding-right: 1.2rem;

    input {
      width: 100%;
      height: 100%;
      border: none;
      padding-left: 1rem;

      &:focus {
        outline: none;
      }
    }
  }
`

export const Container = styled.main`
  width: 100%;
`