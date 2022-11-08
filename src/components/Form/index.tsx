import * as React from 'react'
import { useForm } from '../../hooks/useForm'
import Button from '../UI/Button'
import Input from '../UI/Input'

import s from './Form.module.scss'

type Props = {
   saveArticle: (state: IMatrix | any) => void
 }
 const INITIAL_VALUE = {
    m: '',
    n: '',
    x: '',
    // items: []
 }

const Form: React.FC<Props> = ({ saveArticle }) => {


   const addNewArticle = (form: MatrixState) => {
      saveArticle(form)
   }

   const { form, handleField, handleSubmit, errors } = useForm({
    initialValues: INITIAL_VALUE,
    submit: addNewArticle,
  });
  


  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Input 
        value={form.m}
        id="input_m"
        onChange={handleField}
        type='number'
        name='m'
        placeholder='enter m'
        error={errors.m}
      />
      <Input 
        value={form.n}
        id="input_n"
        onChange={handleField}
        name='n'
        type='number'
        placeholder='enter n'
        error={errors.n}
      />
      <Input 
        value={form.x}
        id="input_x"
        onChange={handleField}
        name='x'
        type='number'
        placeholder='enter x'
        error={errors.x}
      />
      <Button 
        type='submit'
        onClick={handleSubmit}
        disabled={errors.m || errors.n || errors.x ? true : false}
        >
        Create matrix
      </Button>
    </form>
  )
}

export default Form;
