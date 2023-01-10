import styled from '@emotion/styled';

export const ConteinerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 300px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0.5, 0, 0.24);
`;

export const ImgCard = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.img`
  margin-bottom: 20px;
  width: 50%;
  border-radius: 50%;
  background-color: rgb(211, 207, 207);
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const TagLocation = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 300px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  border: 1px solid gray;
  background-color: rgb(220, 220, 220);
`;
export const StatsLabel = styled.span`
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 5px;
  color: grey;
`;

export const StatsQuantity = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
