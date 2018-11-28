import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from '../src/components/AppHeaderComponent'
import './App.css';
import PageContent from './components/containers/FrontPageContentContainer';
import SinglePost from './components/containers/SinglePostContainer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <AppHeader/>
                    <Route exact path='/' component={PageContent}/>
                    <Route path='/:slug' component={SinglePost}/>
                </div>
            </Router>

        );
    }
}

export default App;
