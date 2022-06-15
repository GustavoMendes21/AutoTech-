import styled from 'styled-components'

export const Container = styled.main`
  max-width: 800px;
  width: 100%;
  height: calc(100vh - 120px);
  margin: 0 auto;
  text-transform: capitalize;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: var(--dark-gray);
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--gray);
  }

  > section {
    height: 100%;
  }
`

export const MenuItem = styled.div`
  cursor: pointer;
  margin-top: 3rem;
  margin-bottom: 3rem;
  color: #000;
  width: 100%;
  height: 200px;
  display: flex;
  border: 1px solid #E6E6E6;
  border-radius: .4rem;

  img {
      width: 500px;
      object-fit: cover;
  }

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    transition: background-color .2s ease-in-out;

    h1 {
      color: var(--dark-gray);

      font-size: 2.6rem;
    }

    p {
      color: var(--gray);
      font-size: 1.4rem;
      flex-grow: 1;
    }

    span {
      width: 100%;
      text-align: right;
      font-size: 1.3rem;
      font-weight: bold;
      color: var(--primary-red);
    }



    &:hover {
      background-color: #D6D6D6;
    }
  }
`