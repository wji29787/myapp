import React, { Component } from 'react';

// class AreaP extends Component{
        
// }
function Areap (props){
 return (<div>
     x:<span style = {{'color':'red'}}>{props.x}</span>&nbsp;
     y:<span style = {{'color':'green'}}>{props.y}</span>
 </div>)
}
function withMouse(Area){
    
    return class extends Component{
        state = {
            x:0,
            y:0
        }
        onMousemove = (e)=>{
         e = e ||window.event
         if(e.PageX && e.PageY) {
             this.setState({
                 x :e.PageX,
                 y:e.PageY
             })
         }else{
            let dbody = document.documentElement|| document.body 
            this.setState({
                x:e.clientX+dbody.scrollLeft-dbody.clientLeft,
                y:e.clientY+dbody.scrollTop-dbody.clientTop
            })
         }
        }
        componentDidMount(){
            console.log(this.props)
            document.addEventListener('mousemove',this.onMousemove)
        }
        componentWillUnmount(){
            document.removeEventListener('mousemove',this.onMousemove)
        }
        render(){
            return (<div><Area {...this.state}/>{this.props.children}</div>)
        }
    }
}
export default  withMouse(Areap)