import React, { useEffect, useRef, useState } from 'react'
import Inp from './Inp'

export default function SetPassword(props) {
    const [PassIndex0, setPassIndex0] = useState('')
    const [PassIndex1, setPassIndex1] = useState('')
    const [PassIndex2, setPassIndex2] = useState('')
    const [PassIndex3, setPassIndex3] = useState('')
    const [PassIndex4, setPassIndex4] = useState('')
    const [PassIndex5, setPassIndex5] = useState('')
    const [PassIndex6, setPassIndex6] = useState('')
    const [PassIndex7, setPassIndex7] = useState('')
    const refPass0 = useRef(null)
    const refPass1 = useRef(null)
    const refPass2 = useRef(null)
    const refPass3 = useRef(null)
    const refPass4 = useRef(null)
    const refPass5 = useRef(null)
    const refPass6 = useRef(null)
    const refPass7 = useRef(null)
    const setPass0 = (e)=>{
        if(e.target.value.length === 1){
            setPassIndex0(e.target.value.toUpperCase())
            refPass0.current.focus()
        }else{
            if(e.nativeEvent.data === null){
                setPassIndex0(e.target.value.toUpperCase())
            }
        }
    }
    const setPass1 = (e)=>{
        if(e.target.value.length === 1){
            setPassIndex1(e.target.value.toUpperCase())
            refPass1.current.focus()
        }else{
            if(e.nativeEvent.data === null){
                setPassIndex1(e.target.value.toUpperCase())
                refPass7.current.focus()
            }
        }
    }
    const setPass2 = (e)=>{
        if(e.target.value.length === 1){
            setPassIndex2(e.target.value.toUpperCase())
            refPass2.current.focus()
        }else{
            if(e.nativeEvent.data === null){
                setPassIndex2(e.target.value.toUpperCase())
                refPass0.current.focus()
            }
        }
    }
    const setPass3 = (e)=>{
        if(e.target.value.length === 1){
            setPassIndex3(e.target.value.toUpperCase())
            refPass3.current.focus()
        }else{
            if(e.nativeEvent.data === null){
                setPassIndex3(e.target.value.toUpperCase())
                refPass1.current.focus()
            }
        }
    }
    const setPass4 = (e)=>{
        if(e.target.value.length === 1){
            setPassIndex4(e.target.value.toUpperCase())
            refPass4.current.focus()
        }else{
            if(e.nativeEvent.data === null){
                setPassIndex4(e.target.value.toUpperCase())
                refPass2.current.focus()
            }
        }
    }
    const setPass5 = (e)=>{
        if(e.target.value.length === 1){
            setPassIndex5(e.target.value.toUpperCase())
            refPass5.current.focus()
        }else{
            if(e.nativeEvent.data === null){
                setPassIndex5(e.target.value.toUpperCase())
                refPass3.current.focus()
            }
        }
    }
    const setPass6 = (e)=>{
        if(e.target.value.length === 1){
            setPassIndex6(e.target.value.toUpperCase())
            refPass6.current.focus()
        }else{
            if(e.nativeEvent.data === null){
                setPassIndex6(e.target.value.toUpperCase())
                refPass4.current.focus()
            }
        }
    }
    const setPass7 = (e)=>{
        if(e.target.value.length === 1){
            setPassIndex7(e.target.value.toUpperCase())
        }else{
            if(e.nativeEvent.data === null){
                setPassIndex7(e.target.value.toUpperCase())
                refPass5.current.focus()
            }
        }
    }
    useEffect(() => {
        if(PassIndex0 !== ''){
            if(PassIndex1 !== ''){
                if(PassIndex2 !== ''){
                    if(PassIndex3 !== ''){
                        if(PassIndex4 !== ''){
                            if(PassIndex5 !== ''){
                                if(PassIndex6 !== ''){
                                    if(PassIndex7 !== ''){
                                        props.access(PassIndex0+PassIndex1+PassIndex2+PassIndex3+PassIndex4+PassIndex5+PassIndex6+PassIndex7)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, [props,PassIndex0,PassIndex1,PassIndex2,PassIndex3,PassIndex4,PassIndex5,PassIndex6,PassIndex7])
    
  return (
    <React.Fragment>
        <div className='PasswordInputLabel'><span>{'Please Set A PassWord (The Number Is Indexes Remember It)'.toUpperCase()}</span></div>
        <div className='PasswordInputParent'>
        <Inp value={PassIndex0} func={(e)=>setPass0(e)} refo={refPass7} aut={true}/>
        <Inp value={PassIndex1} func={(e)=>setPass1(e)} refo={refPass0}/>
        <Inp value={PassIndex2} func={(e)=>setPass2(e)} refo={refPass1}/>
        <Inp value={PassIndex3} func={(e)=>setPass3(e)} refo={refPass2}/>
        <Inp value={PassIndex4} func={(e)=>setPass4(e)} refo={refPass3}/>
        <Inp value={PassIndex5} func={(e)=>setPass5(e)} refo={refPass4}/>
        <Inp value={PassIndex6} func={(e)=>setPass6(e)} refo={refPass5}/>
        <Inp value={PassIndex7} func={(e)=>setPass7(e)} refo={refPass6}/> 
        </div>
        <div className='PasswordInputIndexParent'>
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
        </div>
    </React.Fragment>
  )
}
