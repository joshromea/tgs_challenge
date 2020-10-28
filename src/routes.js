import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import ResultPage from './components/ResultsPage'
// import { ResultPage } from './components/ResultPage'

const AppRouter = (props) => (
    <Router>
        <Route exact path='/' component={App} />
        <Route exact path='/result' component={ResultPage} />
    </Router>
);

export default AppRouter