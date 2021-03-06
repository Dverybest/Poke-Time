import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../images/Pokebola.png'

const Home =()=>{

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetchDummyData();
    },[]);

    const fetchDummyData = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
            //to cut down the respones data array to pick the first 10 only use res.data.slice(0,10)
            setPosts(res.data.slice(0,10))
        })
    }
    const postList = posts.length?(
        posts.map(post=>{
            return(
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A pokaball"/>
                    <div className="card-content">
                        <Link to={`/${post.id}`}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    ):(
        <div className="center">No posts yet</div>
    )


    return(
        <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
        </div>
    )
}
export default Home;