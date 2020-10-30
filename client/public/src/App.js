import React from 'react'

// redux or props sharing could also be used
import {BrowserRouter as Router , Route} from 'react-router-dom'



const App  = () => {
    return (
        <Router> 
            <Route path = "/" exact component = {join}/>
            <Route path = "/chat" component = {chat}/>

        </Router>

    );
}

// user will come to / path and greeted with form where he will pass data
// and will redirected to the /chat and using that data, the chat will be 
// rendered