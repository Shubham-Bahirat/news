
import './App.css';
import React, { Component } from 'react';
import Nevbar from './component/Nevbar';
import New from './component/New';   
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './component/Home';   
import Health from './component/Health';
import Science from './component/Science';
import General from './component/General';
import Sports from './component/Sports';
import Technology from './component/Technology';
import Entertainment from './component/Entertainment';


export default class App extends Component {


  render() {
    return (                                                                  
      <>
      <BrowserRouter basename='/prototype'>
      <div className='container my-3'>
     
          <Nevbar/>
        <Routes >
          <Route  exact path='/home' element={<Home/>} />  
          <Route exact path='/business' element={<New />}/>
          <Route exact path='/entertainment' element={<Entertainment/>}/>
          <Route exact path='/general' element={<General/>}/>
          <Route exact path='/health' element={<Health/>}/>          
          <Route exact path='/science' element={<Science />}/>
          <Route exact path='/sports' element={<Sports/>}/>
          <Route exact path='/technology' element={<Technology/>}/>
       </Routes>
  
  
  
  </div>
      </BrowserRouter>
      
        </>
    
    );
  }
}
