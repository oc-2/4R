import React from 'react'
import './style.css'
export default function Details() {
  return (
    <div className='DetailsParent'>
        <span className='DetailsHead'>4R - GUI</span>
        <span className='DetailsText'>
            {'Hello And Welcome To 4R Sign In Way :) This code provides a very basic and minimalistic password authentication system that relies on the user inputting characters at specific positions in their password. It is not suitable for real-world security purposes and should be considered a learning exercise. For real-world applications, more robust and secure authentication methods should be used, such as hashing and salting passwords, implementing rate limiting, and using secure protocols like HTTPS. Also You can merge with high secure protocols.'.toUpperCase()}</span>
    </div>
  )
}
