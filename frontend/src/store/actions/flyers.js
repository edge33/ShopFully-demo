import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchFlyersStart = () => {
  return {
    type: actionTypes.FETCH_FLYERS_START,
  }
}

export const fetchFlyersSuccess = () => {
  return {
    type: actionTypes.FETCH_FLYERS_SUCCESS,
  }
}

export const fetchFlyersFail = () => {
  return {
    type: actionTypes.FETCH_FLYERS_FAIL,
  }
}

export const fetchFlyers = (dispatch) => {
  return (dispatch) => {
    dispatch(fetchFlyersStart())
  }
}
