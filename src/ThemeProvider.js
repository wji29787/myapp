import React,{createContext,Component } from 'react'
const ThemeContext = React.createContext();
// const ThemeProvider = ThemeContext.Provider;
// const ThemeConsumer = ThemeContext.Consumer;
const {Provider,Consumer} = ThemeContext

class Subject extends Component{
    render(){
        return (<Consumer>
            {
                (theme)=>{
                   return <h1 style = {{color:theme.mainColor}}>
                        {this.props.children}
                    </h1>
                }
            }
        </Consumer>)
    }
}

const Paragraph = (props,context)=>{
    return (<Consumer>
        {
            (theme)=>(<p style = {{color:theme.textColor}}>
            {props.children}
            </p>)
        }
    </Consumer>)
}

const Page = ()=>(<div>
    <Subject>这是主题</Subject>
    <Paragraph>这是正文</Paragraph>
</div>)

const TabItem = (props)=>{
    const {active,onClick} = props
    const tabStyle = {
        'maxWidth':'150px',
        color:active? 'red':'green',
        border:active?'1px red solid':'0px'
    }
    return (<h1 style = {tabStyle} onClick = {onClick}>
        {props.children}
    </h1>)
}
class Tabs extends Component{
    state = {
        activeIndex:0
    }
    render(){
        const newChildren = React.Children.map(this.props.children,(child,index)=>{
            console.log(child)
            if(child.type){
                return React.cloneElement(child,{
                    active:this.state.activeIndex === index,
                    onClick:()=>this.setState({activeIndex:index})
                })
            }else{
                return child
            }
        })
        return(<React.Fragment>
            {newChildren}
        </React.Fragment>)
    }
}
export {Provider,Page,TabItem,Tabs}