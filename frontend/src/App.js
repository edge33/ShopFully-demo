import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import Dialog from './components/UI/Dialogs/WarningDialog/WarningDialog'
import Drawer from './components/SideBar/Drawer/Drawer'
import FavoritesList from './components/SideBar/FavoritesList/FavoritesList'
import Flyers from './components/Flyers/Flyers'
import Layout from './hoc/Layout/Layout'

import { store } from './utils/persistence/persistenceUtils'
import { syncFavoriteFlyers, getUpdatedFavorites, getUrlParams } from './utils/utils'
import CircularProgress from '@material-ui/core/CircularProgress'

class App extends Component {
  state = {
    isDrawerOpened: false,
    flyers: [],
    favoriteFlyers: [],
    loading: true,
    error: false,
    page: 1,
    limit: 20,
    hasMore: true,
  }
  /**
   * sets-up the app,
   * sets a listener for thee infinitee scroll, parses the queryParams i.e page=1&limit=100
   * fetches flyers
   */
  async componentDidMount() {
    window.addEventListener('scroll', this.infiniteScroll)
    const queryParams = getUrlParams(window.location.search)
    const page = !isNaN(+queryParams.page) ? +queryParams.page : this.state.page
    const limit = !isNaN(+queryParams.limit) ? +queryParams.limit : this.state.limit
    this.getFlyers(page, limit)
  }

  /**
   * removes the listener on window scroll when unmounting the component
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll)
  }

  /**
   * handler for infinite scrolling
   */
  infiniteScroll = () => {
    // End of the document reached?
    if (
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
      this.state.hasMore &&
      !this.state.loading
    ) {
      this.getFlyers(this.state.page + 1, this.state.limit)
    }
  }

  /**
   *
   * @param {*} number Number of page to fetch
   * @param {*} number Limits the number of results
   */
  getFlyers = async (page, limit) => {
    this.setState((state) => {
      return {
        ...state,
        loading: true,
      }
    })
    try {
      const response = await axios.get(`/api/flyers?page=${page}&limit=${limit}`)
      const favoriteFlyers = store('favoriteFlyers') || []
      /**
       * syncs data from the api, with data from local storage or cookies,
       * in order to the favorite icon
       */
      let flyers = syncFavoriteFlyers(response.data, favoriteFlyers)
      this.setState((state) => {
        return {
          ...state,
          flyers: this.state.flyers.concat(...flyers),
          loading: false,
          error: false,
          favoriteFlyers,
          page,
          limit,
          hasMore: flyers.length === limit,
        }
      })
    } catch (error) {
      /** shows a modal in case of error */
      this.setState((state) => {
        return {
          ...state,
          error: true,
          loading: false,
        }
      })
    }
  }

  /**
   * Updates the favorite status of a flyer and saves in local storage or cookie
   * @param {*} id of the card to update
   */
  onFavoriteIconClick = (id) => {
    const flyerToUpdate = this.state.flyers.findIndex((i) => i.id === id)
    const newFlyers = this.state.flyers.slice()
    newFlyers[flyerToUpdate].favorite = !newFlyers[flyerToUpdate].favorite
    const newFavoriteItems = getUpdatedFavorites(newFlyers[flyerToUpdate], this.state.favoriteFlyers)
    this.setState((state) => {
      return {
        ...state,
        flyers: newFlyers,
        favoriteFlyers: newFavoriteItems,
      }
    })
    store('favoriteFlyers', newFavoriteItems)
  }

  /**
   * handles the drawer visibility
   * @param {*} event 
   */
  toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    this.setState((state) => {
      return { ...state, isDrawerOpened: !state.isDrawerOpened }
    })
  }

  handleClose = () => {
    this.setState(() => {
      return {
        error: false,
      }
    })
  }

  render() {
    return (
      <Layout openDrawer={this.toggleDrawer}>
        <Drawer open={this.state.isDrawerOpened} closed={(event) => this.toggleDrawer(event)}>
          <FavoritesList favoriteFlyers={this.state.favoriteFlyers} />
        </Drawer>
        {this.state.error ? (
          <Dialog onClose={this.handleClose}>Error retrieving flyers...</Dialog>
        ) : (
          <Flyers
            flyers={this.state.flyers}
            favoriteClicked={this.onFavoriteIconClick}
            isLoading={this.state.loading}
          />
        )}
        {this.state.loading ? (
          <div style={{ textAlign: 'center' }}>
            <CircularProgress />
          </div>
        ) : null}
        {!this.state.hasMore ? <h2 style={{ textAlign: 'center' }}>That's all folks!</h2> : null}
      </Layout>
    )
  }
}

export default App
