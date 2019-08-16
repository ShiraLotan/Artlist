import React from 'react';
import './submit.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    display: 'block',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '400px'
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
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

  const classes = useStyles();
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
      <h1>Submit your music</h1>
      <div className='submitForm'>
      <TextField
        className='textField '
        label="Full name"
        margin="dense"
        variant="outlined"
        multiline
        rowsMax="4"
      />
      <TextField
        id="outlined-dense-multiline"
        className='textField '
        label="E-mail"
        margin="dense"
        variant="outlined"
        multiline
        rowsMax="4"
      />
        <TextField
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
      </TextField>
      
        <TextField
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
       <Popover
        id="mouse-over-popover"
        className={classes.popover} 
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>Let us know who you are <br></br>and where you're coming from, <br></br>what inspires you, who you<br></br>have worked with and what <br></br>you think is interesting about <br></br>your work in the world of music <br></br>and film, etc. How should we <br></br>presented you as an artist?</Typography>
      </Popover>
        <TextField
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
      </TextField>
      <TextField
        id="outlined-dense-multiline"
        label="Portfolio links"
        className='textField '
        margin="dense"
        variant="outlined"
        multiline
        rowsMax="4"
      />
     
      </div>
      <div className='radioBut'>
      <h4 className='choiceheader'>Are you registered with a PRO?</h4>
        <div className='choice'>
          <input type="radio" name="pro" value="yes"
                />
          <label >Yes</label>
        </div>

         <div className='choice'>
          <input type="radio" name="pro" value="no"/>
          <label >No</label>
         </div>
       </div>
    </div>
  );
}

export default Submit;
