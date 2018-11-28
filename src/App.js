import React, {Component} from 'react';
import AppHeader from '../src/components/AppHeaderComponent'
import './App.css';
import PageContent from '../src/components/containers/PageContentContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppHeader></AppHeader>
                <PageContent></PageContent>
            </div>
        );
    }
}

export default App;
