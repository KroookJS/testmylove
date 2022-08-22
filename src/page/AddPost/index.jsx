import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';

import { useNavigate, useParams } from 'react-router-dom';

import axios from '../../axios'

export const AddPost = () => {
  const [isLoading, setIsLoading] = React.useState('');
  const [text, setText] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [tags, setTags] = React.useState('')
  const [imageUrl, setImageUrl] = React.useState('')
  const imputFileRef = React.useRef(null)
  const {id} = useParams()
  const navigate = useNavigate()
  
  const isEdit = Boolean(id)
  // Функция по принятию фотографий
  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData()
      const file = event.target.files[0]
      formData.append('image', file)
      const {data} = await axios.post('upload', formData)
      setImageUrl(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickRemoveImage = () => {
    
    setImageUrl('');
  };

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      const fields = {
        title,
        imageUrl,
        tags,
        text,
      }

      const { data } = isEdit 
      ? await axios.patch(`/posts/${id}`, fields)  
      : await axios.post('/posts', fields)
      const _id = isEdit ? id : data._id 
      /* navigate(`/posts/${id}`) */
      navigate(`/`)
    } catch (error) {
      console.log(error);
      alert('Ошибка при создании поста!');
    }
  }

  React.useEffect(() => {
    if(id){
      axios
       .get(`/posts/${id}`).then(({data}) => {
        setTitle(data.title)
        setText(data.text)
        setImageUrl(data.imageUrl)
      })
    }
  }, [])

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  return (
    <Paper style={{ padding: 30, marginTop: 80 }}>
      <Button onClick={() => imputFileRef.current.click()} variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input ref={imputFileRef} type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Удалить
        </Button>
      )}
      {imageUrl && (
        <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
      )}
      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="standard"
        placeholder="Заголовок статьи..."
        fullWidth
      />
            <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        value={tags}
        onChange={e => setTags(e.target.value)}
        placeholder="Тэги"
        fullWidth />
      
      <SimpleMDE className={styles.editor} 
       value={text} 
       onChange={onChange} 
       options={options} />
      <div className={styles.buttons}>
        <Button onClick={onSubmit} size="large" variant="contained">
          Опубликовать
        </Button>
        <a href="/">
          <Button size="large">Отмена</Button>
        </a>
      </div>
    </Paper>
  );
};