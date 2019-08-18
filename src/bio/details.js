import React from 'react';
import Slide from '@material-ui/core/Slide';
import Submit from '../bio/submit';
import './details.css';
import X from '../img/X.png';
import Fab from '@material-ui/core/Fab';
import Upload from './upload';
import StyledDialog from './details.Material.style';
import {  NoSsr } from '@material-ui/core';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Details() {

const [open, setOpen] = React.useState(false);

const [formDetails, setFormDetails] = React.useState({})

function setForm(allDetails)
{
  setFormDetails(allDetails)
}

function handleClickOpen() 
{
  setOpen(true);
}

function handleClose() {
  setOpen(false);
}

  return (
    <div className="details">
      
      <Fab color="primary" onClick={handleClickOpen}  className='startNow' variant="extended"  >
         Start Now
      </Fab> 
   <NoSsr>
      <StyledDialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>

          <div className='dialogContent'>
            <img className='closeModalBut' src={X} alt='#' onClick={handleClose}/>

                <Submit sendDetails ={setForm}/>
                <Upload passedFormDetails={formDetails}/>

          </div>
        </StyledDialog>
    </NoSsr>
    </div>
  );
}

export default Details;
