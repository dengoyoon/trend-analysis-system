// file: src/components/PhoneForm.js
import React, { Component } from 'react';
import css from "styled-jsx/css";
import { useState, useEffect } from 'react';

import KeywordTable from './KeywordTable';

export function RegStat(props) {

  /*키워드*/
  const [state,SetState] = useState('');
  const handleKeyword1 = (e) => {
    console.log(e.target.value)
    SetState(e.target.value)
  }
  const handleKeyword2 = (e) => {
    console.log(e.target.value)
    SetState(e.target.value)
  }


/* 키워드 테이블*/



return (
<div style={{ fontFamily : 'NanumSquare' }}>

  <div class = "mx-3"> 
  <form class="form-inline" >
    <a> 조회구분 </a>
    <input class="form-control mr-sm-2 mx-3" type="search" placeholder="키워드 입력" aria-label="Search" 
           style={{ width : '200px', height : '50px',  fontSize : '20px'}}
           value={state.name} //입력되는 값.
           onChange={handleKeyword1}/>
  
    <br />

    <a class = "mx-1"> 조회키</a>
    <input class="form-control mr-sm-2 mx-3" type="search" placeholder="키워드 속성 입력" aria-label="Search" 
           style={{ width : '200px', height : '50px',  fontSize : '20px'}}
           value={state.name} //입력되는 값.
           onChange={handleKeyword2}/>


    <div class = "mx-4">
        <button type = "button" class="btn btn-outline-primary mx-2" 
            style={{ width : '100px', height : '50px',  fontSize : '20px' }} > 조회 </button>
        <button type = "button" class="btn btn-outline-primary mx-2" 
            style={{ width : '100px', height : '50px',  fontSize : '20px' }} > 등록 </button>
</div>

  
  </form>
  <br />
  
  </div>
  <br />

  


</div>

 
    );
  
}

export default RegStat;