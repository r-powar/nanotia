import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/simpleActions';
import SinglePostComponent from "../SinglePostComponent";

const mapStateToProps = state => ({
    singlePostDetails: state.simpleReducer.singlePost,
    articleLimit: state.simpleReducer.articleLimit
});

const mapDispatchToProps = dispatch => {
    return {
        singlePost: (value) => {
            dispatch(actions.singlePostItem(value));

        }
    }
};

class SinglePostContainer extends Component {
    componentDidMount() {
        const {slug} = this.props.match.params;
        this.props.singlePost(slug);
    }

    render() {
        return (
            <div>
                <main>
                    <SinglePostComponent postDetails={this.props.singlePostDetails} limit={this.props.articleLimit} />
                </main>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer);