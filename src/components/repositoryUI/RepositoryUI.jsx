import React from 'react';
import * as S from './styles';
import StarIcon from '@mui/icons-material/Star';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SchemaIcon from '@mui/icons-material/Schema';
import PropTypes from 'prop-types';
import Repository from '../../models/Repository';

function RepositoryUI({rep})
{
    return(
        <S.breakAll>
            <S.repos href={rep.getHtmlUrl()}>
                <S.reposTitle>{rep.getName()}</S.reposTitle>
                <S.reposDescription>{rep.getDescription()}</S.reposDescription>
                <div style={{display:'flex',margin:'20px 0'}}>
                    <h4>Language:&nbsp;&nbsp;</h4>
                    <S.reposLanguage>{rep.getLanguage() || 'none'}</S.reposLanguage>
                </div>
                <div style={{display:'flex', alignItems: 'center'}}>
                    <StarIcon />
                    <span style={{marginLeft:'2px', marginRight:'15px'}}>{rep.getStargazersCount()}</span>
                    <RemoveRedEyeIcon />
                    <span style={{marginLeft:'2px', marginRight:'15px'}}>{rep.getWatchersCount()}</span>
                    <SchemaIcon />
                    <span style={{marginLeft:'2px', marginRight:'15px'}}>{rep.getForksCount()}</span>
                </div>
            </S.repos>
        </S.breakAll>
    );
}

RepositoryUI.propTypes = {
    rep: PropTypes.instanceOf(Repository)
};

export default RepositoryUI;