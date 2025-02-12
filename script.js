const { type } = require("os");
const { createStore } = require("redux");

const initialState = {
    name: "Pratham",
    age: 25,
    posts: 5
};

function reducer(state = initialState, action) {
    if (action.type === "post/increment") { // ✅ Fixed comparison
        return { ...state, posts: state.posts + 1 };
    } 
    else if (action.type === "post/decrement") {
        return { ...state, posts: state.posts - 1 };
    }
    return state; // ✅ Ensures state is not lost
}

const store = createStore(reducer);

 // ✅ Logs initial state
 store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch({type:"post/increment"})

store.dispatch({type:"post/decrement"})
