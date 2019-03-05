import React,{Component,Fragment} from 'react'
import MajorClock from '../MajorClock/MajorClock'
import ControlButtons from '../ControlButtons/ControlButtons'
import SplitTimes from '../SplitTimes/SplitTimes'
export default class StopWatch extends Component {
    state = {
        isStarted:false,
        startTime:null,
        currentTime:null,
        splits:[]
    }
    onSplit =()=>{
        this.setState({
            splits:[...this.state.splits,this.state.currentTime - this.state.startTime]
        })
    }
    onStart = () => {
        this.setState({
          isStarted: true,
          startTime: new Date(),
          currentTime: new Date(),
        });
        this.intervalHandle = setInterval(()=>{
            this.setState({
                currentTime:new Date()
            })
        },1000/60)
    } 
    onPause = ()=>{
        clearInterval(this.intervalHandle)
        this.setState({
            isStarted:false
        })
    } 
    onReset = ()=>{
        this.setState({
            startTime:null,
            currentTime:null,
            splits:[]
        })
    }  
    render (){
        return (
            <Fragment>
                <style jsx>{`
                h1{
                    color:green
                }
                `}</style>
                <h1>秒表</h1>
                <MajorClock 
                milliseconds = {this.state.currentTime-this.state.startTime}
                activated = {this.state.isStarted}
                />
                <ControlButtons 
                activated = {this.state.isStarted}
                 onPause = {this.onPause} 
                 onSplit = {this.onSplit} 
                 onStart = {this.onStart}
                 onReset = {this.onReset}
                 />
                <SplitTimes value = {this.state.splits}/>
            </Fragment>
        )
    }
}