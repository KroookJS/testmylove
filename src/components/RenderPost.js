import React from 'react'

import profile13 from '../assed/images/profile-13.jpg'
import profile5 from '../assed/images/profile-5.jpg'
import profile10 from '../assed/images/profile-10.jpg'
import profile4 from '../assed/images/profile-4.jpg'
import profile15 from '../assed/images/profile-15.jpg'
import profile17 from '../assed/images/profile-17.jpg'
import profile18 from '../assed/images/profile-18.jpg'

import fead from '../assed/images/feed-1.jpg'
import fead2 from '../assed/images/feed-2.jpg'
import fead3 from '../assed/images/feed-3.jpg'
import fead4 from '../assed/images/feed-4.jpg'
import fead5 from '../assed/images/feed-5.jpg'
import fead6 from '../assed/images/feed-6.jpg'
import fead7 from '../assed/images/feed-7.jpg'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchPosts } from '../redux/slice/posts'





function RenderPost({activeCategory}) {
  const dispatch = useDispatch()
  console.log(activeCategory);
  React.useEffect(() => {
      dispatch(fetchPosts())
  },[])

  const {posts} = useSelector((state) => state.posts)
  const isPostLoading = posts.status === 'loading'
  console.log(posts.items[0])
  return (
    <>
      {isPostLoading
      ? <h2>Идет загрузка...</h2>
      : posts.items
      .filter((obj) => obj.tags[0].toLocaleLowerCase().includes(activeCategory.toLocaleLowerCase())) 
      .map((el, index) => 
          
          isPostLoading ? (
            <h1>Загрузка рендора</h1>
          ) 
          : <Post key={index} {...el} />
         )}
           </>
  )
      }

      

export default RenderPost