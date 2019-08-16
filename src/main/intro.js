import React from 'react';
import Container from '@material-ui/core/Container';
import Top from './top';
import Middle from './middle';
import Bottom from './bottom';
import Footer from './footer';
import Details from '../bio/details';



function Intro() {
  return (
    <div className="intro">
      <Container fixed>
        <Top/>
        <Middle/>
        <Bottom/>
        <Footer/>
        <Details/>
      </Container>
    
    </div>
  );
}

export default Intro;
