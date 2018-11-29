import React, {Component} from 'react';

class SinglePostComponent extends Component {
    render() {
        {/* set css according to limit value*/}
        let content = this.props.limit ? 'col col-sm-12 col-md-12 col-lg-12 paywall' : 'col col-sm-12 col-md-12 col-lg-12';

        return (
            <div>
                <div className="singlePostContent">
                    <div className="container">
                        <div className="row">
                            <div className="col col-sm-12 col-md-12">
                                <span>{this.props.postDetails.author}</span>
                                {' || '}
                                <span>  {this.props.postDetails.readTime + ' mins'}</span>
                            </div>
                            <div className="col col-sm-12 col-md-12">
                                <h1>{this.props.postDetails.title}</h1>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className={content}
                                 dangerouslySetInnerHTML={{__html: this.props.postDetails.content}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default SinglePostComponent;