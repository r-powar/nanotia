import {connect} from 'react-redux';
import * as actions from '../../actions/simpleActions';
import React, {Component} from 'react';
import FrontPageComponent from '../FrontPageComponent';

const mapStateToProps = state => ({
    posts: state.simpleReducer.posts
});

const mapDispatchToProps = dispatch => {

    return {
        frontPagePosts: () => {
            dispatch(actions.frontPageItems())
        }
    }
};


class FrontPageContentContainer extends Component{

    componentDidMount(){
        this.props.frontPagePosts();
    }

    render(){
        return(
            <div>
                <main>
                    <FrontPageComponent posts={this.props.posts}/>
                </main>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageContentContainer);