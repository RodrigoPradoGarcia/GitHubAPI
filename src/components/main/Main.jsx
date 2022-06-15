import React,{useContext} from 'react';
import Header from '../header/Header';
import Profile from '../profile/Profile';
import ReposContainer from '../reposContainer/ReposContainer';
import UserContext from '../../common/UserContext';
import PersonIcon from '@mui/icons-material/Person';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

function Main()
{
  const userContext = useContext(UserContext);

  return(
    <>
      <Header />
      {
        typeof userContext.user === 'number' ? (
          <>
            {
              userContext.user === 404 && (
                <div style={{minHeight:'80vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <PersonIcon sx={{color:'#aaa', height:'200px',width:'200px'}} />
                    <h1 style={{color:'#aaa'}}>User not found</h1>
                  </div>
                </div>
              ) ||
              userContext.user === 403 && (
                <div style={{minHeight:'80vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <DoNotDisturbIcon sx={{color:'#aaa', height:'200px',width:'200px'}} />
                    <h3 style={{textAlign:'center',color:'#aaa'}}>You probably have reached the request limit for GitHubAPI</h3>
                  </div>
                </div>
              ) || (              
                <div style={{minHeight:'80vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <DoNotDisturbIcon sx={{color:'#aaa', height:'200px',width:'200px'}} />
                    <h3 style={{textAlign:'center',color:'#aaa'}}>An unexpected error has ocurred</h3>
                  </div>
                </div>          
              )
            }
          </>
        ) : (
          <>
            <Profile />
            <ReposContainer />
          </>
        )
      }
    </>
  );
}

export default Main;