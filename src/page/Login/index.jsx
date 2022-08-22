import React from "react";

import { Navigate } from 'react-router-dom'; 

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchAuth, selectAuth } from "../../redux/slice/auth";



export const Login = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(selectAuth)

  const {register, handleSubmit, setError, formState:{errors, isValid}} = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values))

    if(!data.payload){
      alert('Не удалось Авторизоваться!')
    }

    if('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token)
    }
  }

    if(isAuth){
      return <Navigate to='/' />
    }   

  
  return (
    
    <Paper style={{ borderRadius: 30, marginTop: 100 }} classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        {...register('password', {required: 'Укажите пароль суки'})}
        fullWidth
        />
      <Button type='submit' size="large" variant="contained" fullWidth>
        Войти
      </Button>
      </form>
{/*       </form> */}
     </Paper>

  );
};
