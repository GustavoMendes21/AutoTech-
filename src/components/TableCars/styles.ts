import styled from "styled-components";

export const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;

  > h1 {
    font-size: 3rem;
    font-weight: 600;
    color: var(--dark-gray);
    margin-bottom: 3.1rem;
  }
`

export const TableWrapper = styled.section`
  width: 100%;
  height: 680px;
  overflow: hidden;
  padding: 1rem;

  border: 1px solid #E6E6E6;
  box-shadow: 1px 1px 9px 2px #E6E6E6;

  border-radius: .4rem;

  > div {
    display: flex;
    align-items: center;
    padding: 2.5rem;
    padding-left: 3rem;

    h1 {
      flex-grow: 1;
      font-size: 2rem;
      color: var(--dark-gray);
    }

    .pagination {
      display: flex;
      align-items: center;

      .search-input {
        display: flex;
        align-items: center;
        margin-left: 4rem;
        padding: .4rem .6rem;
        border: 1px solid #E6E6E6;
        box-shadow: 1px 1px 9px 2px #E6E6E6;

        > input {
          width: 100%;
          height: 100%;
          padding: .4rem;
          border: none;
        }
      }

      .number-page {
        margin: 0 1.2rem;
        padding: 0.5rem 1.2rem;
        font-size: 1.3rem;
        color: var(--gray);
        font-weight: 600;

        &.selected {
          background-color: var(--primary-red);
          border-radius: .4rem;
          color: #FFFF;
        }
      }

      .button-pagination {
        padding: .4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        color: var(--gray);
      }
    }

  }
`

export const Table = styled.table`
  width: 100%;
  max-height: 100%;

  thead {
    th {
      color: var(--gray);
      font-weight: bold;
      font-size: 1.3rem;
    }
  }

  tbody {
    td {
      color: var(--dark-gray);
      font-size: 1.6rem;
      font-weight: 500;
    }
  }

  th, td {
    text-align: center;
    padding: 2.5rem 0;
  }


`