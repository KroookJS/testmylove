import React from 'react'

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineCompass } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineSetting } from 'react-icons/ai';
import { GiIfrit } from 'react-icons/gi';
import { DiGoogleAnalytics } from 'react-icons/di';
import { AiOutlineLike } from 'react-icons/ai';
import { Link } from 'react-router-dom'


function Sidebar({myArr, clickSideBar, acSideBar}) {

   
  


    const renderSideBar = myArr.map((el, index) => {
            return <a 
                   key={index} 
                   onClick={() => clickSideBar(index)}
                   className={`menu-item ${acSideBar === index && 'active'}`}>
                <span>{el.icon} {el.count && <small className='not-count'>{el.count}</small> } </span><h3>{el.text}</h3>
            </a>
        })

   

  return (
    <div>
        <div className='sidebar'>     
                {
                    renderSideBar
                }
             </div>
             <Link to='new'>
              <label className='btn btn-primary'>Create post</label>
             </Link>
    </div>
  )
}

export default Sidebar