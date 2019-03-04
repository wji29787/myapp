import React from 'react'

const Controlbuttons = (props)=>{
    // 
    const {activated,onStart,onPause,onReset,onSplit} = props
    if(activated){
        return(<div>
            <button onClick = {onSplit}>计次</button>
            <button onClick = {onSplit}>停止</button>
        </div>)
    }
}
export default Controlbuttons