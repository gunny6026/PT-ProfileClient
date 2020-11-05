import React from 'react'
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import styled from 'styled-components';

const UlStyle = styled.ul`
    display:flex;
    list-style:none;
    color:white;
    justify-content:center;
    margin-right:10%;
    font-size:5px;
`;

const LiStyle = styled.li`
    padding-left:80px;
`;

const Footer = () => {
    return (
        <footer className="py-5 bg-dark fixed-bottom">
            
                <UlStyle>
                    <LiStyle><FitnessCenterOutlinedIcon/></LiStyle>
                    <LiStyle>Juwan</LiStyle>
                    <LiStyle>Jaehyun</LiStyle>
                    <LiStyle>Gunhee</LiStyle>
                    <LiStyle>Heejung</LiStyle>
                </UlStyle>
            
        </footer>
    )
}

export default Footer