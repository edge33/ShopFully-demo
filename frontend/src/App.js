import { Component } from 'react'

import Drawer from './components/SideBar/Drawer/Drawer'
import FavoritesList from './components/SideBar/FavoritesList/FavoritesList'
import FlyersContainer from './containers/Flyers/FlyersContainer'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  state = {
    isDrawerOpened: false,
  }

  toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    this.setState((state) => {
      return { ...state, isDrawerOpened: !state.isDrawerOpened }
    })
  }

  render() {
    return (
      <Layout openDrawer={this.toggleDrawer}>
        <Drawer open={this.state.isDrawerOpened} closed={(event) => this.toggleDrawer(event)}>
          <FavoritesList />
        </Drawer>
        <FlyersContainer></FlyersContainer>
      </Layout>
    )
  }
}

export default App
