import React,{useEffect,useState} from 'react';
import axios from 'axios'
const Post = (props)=>{
    const[post,setPost] = useState(null);

    useEffect(()=>{
        //console.log('props',props);
        let id = props.match.params.post_id;
        fetchDummyData(id);
    },[])


    const fetchDummyData = (id)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
    }

    const postView = post?(
        <div className="post">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
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

export default Post;