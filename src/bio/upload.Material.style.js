import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';

const StyledCheckbox = styled(Checkbox)`
span.MuiIconButton-label{
  background-color: transparent;
  color: white;
}
svg.MuiSvgIcon-root{
  height:13px;
  width: 13px;
}
`;

export default StyledCheckbox;