import React from 'react'

import s from './Input.module.scss'

type GreetFunction = (e: React.FormEvent<HTMLInputElement>) => void;

interface InputType{
   onChange: GreetFunction, 
   value: string,
   error?: string,
   type: string,
   placeholder?: string,
   id?: string,
   name: string,
}

const Input: React.FC<InputType> = ({onChange, value, error, type, placeholder, id, name }) => {
  return (
    <div className={s.input_wrapper}>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={id && id}
        placeholder={placeholder}
        className={s.input}
        name={name}
        style={{border: error ? '1px solid rgb(145, 78, 78)' : '1px solid transparent'}}
      />
      <span className={s.error}>{error}</span>
    </div>
  )
}

export default Input