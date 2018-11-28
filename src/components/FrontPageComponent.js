import React, {Component} from 'react';

class FrontPageComponent extends Component{
    render(){

        return(
            <div>
                <div className="container frontPageContainer">
                    {this.props.posts.map((val, idx) => {
                        return(
                            <div key={idx} className='row frontPageContent'>
                                <div className="col-12 col-md-12 col-sm-12 col-lg-12">
                                    <h2>
                                        <a href={'/' + val.slug}>
                                            {val.title}
                                        </a>
                                    </h2>
                                </div>
                                <div className="col-12 col-md-12 col-sm-12 col-lg-12">{val.excerpt}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FrontPageComponent;