import styled from 'styled-components';
import { TextField } from '@material-ui/core';


const StyledTextField = styled(TextField)`
div.MuiInputBase-input{
  color: white;
}
div.MuiInputBase-input{
  font-family: Raleway;
}
textarea.MuiOutlinedInput-inputMultiline{
  color: white;

}
label.MuiFormLabel-root{
    color: white;
    font-family: Raleway;
  }
label.Mui-focused {
    color: #c5ab14;
  }
textarea.uiInputBase-input{
    color: white;
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

export default StyledTextField;

