import React from 'react'
import cl from './Input.module.css'

function Input(props) {
  return (
    <input
      className={cl.input}
      {...props} />
  )
}

export default Input