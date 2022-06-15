import React,{useState, useContext, Fragment} from 'react';
import UserContext from '../../common/UserContext';
import * as S from './styles';
import Button from '@mui/material/Button';
import RepositoryUI from '../repositoryUI/RepositoryUI';

function ReposContainer()
{
    const userContext = useContext(UserContext);

    const [repositories, setRepositories] = useState(userContext.user.getRepositories());
    const [title, setTitle] = useState('Repositories');

    return(
        <Fragment>
            <S.navigation>
                <div style={{background:'#37474F',margin:'auto',width:'100%',maxWidth:'500px'}}>
                    <Button onClick={()=>{setRepositories(userContext.user.getRepositories());setTitle('Repositories')}} sx={{color:'white'}}>Repos</Button>
                    <Button onClick={()=>{setRepositories(userContext.user.getStarredRepositories());setTitle('Stars')}} sx={{color:'white'}}>Stars</Button>
                </div>
            </S.navigation>
            <h1 style={{textAlign:'center', marginTop:'50px', color:'#ddd', fontSize:'3em'}}>{title}</h1>
            <S.reposContainer>
            {
                repositories.length > 0 &&
                repositories.map(rep=>(
                    <Fragment key={rep.getId()}>
                        <RepositoryUI rep={rep} />
                    </Fragment>
                )) ||
                <h1 style={{color:'#aaa'}}>No repositories</h1>
            }
            </S.reposContainer>      
        </Fragment>
    );
}

export default ReposContainer;