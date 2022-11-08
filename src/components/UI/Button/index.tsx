import React from 'react'

import s from './Button.module.scss'

type ButtonType = {
   children: string,
   type?: "button" | "submit" | "reset" | undefined,
   onClick: any,
   disabled?: boolean
}

const Button: React.FC<ButtonType> = ({children, type, onClick, disabled}) => {
  return (
    <button 
      className={s.button}
      type={type ? type : 'button'}   
      onClick={onClick}
      disabled={disabled}
   >
      {children}
    </button>
  )
}

export default Button