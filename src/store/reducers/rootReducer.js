const initState ={
    posts:[
        {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
        {userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
        {userId: 1, id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"}
    ]
}
const rootReducer = (state = initState, action)=>{
    switch (action.type) {
        case 'DELETE_POST':
            let newPost = state.posts.filter(post=>{
                return action.id !== post.id;
            })
            return {
                ...state,
                posts:newPost
            }
        default:
            break;
            //return {state};
    }
    return state
}

export default rootReducer;