import styled from '@emotion/styled';

export const CardFriend = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px auto;
  width: 400px;
  height: 60px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0.5, 0, 0.24);
`;

export const FriendAvatar = styled.img`
  margin-right: 15px;
  border-radius: 6px;
  background-color: rgb(211, 207, 207);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
