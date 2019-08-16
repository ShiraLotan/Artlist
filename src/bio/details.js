import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Submit from '../bio/submit';
import './details.css';
import Upload from './upload';
import a from '../img/a.png';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });




function Details() {
const [open, setOpen] = React.useState(false);

function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <div className="footer">
       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Start Now
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <IconButton className='closeModal' onClick={handleClose} >
                <CloseIcon />
            </IconButton>
        <Submit/>
        <Upload/>
      </Dialog>
    </div>
  );
}

export default Details;
