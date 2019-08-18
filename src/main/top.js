import React from 'react';
import Container from '@material-ui/core/Container';
import topImg from '../img/top1.png';
import arrow from '../img/arrowDown.png';
import artlist from '../img/artlist1.png';
import './top.css';

function Top() {
  return (
    <div className="top">
      <Container  >
        <div className='topCont'>
          <img  className='artlist' src={artlist} alt='#'/>
            <h1 className='header'>We want your inspiring music</h1>
            <p className='secondRow'>Get your music into films, videos & TV all around the world. Join the Artlist family.</p>
            <button className='downloadButton'>
                <img className='arrow' src={arrow} alt='#'/>
            </button>
        </div>
        <img className='topimage' src={topImg} alt='#'/>
        
      </Container>
    
    </div>
  );
}

export default Top;
