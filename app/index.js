import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RandomJoke from './pages/RandomJoke';
import SearchJoke from './pages/SearchJoke';
import NeverEndingJokes from './pages/NeverEndingJokes';
import NeverEndingJokesV2 from './pages/NeverEndingJokes';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav/>
                    <div className="mt-5">
                        <Switch>
                            <Route exact path='/' component={RandomJoke}/>
                            <Route exact path='/search-joke' component={SearchJoke}/>
                            <Route exact path='/never-ending-jokes' component={NeverEndingJokes}/>
                            <Route render={() => <h1>404</h1>}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>
    ,
    document.getElementById('app')
);
