import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Aux from '../Auxiliary/Auxiliary'

const layout = (props) => {
  return (
    <Aux>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.openDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">ShopFully</Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </Aux>
  )
}
export default layout
