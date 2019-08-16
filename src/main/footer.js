import React from 'react';
import './footer.css';
import fb from '../img/fb.png';
import insta from '../img/insta1.jpg';
import twitter from '../img/twitter.png';
import vimeo from '../img/vimeo1.png';
import youtube from '../img/youTube1.png';



function Footer() {
  
  return (
    <div className="footer">
      <div className='allSocial'>
        <img className='socialIcon' src={fb} alt='#'/>
        <img className='socialIcon insta' src={insta} alt='#'/>
        <img className='socialIcon insta' src={twitter} alt='#'/>
        <img className='socialIcon ' src={vimeo} alt='#'/>
        <img className='socialIcon ' id='youTube' src={youtube} alt='#'/>
      </div>
      <span className='artmail'>artlist@artlist.io</span>
    </div>
  );
}

export default Footer;
