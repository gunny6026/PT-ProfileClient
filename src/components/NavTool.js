import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavSt = styled.div`
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    padding: 24px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
    text-align: center;
`;

const conslerSt = styled.button`
    
`;


const NavTool = (props) => {
    const price = props.price;


    return (
        <NavSt>
          <h1>{price}</h1>
          <Link to={`/`}>
            <conslerSt>카톡 상담</conslerSt>
          </Link>
          <h1>adlsknfladnsk</h1>
          <h1>adlsknfladnsk</h1>
        </NavSt>
    );
};

export default NavTool;