import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import injectSheet from 'react-jss';
import './submit.css';


const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: '#181818',
  },
}));

const styles = {
  papper: {
    boxShadow: 'none',
    backgroundColor: 'transparent'
    },
    gridSec:{
      width: '100px'
    }
  
}
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
const Submit = ({ classes, children }) => {

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

      <TextField
        InputProps={{
          className: classes.root
        }}
        className='textField'
        label="Full name"
        margin="dense"
        variant="outlined"
        multiline
        rowsMax="4"
      />

      <TextField
        id="outlined-dense-multiline"
        className='textField'
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
          className={classes1.popover} 
          classes={{
            paper: classes1.paper,
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
          <Typography className='popText'>Let us know who you are <br></br>and where you're coming from, <br></br>what inspires you, who you<br></br>have worked with and what <br></br>you think is interesting about <br></br>your work in the world of music <br></br>and film, etc. How should we <br></br>presented you as an artist?</Typography>
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
      <div className='radioBut headFoot'>
      <h4 className='choiceheader '>Are you registered with a PRO?</h4>
        <div className='choice'>
          <input type="radio" name="pro" value="yes"
                />
          <label >Yes</label>
        </div>
         <div className='choice'>
          <input className='radioinp' type="radio" name="pro" value="no"/>
          <label >No</label>
         </div>
        </div>
       </div>
    </div>
  );
}
export default injectSheet(styles)(Submit)

