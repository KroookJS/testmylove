import React from 'react'

import profile17 from '../assed/images/profile-17.jpg'
import profile13 from '../assed/images/profile-13.jpg'
import profile5 from '../assed/images/profile-5.jpg'
import profile15 from '../assed/images/profile-15.jpg'

import { RiSearchEyeLine } from 'react-icons/ri';
import { TbEdit } from 'react-icons/tb';

import profile from '../assed/images/profile-8.jpg'
import profile3 from '../assed/images/profile-10.jpg'
import profile11 from '../assed/images/profile-11.jpg'
import profile6 from '../assed/images/profile-1.jpg'

function Right() {

    const frendArr = [
        {
            img: profile17,
            name: 'Aron Kroook',
            mess: 'Привет, как проходит обучение?',
            onLine: false
        },
        {
            img: profile6,
            name: 'Настя Бегимот',
            mess: 'Привет, как проходит обучение?',
            onLine: true
        },
        {
            img: profile,
            name: 'Аля Карапон',
            mess: 'Привет, как проходит обучение?',
            onLine: false
        },
        {
            img: profile3,
            name: 'Милан Пупс',
            mess: 'Привет, как проходит обучение?',
            onLine: false
        },
        {
            img: profile11,
            name: 'Егор Вольнов',
            mess: 'Привет, как проходит обучение?',
            onLine: false
        },
        {
            img: profile5,
            name: 'Евгений Черняк',
            mess: 'Не общайся с идиотами',
            onLine: true
        },
    ]

    const [searchValue, setSearchValue] = React.useState('')

    const [box, setBox] = React.useState(false)
    const createBox = (e) => {
        setBox(!box) 

        setTimeout(() => {
            setBox(false)
        }, 1500)
    }

    const renderFrends = frendArr
    .filter(el => el.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
    .map((el, index) => {
        return <div className='message'>
                    <div className='portfol-foto'>
                        <img src={el.img} />
                        {el.onLine && <div className='active'></div>}
                    </div>

                    <div className='message-body'>
                        <h5>{el.name}</h5>
                        <p className='text-muted'>
                            {el.mess}
                        </p>
                    </div>
                </div>
    })

    console.log(searchValue);

  return (
    <div>
           <div className='right'>
                    <div onClick={() => createBox()} className={`massages ${box ? 'boxStyle' : ''}`}>
                        <div className='heading'>
                            <h4>Сообщения</h4>
                            <span>
                                <TbEdit />
                            </span>
                        </div>
                        <div className='search-bar'>
                            <span>
                                <RiSearchEyeLine />
                            </span>
                            <input 
                                type='search'
                                value={searchValue}
                                placeholder='Поиск по сообщениям'
                                onChange={e => setSearchValue(e.target.value)}
                                />
                                
                        </div>

                        <div className='category'>
                            <h6 className='active'>
                                Primary
                            </h6>
                            <h6 className='messages-requests'>
                                General
                            </h6>
                            <h6 className='request-by'>
                                Requests(7)
                            </h6>
                        </div>

                        {renderFrends}

{/*                     <div className='message'>
                        <div className='portfol-foto'>
                            <img src={profile17} />
                        </div>

                        <div className='message-body'>
                            <h5>Arnold Krook</h5>
                            <p className='text-muted'>
                                Hi, go to work
                            </p>

                        </div>
                    </div>
                    <div className='message'>
                        <div className='portfol-foto'>
                            <img src={profile} />
                        </div>

                        <div className='message-body'>
                            <h5>Arnold Krook</h5>
                            <p className='text-muted'>
                                Hi, go to work
                            </p>

                        </div>
                    </div>
                    <div className='message'>
                        <div className='portfol-foto'>
                            <img src={profile11} />
                        </div>

                        <div className='message-body'>
                            <h5>Arnold Krook</h5>
                            <p className='text-muted'>
                                Hi, go to work
                            </p>

                        </div>
                    </div>
                    <div className='message'>
                        <div className='portfol-foto'>
                            <img src={profile6} />
                            <div className='active'></div>
                        </div>

                        <div className='message-body'>
                            <h5>Arnold Krook</h5>
                            <p className='text-muted'>
                                Hi, go to work
                            </p>

                        </div>
                    </div>
                    <div className='message'>
                        <div className='portfol-foto'>
                            <img src={profile3} />
                        </div>

                        <div className='message-body'>
                            <h5>Arnold Krook</h5>
                            <p className='text-muted'>
                                Hi, go to work
                            </p>

                        </div>
                    </div>
                    <div className='message'>
                        <div className='portfol-foto'>
                            <img src={profile5} />
                            <div className='active'></div>
                        </div>

                        <div className='message-body'>
                            <h5>Arnold Krook</h5>
                            <p className='text-muted'>
                                Hi, go to work
                            </p>

                        </div>
                    </div> */}
                    </div> 

                    <div className='frend-request'>
                        <h4 >
                            Рекомендации
                        </h4>
                        <div className='request'>
                            <div className='info'>
                                <div className='portfol-foto'>
                                    <img src={profile13}/>
                                </div>

                                <div>
                                    <h5>
                                       Сода Лав
                                    </h5>
                                    <p className='text-muted'>
                                        8 общих друзей
                                    </p>
                                
                                </div>

                            </div>

                            <div className='action'>
                                        <button className='btn btn-primary'>
                                            Acect
                                        </button>
                                        <button className='btn'>
                                            Despect
                                        </button>
                            </div>
                        </div>
                        <div className='request'>
                            <div className='info'>
                                <div className='portfol-foto'>
                                    <img src={profile15}/>
                                </div>

                                <div>
                                    <h5>
                                      Cаша Маёт
                                    </h5>
                                    <p className='text-muted'>
                                        2 общих друга
                                    </p>
                                
                                </div>

                            </div>

                            <div className='action'>
                                        <button className='btn btn-primary'>
                                            Acect
                                        </button>
                                        <button className='btn'>
                                            Despect
                                        </button>
                            </div>
                        </div>
                        <div className='request'>
                            <div className='info'>
                                <div className='portfol-foto'>
                                    <img src={profile5}/>
                                </div>

                                <div>
                                    <h5>
                                       Кристина Кристинина
                                    </h5>
                                    <p className='text-muted'>
                                        1 общий друг
                                    </p>
                                
                                </div>

                            </div>

                            <div className='action'>
                                        <button className='btn btn-primary'>
                                            Acect
                                        </button>
                                        <button className='btn'>
                                            Despect
                                        </button>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Right