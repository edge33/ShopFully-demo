import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  flyers: [],
  loading: false,
}

const fetchFlyersSuccess = (state, action) => {
  return updateObject(state, { loading: false, flyers: action.flyers })
}

const fetchFlyersStart = (state) => {
  return updateObject(state, { loading: true })
}

const fetchFlyersFail = (state, error) => {
  return updateObject(state, { loading: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FLYERS_SUCCESS:
      return fetchFlyersSuccess(state, action)
    case actionTypes.FETCH_FLYERS_FAIL:
      return fetchFlyersFail(state, action)
    case actionTypes.FETCH_FLYERS_START:
      return fetchFlyersStart(state, action)
    default:
      return state
  }
}

export default reducer
