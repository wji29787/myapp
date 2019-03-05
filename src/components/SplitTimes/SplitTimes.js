import React from 'react'
import MajorClock from '../MajorClock/MajorClock'
const SplitTimes = ({value = []}) =>{
    return value.map((v,k)=>{
        return (<MajorClock key = {k} milliseconds = {v}></MajorClock>)
    })
}

export default SplitTimes