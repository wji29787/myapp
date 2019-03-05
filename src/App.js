import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MouseArea from './WithMouse'
import Carousel from './carousel'
import StopWatch from './components/StopWatch/StopWatch'
import {Provider,Page,TabItem,Tabs} from './ThemeProvider'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/**
           <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MouseArea><div cc = "ddd"></div></MouseArea>
          <Carousel>
            <div>11</div>
            <div>22</div>
          </Carousel>
          
          
          */}
         <StopWatch/>
         <Provider value = {{mainColor:'green',textColor:'red'}}>
            <Page/>
         </Provider>
         <Tabs>
         {/**  <div>11</div> */}
          <TabItem>22</TabItem>
          <TabItem>33</TabItem>
         </Tabs>
        </header>
      </div>
    );
  }
}

export default App;
