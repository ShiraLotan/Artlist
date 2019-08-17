import React ,{ Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import {  NoSsr } from '@material-ui/core';
import StyledTextField from './submit.Material.style';
import './submit.css';

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
  display: 'none'
}

  
handleOpenPopove=()=>
{
  this.setState({display:'block'});
}

handleClosePopove=()=>
{
  this.setState({display:'none'});
}

handleAllDetails=(event)=>
{
  this.setState({[event.target.name]: event.target.value});
  this.props.sendDetails(this.state);
}

render() {

  return (
      <div className="submit">
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
        onMouseOver={this.handleOpenPopove}
        onMouseLeave={this.handleClosePopove}
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
      
       <div style={{display: this.state.display}} className='popText'>Let us know who you are <br></br>and where you're coming from, <br></br>what inspires you, who you<br></br>have worked with and what <br></br>you think is interesting about <br></br>your work in the world of music <br></br>and film, etc. How should we <br></br>presented you as an artist?</div>
       

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

