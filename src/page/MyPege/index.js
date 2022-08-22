import React from 'react'
import axios from "../../axios";

function MyPage() {
    const [data, setData] = React.useState([])
    const [isloading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        setIsLoading(true)
        axios.get('/posts').then((res) => {
            setData(res.data)
            setIsLoading(false)
        }).catch((erroe) => {
            console.log(erroe);
            alert('произошла ошибка при получения пользователя!')
        })
        
    },[])
  return (
    <div>
        Привет Мир Это станица потльзвателя
        <h1>Дмитрия Крук</h1>

        <h3>Тут будет много интерестного!</h3>
    </div>
  )
}

export default MyPage