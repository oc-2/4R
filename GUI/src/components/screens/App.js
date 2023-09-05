import React, { useState } from 'react'
import SetPassword from '../elements/SetPassword'
import Run from '../elements/Run'
import Access from '../elements/Access'

export default function Home() {
    const [password, setPassword] = useState(null)
    const [access, setAccess] = useState(false)
  return (
    <React.Fragment>
        {password === null ? <SetPassword access={setPassword}/> : access ? <Access/>:<Run password={password} done={()=>setAccess(true)}/>}
    </React.Fragment>
  )
}
