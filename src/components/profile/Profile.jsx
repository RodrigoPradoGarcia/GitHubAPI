import React from 'react';
import * as S from './styles';
import {Avatar, Button} from '@mui/material';
import UserContext from '../../common/UserContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Chip} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

function Profile()
{
  return(
    <S.container>
      <S.info>
        <UserContext.Consumer>
          {
            ({user})=>{
              if(user !== null)
              {
                return(
                  <S.center>
                    <Avatar src={user.getAvatarUrl()} sx={{height:'200px',width:'200px', boxShadow:'4px 4px 30px aqua'}} />
                    <h1 style={{fontSize:'1.2em',letterSpacing:'2px',color:'white', marginTop:'40px'}}>{user.getName()}</h1>
                    <S.breakAll>
                      <S.breakWord>
                        {
                          user.getBio()
                        }
                      </S.breakWord>
                    </S.breakAll>
                    <S.infoContainer>
                      {
                        user.getEmail() && (
                          <S.infoItem>
                            <EmailIcon sx={{color:'white'}} />
                            {user.getEmail()}
                          </S.infoItem>
                        )
                      }
                      {
                        user.getBlog() && (
                          <S.infoItem>
                            <LanguageIcon sx={{color:'white'}} />
                            {user.getBlog()}
                          </S.infoItem>
                        )
                      }
                      {
                        user.getLocation() && (
                          <S.infoItem>
                            <LocationOnIcon sx={{color:'white'}} />
                            {user.getLocation()}
                          </S.infoItem>
                        )
                      }
                      {
                        user.getCompany() && (
                          <S.infoItem>
                            <BusinessIcon sx={{color:'white'}} />
                            {user.getCompany()}
                          </S.infoItem>
                        )
                      }
                    </S.infoContainer>
                    <S.chipContainer>
                      <Chip sx={{margin:'10px',width:'150px', marginTop:'20px', background:'#304FFE', color:'#fff', fontWeight:'bolder'}} icon={<FaceIcon sx={{color:'white !important'}} />} label={`Followers: ${user.getFollowers()}`} />
                      <Chip sx={{margin:'10px',width:'150px', marginTop:'20px', background:'#1B5E20', color:'#fff', fontWeight:'bolder'}} icon={<FaceIcon sx={{color:'white !important'}} />} label={`Following: ${user.getFollowing()}`} />
                      <Chip sx={{margin:'10px',width:'150px', marginTop:'20px', background:'#BF360C', color:'#fff', fontWeight:'bolder'}} icon={<GitHubIcon sx={{color:'white !important',height:'25px',width:'20px'}} />} label={`Repositories: ${user.getPublicRepos()}`} />
                    </S.chipContainer>    

                    <a href={user.getHtmlUrl()} style={{textDecoration:'none',width:'90%', maxWidth:'200px', marginTop:'30px'}}><Button sx={{width:'100%'}} variant="contained" color='primary'>View Profile</Button></a>
                  </S.center>
                )
              }
              else
              {
                return(
                  <S.notFound>
                    <GitHubIcon sx={{height:'200px',width:'200px'}} />
                    <h1 style={{marginTop:'40px'}}>User not found</h1>
                  </S.notFound>
                )
              }
            }
          }
        </UserContext.Consumer>
      </S.info>
    </S.container>
  );
}

export default Profile;