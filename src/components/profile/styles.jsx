import styled from 'styled-components';
import fundo from '../../assets/fundo.png';

export const container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  min-height:50vh;
  padding:50px;
  background-image: linear-gradient(#0008,#0008), url(${fundo});
  background-size: cover;
`;

export const info = styled.div`
  
`;

export const notFound = styled.div`
  width:100%;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  color:white;
  text-align:center;
`;

export const center = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
`;

export const breakAll = styled.span`
  word-break: break-all;
`;

export const breakWord = styled.p`
  margin: 20px;
  color: #ddd;
  word-break: break-word;
  font-size: 1em;
`;

export const chipContainer = styled.div`
  display:flex;
  @media screen and (max-width:400px)
  {
    flex-direction:column;
  }
`;

export const infoContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  color:white;
`;

export const infoItem = styled.span`
  display:flex;
  align-items:center;
  margin: 5px 0;
`;