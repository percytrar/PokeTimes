import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions'


class Post extends Component{
    handleDelete = ()=>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        console.log(this.props)
        const post = this.props.post ? (            
            <div className="container">
                <h4 className="center orange-text">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn orange accent-3" onClick={this.handleDelete}>DELETE</button>
                </div>
            </div>
            
        ) : (
            <h4 className="center">Loading Post...</h4>
        )
        
        return(
            <div className="container post">
                {post}                
            </div>
        );
    }
}
const mapStateToProps= (state ,ownProps)=>{
    let id = ownProps.match.params.post_id;
    return{
        post: state.posts.find(post => post.id===id) 
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);