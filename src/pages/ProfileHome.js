
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddrModal from '../components/AddrModal'
import Footer from '../components/Footer';
import Slider2 from '../components/Slider2'
import CardForm2 from '../pages/board/CardForm2';



const ProfileHome = (props) => {
    console.log(props)
    const [user, setUser] = useState({});
    useEffect ( () => {
        fetch("http://10.100.102.27:8000/user/info",{
          headers:{
            "Authorization":localStorage.getItem("Authorization"),
          }
        }).then(res => res.json())
        .then( res=>{
          setUser(res);
          console.log(res);
          console.log(res.auth_pt);
        })
    
    
      } ,[])


      const Button = styled.button`
  
    background-color : greenyellow;
    font-size: 25px;
    border: 2px solid green;
    font-weight: bold;
    margin : 10px auto;
   
  `;

  const ButtonBox = styled.div`
    margin-right : 25px ;
    float: right;
  `;

    return (
        <div>
            
            <AddrModal/>

            <Slider2/>
            {user.auth_pt === 3 ? <Link to ="/profileregister"> <ButtonBox><Button>등록</Button></ButtonBox> </Link>

            : ""

    }
            <CardForm2 />
            <Footer />
        </div>
    )
}

export default ProfileHome;