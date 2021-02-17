import { Component } from 'react'

import Layout from './hoc/Layout/Layout'
import Drawer from './components/SideBar/Drawer/Drawer'

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
          <p>some content</p>
        </Drawer>
        <h2>Container</h2>
      </Layout>
    )
  }
}

export default App
