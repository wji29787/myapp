import React from 'react'
import {ms2Time} from '../../utils/util'

const MajorClock = React.memo(({milliseconds = 0,activated=false})=>{
    return (<React.Fragment>
        <style jsx>{`
         h1 {
             'fontFamily': monospace;
             color: ${activated? 'red' : 'black'};
         }
        `}
       </style>
        <h1>{ms2Time(milliseconds)}</h1>
    </React.Fragment>)
})
export default MajorClock