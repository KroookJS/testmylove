import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './slice/auth'
import { postsReducer } from './slice/posts'


const store = configureStore({
    reducer:{
        posts: postsReducer,
        auth: userReducer,
    }
})
export default store



/* import {configureStore} from '@reduxjs/toolkit'
import { postsReducers } from './slice/posts'

const store = configureStore({
    reducer: {
        posts: postsReducers
    }
})

export default store  */