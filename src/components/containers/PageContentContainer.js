import {connect} from 'react-redux';
import * as actions from '../../actions/simpleActions';
import React, {Component} from 'react';
import FirstPageComponent from '../FirstPageComponent';

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


class PageContentContainer extends Component{

    componentDidMount(){
        this.props.frontPagePosts();
    }

    render(){
        return(
            <div>
                <main>
                    <FirstPageComponent posts={this.props.posts}/>
                </main>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContentContainer);