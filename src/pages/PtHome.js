

import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddrModal from '../components/AddrModal';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slide from '../components/Slide';

import Slider from '../components/Slider';
import CardForm from './board/CardForm';



const PtHome = () => {
    
    return (
        <div>
            
                 
            <AddrModal/>
                  <Link to="/ptRegister"><button>등록</button></Link>
                    <Slider/>
                   <CardForm/>
                  <Footer/>

              </div>
    )
}

export default PtHome;