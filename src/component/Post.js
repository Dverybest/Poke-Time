import React,{useEffect,useState} from 'react';
// import axios from 'axios'
import {connect} from 'react-redux'
import {deletePost} from '../store/action/postAction'
const Post = (props)=>{

    // const[post,setPost] = useState(null);

    // useEffect(()=>{
    //     //console.log('props',props);
    //     let id = props.match.params.post_id;
    //     fetchDummyData(id);
    // },[])


    // const fetchDummyData = (id)=>{
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(res=>{
    //         console.log(res)
    //         setPost(res.data)
    //     })
    // }
    
    const {post,deletePost} = props;

    const handleClick =(id)=>{
        deletePost(id);
        props.history.push('/');
    }

    const postView = post?(
        <div className="post">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
            <button className="btn grey" onClick={()=>handleClick(post.id)}>
                Delete Post
            </button>
        </div>
    ):(
        <div className="center">Loding post...</div>
    )

    return(
        <div className="container">
            <h4>{postView}</h4>
        </div>
    )
}

const mapStateToProps = (state,ownProps)=>{
    let id = ownProps.match.params.post_id;
    let post = state.posts.find(post=>post.id == id);

    return{
        post:post
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        deletePost : (id)=>{
            dispatch(deletePost(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);