import React from 'react'

import profile13 from '../assed/images/profile-13.jpg'
import profile5 from '../assed/images/profile-5.jpg'
import profile10 from '../assed/images/profile-10.jpg'
import profile4 from '../assed/images/profile-4.jpg'
import profile15 from '../assed/images/profile-15.jpg'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

import { AiOutlineEllipsis } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchRemovePost } from '../redux/slice/posts'



function Post(el) {
    const dispatch = useDispatch()

    const [likeColor, setLikeColor] = React.useState(false)
    
    const handelLike = () => {
        setLikeColor(!likeColor)
    }

    const onClickRemove = () => {
        if(window.confirm('Вы действительно хотите удалить статью')){
          dispatch(fetchRemovePost(el._id))
        }
      }

    

  return (
    <div className='feads'>
    <div className='fead'>
        <div className='head'>
            <div className='user'>
                <div className='portfol-foto'>
                    <img src={el.user.avatarUrl} />
                </div>
                <div className='info'>
                    <h3 className='name-user'>
                        {el.user.fullName}
                        
                        
                    </h3>
                    <small>{el.user.createdAt}</small>
                </div>
            </div>
            
                <div >
                  <Link to={`/posts/${el._id}/edit`}>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton onClick={onClickRemove} color="secondary">
                    <DeleteIcon onClick={onClickRemove} />
                  </IconButton>
                </div>
            
        </div>

        <div className='photo'>
            <img src={`http://localhost:4444${el.imageUrl}`} />
        </div>

        <div className='action-button'>
            <div className='interactiv-button'>
                <span onClick={handelLike} className={`${likeColor && ' heart-like'}`}>
                    {<AiOutlineHeart/>}
                </span>
                <span>
                    {<AiOutlineComment/>}
                </span>
                <span>
                    {<AiOutlineShareAlt/>}
                </span>
            </div>
            <div className='bookmark'>
                <span>
                    {<BsBookmark />}
                </span>
            </div>
        </div>

        <div className='liked-by'>
            <div className='user-liked'>
               <span>
                <img src={profile10} />
            </span>
            <span>
                <img src={profile4} />
            </span>
            <span>
                <img src={profile15} />
            </span> 
            
            {/* <p>Понравилось<b> */}{/* {el.likeBy} </b> и <b>{el.andBy} */} {/* пользователям</b></p> */}
            <Link to={`posts/${el._id}`}>
                <h2 className='title-post'>{el.title}</h2>
            </Link>
            </div>
        </div>

        <div className='caption'>
            {/* <h3>{el.text}</h3> */}
          {/*   <p><b>{el.comentName}</b> {el.coment} <span className='harsh-tag'>#lifeStyle</span></p> */}
        </div>

        <div className='comments text-muted'>
            Всего 372 коментария
        </div>

    </div>

</div>
  )
}

export default Post