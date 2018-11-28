import React, {Component} from 'react';

class AppHeaderComponent extends Component {
    render() {
        return (
            <div>
                <header className='appHeader'>
                    <div className='container headerContainer'>
                        <div className="row">
                            <a href="/">NanoTIA</a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default AppHeaderComponent;