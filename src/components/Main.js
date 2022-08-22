import React from 'react'
import { Link } from 'react-router-dom'


import profile from '../assed/images/profile-8.jpg'
import profile2 from '../assed/images/profile-9.jpg'
import profile3 from '../assed/images/profile-10.jpg'
import profile11 from '../assed/images/profile-11.jpg'
import profile12 from '../assed/images/profile-12.jpg'
import profile6 from '../assed/images/profile-1.jpg'
import searchIcon from '../assed/search.svg'

//sidebar

import { IoLogoJavascript } from 'react-icons/io';
import { DiPhp } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { AiOutlineHome } from 'react-icons/ai';
import { DiRuby } from 'react-icons/di';
import { TbBrandPython } from 'react-icons/tb';
import { SiKotlin } from 'react-icons/si';
import { FaSwift } from 'react-icons/fa';


import Post from './Post'
import Sidebar from './Sidebar'
import Right from './Right'
import RenderPost from './RenderPost'

import axios from "../axios";



function Main() {
    const [data, setData] = React.useState([])
    const [isloading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        setIsLoading(true)
        axios.get('/auth/me').then((res) => {
            setData(res.data)
            setIsLoading(false)
        }).catch((erroe) => {
            console.log(erroe);
            alert('произошла ошибка при получения пользователя!')
        })
    },[])


    // SideBar 
    const [acSideBar, setAcSideBar] = React.useState(0)

    const myArr = [
        {
          text: 'Главные новости',
          count: false,
          icon: <AiOutlineHome />,
          tags: ''
        },
        {
          text: 'javaScript',
          count: false,
          icon: <IoLogoJavascript />,
          tags: 'javaScript'
        },
        {
            text: 'PHP',
            count: 156,
            icon: <DiPhp />,
            tags: 'PHP'
        },
        {
            text: 'TypeScript',
            count: 5,
            icon: <SiTypescript />,
            tags: 'TypeScript'
        },
        {
            text: 'HTML && CSS',
            count: 10,
            icon: <DiRuby />,
            tags: 'html'
        },
        {
            text: 'Python',
            count: false,
            icon: <TbBrandPython />,
            tags: 'Python'
        },
        {
          text: 'Kotlin',
          count: false,
          icon: <SiKotlin />,
          tags: 'Kotlin'
        },
        {
          text: 'Swift',
          count: false,
          icon: <FaSwift />,
          tags: 'Swift'
        },
    ]

    const clickSideBar = (index) => {
      setAcSideBar(index)
  }
    
  const activeCategory = myArr[acSideBar].tags
  

    return (
        <main>
            <div className='container'>
                {/* ---------------- LEFT --------------- */}
                <div className='left'>
                        <Link to='user'>
                    <a className='profile'>
                        <div className='portfol-foto'>
                            <img className='portfol-foto' src={data.avatarUrl} />
                        </div>
                        <div className='handel'>
                            <h4>{data.fullName}</h4>
                            <p>   {data.email}</p>
                        </div>
                        
                    </a>
                        </Link>

                
                {/* ---------------- SIDEBAR --------------- */}
                  <Sidebar myArr={myArr} clickSideBar={clickSideBar} acSideBar={acSideBar} />
                </div>
                {/* ---------------- midle --------------- */}
                <div className='midle'>
                    <div className='stories'>
                        <div className='story'>
                            <div className='portfol-foto'>
                                <img src={profile} />
                            </div>
                            <p className='name'>Егор Хитров</p>
                        </div>
                        <div className='story'>
                            <div className='portfol-foto'>
                                <img src={profile2} />
                            </div>
                            <p className='name'>Матис Хус</p>
                        </div>
                        <div className='story'>
                            <div className='portfol-foto'>
                                <img src={profile3} />
                            </div>
                            <p className='name'>Петр Петров</p>
                        </div>
                        <div className='story'>
                            <div className='portfol-foto'>
                                <img src={profile11} />
                            </div>
                            <p className='name'>Дмитрий Крук</p>
                        </div>
                        <div className='story'>
                            <div className='portfol-foto'>
                                <img src={profile12} />
                            </div>
                            <p className='name'>Хальзуфат Маривана</p>
                        </div>
                        <div className='story'>
                            <div className='portfol-foto'>
                                <img src={profile6} />
                            </div>
                            <p className='name'>Чика Чиковская</p>
                        </div>
                    </div>

                    {/* <form className='create-post'>
                        <div className='portfol-foto'>
                            <img srcSet='https://img.joinfo.com/i/2018/04/5ad83d38d6749.jpg' />
                        </div>

                        <input type='text' placeholder='Как дела народ?'/>
                        <input type='submit' value='Добавить' className='btn btn-primary' />
                    </form> */}

                <div className='search-bar main'> 
                   <img className='search-log' src={searchIcon} />
                    <input type='search' placeholder='Поиск ...' />
                </div>

                    {/* ========================feads=================== */}

                   <RenderPost activeCategory={activeCategory} /> 

                   
                </div>
                {/* ---------------- right --------------- */}
                <Right/>
            </div>
        </main>
    )
}

export default Main