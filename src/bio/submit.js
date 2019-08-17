import React ,{ Component } from 'react';
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

class Submit extends Component {

state ={
  name: '',
  email: '',
  country: '',
  bio: '',
  position: '',
  portfolio: '',
  registered: false,
  anchorEl: null,
  open: false
}

classes1 =()=> useStyles();
  


handleAllDetails=(event)=>
{
  this.setState({[event.target.name]: event.target.value})
  this.props.sendDetails(this.state)
}

  render() {

  return (<div className="submit">
      <div className='all'>
      <h1 className='headFoot'>Submit your music</h1>
      <div className='submitForm'>

      <NoSsr>
        <StyledTextField
          onChange={this.handleAllDetails}
          className='textField'
          label="Full name"
          margin="dense"
          variant="outlined"
          multiline
          rowsMax="4"
          name='name'
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
          name='email'
          onChange={this.handleAllDetails}

        />
      </NoSsr>

      <NoSsr>
          <StyledTextField
          id="outlined-select-currency"
          select
          label="Country"
          value={this.state.country}
          onChange={this.handleAllDetails}
          className='selectInp '
          margin="normal"
          variant="outlined"
          name='country'

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
        onChange={this.handleAllDetails}
        className='textField '
        label="Bio"
        multiline
        rows="4"
        margin="normal"
        variant="outlined"
        name='bio'

      />
      </NoSsr>
      
       
       
          {/* <Typography className='popText'>Let us know who you are <br></br>and where you're coming from, <br></br>what inspires you, who you<br></br>have worked with and what <br></br>you think is interesting about <br></br>your work in the world of music <br></br>and film, etc. How should we <br></br>presented you as an artist?</Typography> */}

       <NoSsr>
          <StyledTextField
          id="outlined-select-currency"
          select
          label="What do you do?"
          value={this.state.position}
          onChange={this.handleAllDetails}
          className='selectInp '
          margin="normal"
          variant="outlined"
          name='position'

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
          name='portfolio'
          onChange={this.handleAllDetails}

        />
     </NoSsr>

      </div>
      <div className='radioBut headFoot'>
      <h4 className='choiceheader '>Are you registered with a PRO?</h4>
        <div className='choice'>
           <input onChange={this.handleAllDetails} className='radioinp' type="radio" name="registered" value="true"/>
          <label className='choiceCont'>Yes</label>
        </div>
         <div className='choice'>
           <input onChange={this.handleAllDetails} className='radioinp' type="radio" name="registered" value="false"/>
          <label className='choiceCont'>No</label>
         </div>
        </div>
       </div>
    </div>
    );
  }
}
export default Submit

