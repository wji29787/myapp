import React, { Component } from 'react';
import './carousel.css'
export default class Carousel extends Component {

    state ={
        active:0,
        width:0,
        height:0,
        timer:null,
    }
    componentDidMount(){
        let el = this.refs['carousel'];
        let styleObje = {
            width:el.offsetWidth,
            height:el.offsetHeight
        }
        this.setState({
            ...styleObje
        })
        this.startLoop()
    }
    componentWillUnmount(){
       
    }
    startLoop(){
          let len = this.props.children.length
          let fn=()=>{
            let active = this.state.active;
            if(active === len-1){
                this.setState({
                    active:0 
                })
            }else{
                this.setState({
                    active:active+1 
                })
            }
            let timer = setTimeout(fn,2000)
            this.setState({timer:timer})
          }
          fn();
    }
    stopLoop(){
        clearTimeout(this.state.timer)
        this.setState({timer:null})
    }
    renderPointer(){
        let children = this.props.children;
        return children.map((t,key)=>{
            return (<li className = {this.state.active ===key ?'active':''} onClick={()=>{this.setState({active:key})}} key = {key}>{key+1}</li>)
        })
    }

    onMouseEnter=()=>{
        this.stopLoop();
    }
    onMouseLeave=()=>{
        this.startLoop();
    }
    renderChildren(){
        let children = this.props.children;
        return React.Children.map(children,(child,key)=>{
            return React.cloneElement(child,{
                style:{
                    transform:`translateX(${this.state.width*(key - this.state.active)}px)`
                },
                // className:this.state.active === key? 'active':''
            })
        })
    }
    render(){
        return(<div className = "carousel" ref = "carousel" onMouseEnter = {this.onMouseEnter} onMouseLeave = {this.onMouseLeave}>
            <div className = "container" >
                {this.renderChildren()}
            </div>
            <ul className = "side">
               {this.renderPointer()}
            </ul>
        </div>)
    }
}