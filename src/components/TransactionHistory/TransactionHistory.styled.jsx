import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  margin: 20px auto;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0.5, 0, 0.24);
  th {
    font-size: 12px;
    font-weight: 700;
    background-color: rgb(3, 192, 192);
    color: azure;
    text-align: center;
    text-transform: uppercase;
    height: 15px;
    padding: 10px;
  }

  td {
    width: 100%;
    height: 20px;
    padding: 10px;
    font-size: 12px;
    font-weight: 400;
    color: gray;
    text-transform: capitalize;
    text-align: center;
    min-width: 150px;
    border: 1px solid rgb(210, 210, 213);
  }
`;
