import React, {Component} from 'react';

class SinglePostComponent extends Component {
    render() {
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
                            <div className="col col-sm-12 col-md-12 col-lg-12"
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