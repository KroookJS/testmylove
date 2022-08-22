import { useSelect } from '@mui/base'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import searchIcon from '../assed/search.svg'
import { logout, selectAuth } from '../redux/slice/auth'

function Header() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectAuth)
    const onClickLogout = () => {
        if(window.confirm('Вы действительно хотите выйти')){
          dispatch(logout())
          window.localStorage.removeItem('token')
        }
      }
  return (
        <nav>
            <div className='container'>
                <Link to='/'>
                    <h2 className='logo'>
                        Kroook#Social
                    </h2>
                </Link>

                <div className='search-bar'> 
                   <img className='search-log' src={searchIcon} />
                    <input type='search' placeholder='Поиск ...' />
                </div>

                <div className='auto-btn'>
                    {isAuth 
                    ? (
                        <Link to='login'>
                        <label onClick={onClickLogout} className='btn btn-login'>Выйти</label>
                    </Link>
                    )
                    :
                    (
                    <>
                    <Link to='login'>
                        <label className='btn btn-login'>Войти</label>
                    </Link>
                    <Link to='register'>
                        <label className='btn btn-register'>Регистрация</label>
                    </Link>
                    </>
                    )
                    }
                   {isAuth &&
                   <div className='port-pic'>
                        <img className='portfol-foto' src='https://img.joinfo.com/i/2018/04/5ad83d38d6749.jpg' alt='ava' />
                    </div>       
                }

                </div>
            </div>
        </nav>
  )
}

export default Header