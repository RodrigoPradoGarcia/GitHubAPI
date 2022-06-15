import styled from 'styled-components';

export const breakAll = styled.div`
    word-break: break-all;
    margin:0 10px;
`;

export const repos = styled.a`
    display: block;
    text-decoration: none;
    word-break:break-word;
    color:#ddd;
    padding:20px;
    width:90vw;
    margin: 10px 0;
    height:90%;
    max-width:400px;
    border:solid 1px white;
    border-radius: 5px;
    box-shadow: -1px -1px 4px #0008;
    position:relative;
    top:0;
    left:0;
    cursor:pointer;
    transition: .5s ease-in-out;

    &:hover
    {
        top:-5px;
        left:-5px;
    }
`;

export const reposTitle = styled.h3`
    margin-bottom:20px;
`;

export const reposDescription = styled.h5`
    color: #aaa;
`;

export const reposLanguage = styled.h4`
    color: #80D8FF;
    transition: .5s ease-in-out;
`;