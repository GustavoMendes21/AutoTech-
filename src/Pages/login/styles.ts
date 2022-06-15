import styled from "styled-components"
import BackgroundImage from '../../assets/background-image.jpg'

export const LoginPage = styled.section`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`

export const Container = styled.main` 
  div {
    width: 42.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  `

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;  
  height: calc(100vh - 14rem);

  background-color: #ffff;

  img {
    height: 20rem;
    margin-bottom: 6rem;
  }

  h1 {
    font-size: 3.7rem;
    font-weight: 600;
    color: var(--dark-gray);
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--light-gray);
  }

  span {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--light-gray);
    font-weight: 500;

    a {
      text-decoration: none;
      color: var(--primary-red);
      margin-left: 1rem;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }

`

export const FormLogin = styled.form`
  color: black;
  .field {
    display: flex;
    flex-direction: column;
    width: 100%;

    &.field {
      margin-top: 3rem;
    }
    
    label {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--gray);
    }

    input {
      margin-top: .6rem;
      padding: .8rem 1.2rem;
      border: 1px solid #E6E6E6;
      border-radius: .3rem;

      &::placeholder {
        font-size: 1.3rem;
        color: var(--light-gray);
      }
    }
  }

  .options-password {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 1rem;
    margin-top: 3rem;
    margin-bottom: 4.5rem;
    font-weight: 600;

    label {
      display: flex;
      align-items: center;
      font-size: 1.4rem;

      input {
        display: none;

        &:checked + span {
          background-color: var(--primary-red);
        }
      }
      span {
        display: block;
        width: 2.4rem;
        height: 2.4rem;
        border: 2px solid var(--primary-red);
        border-radius: .4rem;
        background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
        background-position: center;
        cursor: pointer;
      }
      p {
        margin-left: .8rem;
        font-size: 1.4rem;
        color: var(--primary-red);

      }
    }

    a {
      justify-self: end;
      font-size: 1.4rem;
      text-decoration: none;
      color: var(--primary-red);
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  button[type=submit] {
    display: block;
    width: 100%;

    background-color: var(--primary-red);
    border: none;
    padding: 1rem;
    color: #ffff;
    border-radius: .4rem;
    font-weight: 600;
    font-size: 1.4rem;
    margin-top: 2.4rem;
    margin-bottom: 4rem;
    transition: filter .2s ease-in-out;
    &:hover {
      filter: brightness(.7);
    }
  }

`

export const BackgroundHome = styled.img.attrs({
  src: `${BackgroundImage}`
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
