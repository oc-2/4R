import React from 'react'
import './style.css'
export default function Inp(props) {
  return (
    <input type='text'
     className='InpInput'
      value={props.value}
       onChange={props.func}
        ref={props.refo}
         autoFocus={props.aut}
    
    />
  )
}
