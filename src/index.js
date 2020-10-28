import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import Routes from './routes'

import likedGifsReducer from './reducers/likedGifsReducer'
import weirdnessReducer from './reducers/weirdnessReducer'
import searchTermReducer from './reducers/searchTermReducer'
import searchResReducer from './reducers/searchResReducer'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const allReducers = combineReducers({
  likedGifs: likedGifsReducer,
  weirdness: weirdnessReducer,
  searchTerm: searchTermReducer,
  searchResult: searchResReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk)
)

const store = createStore(
  allReducers,
  allStoreEnhancers
)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)