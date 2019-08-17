import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { TextField, NoSsr } from '@material-ui/core';
import styled from 'styled-components';

import './submit.css';

const StyledTextField = styled(TextField)`
textarea.MuiInputBase-input{
  color:white;
  font-family: Raleway;
}
  label.MuiFormLabel-root{
    color: white;
    font-family: Raleway;
  }
  label.Mui-focused {
    color: #c5ab14;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: #c5ab14;
    }
    &.Mui-focused fieldset {
      border-color: #c5ab14;
    }
  }
`;


const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
   
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: '#181818',
  }
}));



const countries = [
  {name: 'Israel'},
  {name: 'USA'},
  {name: 'Germany'},
  {name: 'Poland'}
];
const types = [
  {name: 'Musician'},
  {name: 'Producer'},
  {name: 'Composer'},
  {name: 'Musician'}

];
function Submit() {

  const classes1 = useStyles();

  const [country, setCountry] = React.useState({
    name: '',
  });

  const handleCountryChange = event => {
    setCountry({name: event.target.value });
  };

  const [type, setType] = React.useState({
    name: '',
  });

  const handleTypeChange = event => {
    setType({ name: event.target.value });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget.isConnected);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <div className="submit">
      <div className='all'>
      <h1 className='headFoot'>Submit your music</h1>
      <div className='submitForm'>

      <NoSsr>
        <StyledTextField
          className='textField'
          label="Full name"
          margin="dense"
          variant="outlined"
          multiline
          rowsMax="4"
        />
      </NoSsr>
      <NoSsr>

        <StyledTextField
          id="outlined-dense-multiline"
          className='textField'
          label="E-mail"
          margin="dense"
          variant="outlined"
          multiline
          rowsMax="4"
        />
      </NoSsr>

      <NoSsr>
          <StyledTextField
          id="outlined-select-currency"
          select
          label="Country"
          value={country.name}
          onChange={handleCountryChange}
          className='selectInp '
          margin="normal"
          variant="outlined"
        >
          {countries.map((option,i) => (
            <MenuItem className='menuItem' key={i} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </StyledTextField>
      </NoSsr>

      <NoSsr>
      <StyledTextField
        id="outlined-multiline-static"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className='textField '
        label="Bio"
        multiline
        rows="4"
        margin="normal"
        variant="outlined"
      />
      </NoSsr>

        <Popover
          id="mouse-over-popover"
          className={classes1.popover} 
          classes={{
            paper: classes1.paper,
          }}
          anchorOrigin={{vertical:'center',horizontal: 550}}
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography className='popText'>Let us know who you are <br></br>and where you're coming from, <br></br>what inspires you, who you<br></br>have worked with and what <br></br>you think is interesting about <br></br>your work in the world of music <br></br>and film, etc. How should we <br></br>presented you as an artist?</Typography>
        </Popover>

       <NoSsr>
          <StyledTextField
          id="outlined-select-currency"
          select
          label="What do you do?"
          value={type.name}
          onChange={handleTypeChange}
          className='selectInp '
          margin="normal"
          variant="outlined"
        >
          {types.map((option,i) => (
            <MenuItem className='menuItem' key={i} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </StyledTextField>
      </NoSsr>

      <NoSsr>
        <StyledTextField
          id="outlined-dense-multiline"
          label="Portfolio links"
          className='textField '
          margin="dense"
          variant="outlined"
          multiline
          rowsMax="4"
        />
     </NoSsr>

      </div>
      <div className='radioBut headFoot'>
      <h4 className='choiceheader '>Are you registered with a PRO?</h4>
        <div className='choice'>
           <input className='radioinp' type="radio" name="pro" value="yes"/>
          <label className='choiceCont'>Yes</label>
        </div>
         <div className='choice'>
           <input className='radioinp' type="radio" name="pro" value="no"/>
          <label className='choiceCont'>No</label>
         </div>
        </div>
       </div>
    </div>
  );
}
export default Submit

