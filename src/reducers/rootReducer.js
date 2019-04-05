const initState = {
    posts:[
        {id:'1',title:'First',body:'First body'},
        {id:'2',title:'Second',body:'Second body'},
        {id:'3',title:'Third',body:'Third body'},
    ]
}
const rootReducer = (state=initState,action) =>{
    console.log(action);
    if(action.type === 'DELETE_POST'){
        const newPosts = state.posts.filter(post=>action.id!==post.id);
        return{
            ...state,
            posts:newPosts
        }
    }
    return state;
}
export default rootReducer;