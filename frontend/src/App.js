import { Component } from 'react'
import axios from 'axios'
import Drawer from './components/SideBar/Drawer/Drawer'
import FavoritesList from './components/SideBar/FavoritesList/FavoritesList'
import Flyers from './components/Flyers/Flyers'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  state = {
    isDrawerOpened: false,
    flyers: [],
    favoriteItems: [],
  }

  componentDidMount() {
    axios
      .get('/api/flyers?page=1&limit=10')
      .then((response) => {
        this.setState((state) => {
          return {
            ...state,
            flyers: response.data,
          }
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onFavoriteIconClick(id) {
    console.log(id)
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
        <Flyers flyers={this.state.flyers} favoriteClicked={this.onFavoriteIconClick} />
      </Layout>
    )
  }
}

export default App
