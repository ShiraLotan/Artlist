import React from 'react';
import Container from '@material-ui/core/Container';
import gevaAlon from '../img/gevaAlon.jpeg';
import kickLee from '../img/kickLee.jpeg';
import davisAbsol from '../img/davisAbsol.jpg';
import vladMorleo from '../img/vladMorleo.jpg';
import Card from '@material-ui/core/Card';
import injectSheet from 'react-jss';
import styles from './middle.Material.style';
import StyledGrid from './middle.Material.style1';
import {  NoSsr } from '@material-ui/core';
import StyledPaper from './middle.Material.style2';
import './middle.css';


const Middle = ({ classes }) => {
 

   const artists = [{
            title: 'Musicians',
            name: 'Geva Alon',
            type: 'Rock-folk artist',
            img: gevaAlon
          },
          {
            title: 'Producer',
            name: 'Kick Lee',
            type: 'Composer-Producer',
            img: kickLee
          },
          {
            title: 'Composers',
            name: 'Vlad Morleo',
            type: 'Classic piano',
            img: vladMorleo
          },
          {
            title: 'Agents',
            name: 'Davis Absolute',
            type: 'Agent',
            img: davisAbsol
          }
        ]
  return (
    <div className="middle">
      <Container  >
        <h1 className='headerMiddle'>Join leading artists around the world</h1>
        {artists.map((art,i)=>
        <div key={i} className='imgWrapper'>
          <Card  className='imgContainer'>
              <img className='image' src={art.img} alt='#'/>
          </Card>
            <span className='title'>{art.title}</span><br/> 
                  <span className='artDetails' >
                  <span className='artName'>{art.name}</span> {art.type}
                  </span>
          </div>
           )}
      </Container>
     <Container flex>
      <h1 className='yourThing'>Keep doing your thing</h1>
      <div className='cardsWrapper'>
      <NoSsr>
      <StyledGrid className='gridWrapper'  container spacing={3}>
        <StyledGrid  item xs={3} >
          <StyledPaper className={classes.papper} >
            <h6 className='yellowHeader'>Keep your rights</h6>
            <p className='smallContent'>It's your music and<br></br> you keep all of the</p>
          </StyledPaper>
        </StyledGrid>
        <StyledGrid  item xs={3}>
          <StyledPaper className={classes.papper}>
            <h6 className='yellowHeader'>Revenue</h6>
            <p className='smallContent'>Join the growing sync-licensing market<br></br> and tap into a whole new revenue </p>
          </StyledPaper>
        </StyledGrid>
        <StyledGrid  item xs={3}>
          <StyledPaper className={classes.papper} id='paperHide'>
            <h6 className='yellowHeader' >Inspire</h6>
            <p className='smallContent'>Let your music help to tell the story<br></br> and be the soul of films around the world.</p>
          </StyledPaper>
        </StyledGrid>
      </StyledGrid>

      <StyledGrid className='gridWrapper' container spacing={3} >
        <StyledGrid  item xs={3}>
          <StyledPaper className={classes.papper}>
            <h6 className='yellowHeader'>Non-exclusive</h6>
            <p className='smallContent'>You can license with Artlist and still<br></br> distribute/license your music anywhere<br></br> else you choose. </p>
          </StyledPaper>
        </StyledGrid>
        <StyledGrid  item xs={3}>
          <StyledPaper className={classes.papper}>
            <h6 className='yellowHeader'>Expand your reach</h6>
            <p className='smallContent'>See your social and streaming channels grow <br></br>as your music is recognized in thousands of <br></br>films worldwide.</p>
          </StyledPaper>
        </StyledGrid>
        <StyledGrid  item xs={3} id='paperHide'>
          <StyledPaper className={classes.papper}>
            <h6 className='yellowHeader' i>Creative community</h6>
            <p className='smallContent'>Distribute your music through one of the top <br></br>music licensing platforms in the world, and be <br></br>part of a select group of composers and indie</p>
            </StyledPaper>
          
        </StyledGrid>
      </StyledGrid>
      </NoSsr>
      
      </div>
      </Container>
    </div>
  );
}
export default injectSheet(styles)(Middle)
