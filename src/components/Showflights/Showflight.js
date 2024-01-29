import React from 'react';
import "./Showflight.css";
import{LuArrowRightLeft} from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';

const Showflight = () => {
  return (

<div className='showflight-container'>
    <Navbar/>
    <div className='borderboxs'>
        <div className='input-section'>
          <div className='form-input'>
            <p className='ptage'><span className='span'>From - To</span></p>
            <input type='text'placeholder='Lahore - Karachi 'className='inputcls'/>
            <LuArrowRightLeft className='arrow'/>
          </div>
          <div className='form-input2'>
            <p className='ptage1'><span className='spans1'>Trip</span></p>
            <input type='text'placeholder='Return' className='inputclss1'/>
          </div>
          <div className='form-input'>
            <p className='ptage'><span className='span'>Depart - Return</span></p>
            <input type='text'placeholder='07 Nov 22 - 13 Nov 22'className='inputcls'/>
          </div>
          <div className='form-input'>
            <p className='ptage'><span className='span'>Passenger - Class</span></p>
            <input type='text'placeholder='1 Passenger, Economy'className='inputcls'/>
          </div>
          <div className='search-icon'>
          <FaSearch/>
          </div>
        </div>  
    </div>
<div className='main-container'>
    <div className='airline-info'>
    <div className='Filter'>
      <h1>Filters</h1>
      <p>Price</p>
      <input type='range'className='pricerange'/>
    </div>
    <div className='Filter'>
      <p>Depature Time</p>
      <input type='range'className='deptrange'/>
    </div>
    <div className='Rating'>
      <p>Rating</p>
      <button className='ibox'>0+</button>
      <button >1+</button>
      <button >2+</button>
      <button> 3+ </button>
      <button> 4+ </button>
    </div>
    <div className='airlines-info'>
      <p>Airlines</p>
        <p><input type='checkbox'/>Emirated</p>
        <p><input type='checkbox'/>Fly Dubai</p>
        <p><input type='checkbox'/>Qatar</p>
        <p><input type='checkbox'/>Etihad</p>
      
    </div>
    <div className='Trips-info'>
      <p>Trips</p>
        <p><input type='checkbox'/>Round trip</p>
        <p><input type='checkbox'/>On Way</p>
        <p><input type='checkbox'/>Multi-City</p>
        <p><input type='checkbox'/>MyDateAreFlexiable</p>
        </div>
      </div>
  <div className='pricing-cont'>
     <div className='price1'>
       <h4>Cheapest</h4>
       <p> $99 2h18m</p>
      </div>
      <hr/>
       <div className='price1'>
        <h4>Best</h4>
         <p> $99 2h 18m</p>
      </div>
      <hr/>
       <div className='price1'>
         <h4>Quickest</h4>
        <p> $99 2h 18m</p>
       </div>
       <hr/>
      <h4 className='price1'>Other sort</h4>  
   </div>
  </div>
</div>
  );
};

export default Showflight;
