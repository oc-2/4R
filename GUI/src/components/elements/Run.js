import React, { useEffect, useRef, useState } from 'react'
import Inp from './Inp'
export default function Run(props) {
    const rcomb1 = useRef(null);
    const rcomb2 = useRef(null);
    const rcomb3 = useRef(null);
    const rcomb4 = useRef(null);
    const [comb1, setcomb1] = useState('');
    const [comb2, setcomb2] = useState('');
    const [comb3, setcomb3] = useState('');
    const [comb4, setcomb4] = useState('');
    const sethcomb1 = (e)=>{
        if(e.target.value.length === 1){
            setcomb1(e.target.value.toUpperCase())
            rcomb2.current.focus()
        }else{
            if(e.nativeEvent.data === null){
                setcomb1(e.target.value.toUpperCase())
            }
        }
    }
    const sethcomb2 = (e)=>{
        if(e.target.value.length === 1){
            setcomb2(e.target.value.toUpperCase())
            rcomb3.current.focus()
        }else{
            if(e.nativeEvent.data === null){
                setcomb2(e.target.value.toUpperCase())
            }
        }
    }
    const sethcomb3 = (e)=>{
        if(e.target.value.length === 1){
            setcomb3(e.target.value.toUpperCase())
            rcomb4.current.focus()
        }else{
            if(e.nativeEvent.data === null){
                setcomb3(e.target.value.toUpperCase())
            }
        }
    }
    const sethcomb4 = (e)=>{
        if(e.target.value.length === 1){
            setcomb4(e.target.value.toUpperCase())
        }else{
            if(e.nativeEvent.data === null){
                setcomb4(e.target.value.toUpperCase())
            }
        }
    }
    const [Random, setRandom] = useState([0,0,0,0]);
    useEffect(() => {
        setRandom([
            Math.floor(Math.random()*8)+1,
            Math.floor(Math.random()*8)+1,
            Math.floor(Math.random()*8)+1,
            Math.floor(Math.random()*8)+1,
        ])
    }, [])
    const accessCheck = ()=>{
        if(comb1 === props.password[Random[0]-1] && 
            comb2 === props.password[Random[1]-1] && 
            comb3 === props.password[Random[2]-1] && 
            comb4 === props.password[Random[3]-1]
            ){
                props.done()
        }else{
            setRandom([
                Math.floor(Math.random()*8)+1,
                Math.floor(Math.random()*8)+1,
                Math.floor(Math.random()*8)+1,
                Math.floor(Math.random()*8)+1,
            ])
            setcomb1('')
            setcomb2('')
            setcomb3('')
            setcomb4('')
            rcomb1.current.focus()
        }
    }
    useEffect(() => {
        if(comb1 !== ''){
            if(comb2 !== ''){
                if(comb3 !== ''){
                    if(comb4 !== ''){
                        accessCheck()
                    }
                }
            }
        }
    }, [comb1,comb2,comb3,comb4])
  return (
    <React.Fragment>
        <div className='PasswordInputLabel'><span>{'Try to enter password by below index for each blank'.toUpperCase()}</span></div>
        <div className='PasswordInputParent'>
            <Inp value={comb1} func={(e)=>sethcomb1(e)} refo={rcomb1} aut={true}/>
            <Inp value={comb2} func={(e)=>sethcomb2(e)} refo={rcomb2}/>
            <Inp value={comb3} func={(e)=>sethcomb3(e)} refo={rcomb3}/>
            <Inp value={comb4} func={(e)=>sethcomb4(e)} refo={rcomb4}/>
        </div>
        <div className='PasswordInputIndexParent'>
            <span>{Random[0]}</span>
            <span>{Random[1]}</span>
            <span>{Random[2]}</span>
            <span>{Random[3]}</span>
        </div>
    </React.Fragment>
  )
}
