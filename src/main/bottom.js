import React from 'react';
import disk from '../img/disk.png';
import check from '../img/checkmark.png';
import Details from '../bio/details';
import './bottom.css';

function Bottom() {
  
  return (
    <div className="bottom">
      <div className='bottomSecContent'>
        <h1>Things to check <br></br>before we start</h1>
        <ul>
          <li><img className='checkmark' src={check} alt='#'/>You have full rights to the music.</li>
          <li><img className='checkmark' src={check} alt='#'/>The music can be used on any platform worldwide.</li>
          <li><img className='checkmark' src={check} alt='#'/>Your press kit is complete with photos, bio and great music.</li>
        </ul>
        <Details/>
 
      </div>
      <img className='diskImage' src={disk} alt='#'/>
    </div>
  );
}

export default Bottom;
