import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/simpleActions';
import SinglePostComponent from "../SinglePostComponent";

const mapStateToProps = state => ({
    singlePostDetails: state.simpleReducer.singlePost
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
        console.log("Single Post: ", this.props.singlePostDetails);
        return (
            <div>
                <main>
                    <SinglePostComponent postDetails={this.props.singlePostDetails} />
                </main>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer);