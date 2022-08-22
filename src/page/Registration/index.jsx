import React from 'react';

import { Navigate } from 'react-router-dom'; 
import axios from '../../axios';


import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
/* import { fetchRegister, selectAuth } from '../../redux/slice/auth'; */
import { fetchRegister, selectAuth } from "../../redux/slice/auth";


export const Registration = () => {
  
  const [imageUrl, setImageUrl] = React.useState('')
  const imputFileRef = React.useRef(null)
  const dispatch = useDispatch()
  const isAuth = useSelector(selectAuth)

  const {register, handleSubmit, setError, formState:{errors, isValid}} = useForm({
    defaultValues: {
      fullName: 'Вася Пупкин',
      email: 'vasy@mail.ru',
      password: '1234'
    },
    mode: 'onChange',
  })
/*   const handleChangeFile = async (event) => {
    try {
      const formData = new FormData()
      const file = event.target.files[0]
      formData.append('image', file)
      
      setImageUrl(data.url);
    } catch (error) {
      console.log(error);
    }
  }; */

  const onSubmit = async (values) => {
      const data = await dispatch(fetchRegister(values))
      if(!data.payload){
        alert('Не удалось зарегистрироваться!')
      }
      if(data.payload){
        window.localStorage.setItem('token', data.payload.token)
      }
  }
  if(isAuth){
    return <Navigate to='/'/>
  }

  console.log(imageUrl);
  

 
  return (
    <Paper style={{ borderRadius: 30, marginTop: 100 }} classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      
    	
      <div className={styles.avatar}>
        {imageUrl ? (
        <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
        )
        : <Avatar sx={{ width: 100, height: 100 }} />
        }
        
      </div>
     {/*  <div className={styles.btn}>
        <button onClick={() => imputFileRef.current.click()} variant="outlined" size="large">
          Загрузить аву
        </button>
        <input ref={imputFileRef} type="file" onChange={handleChangeFile} hidden />
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={styles.field}
        label="Полное имя гандон"
        error={Boolean(errors.fullName?.message)}
        helperText={errors.fullName?.message}
        {...register('fullName', {required: 'Укажите полное имя'})} 
        fullWidth
       />
      <TextField
        className={styles.field}
        label="E-Mail"
        type='email'
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        {...register('email', {required: 'Укажите почту люди'})} 
        fullWidth
      />
      <TextField
        className={styles.field}
        label="Пароль"
        type='password'
        error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        {...register('password', {required: 'Укажите почту люди'})} 
        fullWidth
      />
      <Button disabled={!isValid} type='submit' size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
    </form>
    </Paper>
  );
};
