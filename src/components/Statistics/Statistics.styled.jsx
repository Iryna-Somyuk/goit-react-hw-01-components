import styled from '@emotion/styled';

export const ConteinerStatistics = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 400px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0.5, 0, 0.24);
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(108, 108, 108);
  margin: 20px auto;
`;

export const ListStatistics = styled.ul`
  display: flex;
  width: inherit;
`;

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px;
`;

export const ItemLabel = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 2px;
  color: white;
`;

export const ItemPercentage = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;
