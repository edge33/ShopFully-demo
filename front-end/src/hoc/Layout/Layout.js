import { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Aux from '../Auxiliary/Auxiliary'

class layout extends Component {
  state = {
    isDrawerOpened: false,
  }

  toggleDrawer = (event, status) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    this.setState((state) => {
      return { ...state, isDrawerOpened: status }
    })
  }

  render() {
    return (
      <Aux>
        <Drawer open={this.state.isDrawerOpened} onClose={(event) => this.toggleDrawer(event, false)}>
          <p style={{padding: "20px"}}>some content</p>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={(event) => this.toggleDrawer(event, true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">ShopFully</Typography>
          </Toolbar>
        </AppBar>
      </Aux>
    )
  }
}

export default layout
