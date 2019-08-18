import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';


const StyledGrid = styled(Grid)`
   
    @media only screen and (max-width: 850px) {
        
        div.MuiGrid-root {
            max-width:613px;;
        }
      }
      @media only screen and (max-width: 810px) {
        
        div.MuiGrid-grid-xs-3 {
            flex-basis: 31%;
        }
      }
      @media only screen and (max-width: 577px) {
        
        div.MuiGrid-root{
            max-width: 250px;
        }
      }
      @media only screen and (max-width: 414px) {
        
        div.MuiGrid-grid-xs-3 {
            flex-basis: 15%;
        }
      }
    

`;

export default StyledGrid;



