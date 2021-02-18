import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { deepPurple, indigo } from '@material-ui/core/colors'

import Aux from '../Auxiliary/Auxiliary'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: indigo,
  },
})

const layout = (props) => {
  return (
    <Aux>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.openDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">ShopFully</Typography>
          </Toolbar>
        </AppBar>
        {props.children}
      </ThemeProvider>
    </Aux>
  )
}
export default layout
