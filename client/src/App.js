import React from 'react'

// redux or props sharing could also be used
import {BrowserRouter as Router , Route} from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'


const App  = () => {
    return (
        <Router> 
            <Route path = "/" exact component = {Join}/>
            <Route path = "/chat" component = {Chat}/>

        </Router>

    );
}

// user will come to / path and greeted with form where he will pass data
// and will redirected to the /chat and using that data, the chat will be 
// rendered

export default App