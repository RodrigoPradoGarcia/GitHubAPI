import React,{useRef} from 'react';
import * as S from './styles';
import SearchIcon from '@mui/icons-material/Search';
import UserContext from '../../common/UserContext';

function Header()
{
  const userLoginInput = useRef();

  return(
    <UserContext.Consumer>
      {
        ({setUser})=>(
          <S.header>
            <form onSubmit={(e)=>{e.preventDefault();setUser(userLoginInput.current.value)}}>
              <S.inputContainer>
                <S.search ref={userLoginInput} placeholder="Pesquisar..." />
                <SearchIcon onClick={()=>setUser(userLoginInput.current.value)} />        
              </S.inputContainer>
            </form>
          </S.header>
        )
      }
    </UserContext.Consumer>
  );
}

export default Header;