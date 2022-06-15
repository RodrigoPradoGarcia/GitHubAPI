import styled from 'styled-components';

export const header = styled.header`
  background:#333;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
`;

export const search = styled.input`
  background:#555;
  font-size:16px;
  color:white;
  letter-spacing: 2px;
  padding:10px 20px;
  margin:15px 0;
  border-radius: 20px;

  &:hover
  {
    background:#666;
  }
`;

export const inputContainer = styled.div`
  position:relative;
  display:flex;
  align-items:center;

  & svg
  {
    position:absolute;
    right:10px;
    color:white;
  }

  & svg:hover
  {
    background:#fff3;
    border-radius:50%;
    cursor:pointer;
  }
`;