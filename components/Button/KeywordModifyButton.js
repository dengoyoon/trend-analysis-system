/* '키워드 정정' 버튼 */

import React, { Component } from 'react';
import css from "styled-jsx/css";
import Link from 'next/link'

const KeywordModifyButton = (props) => {
    const { children, onClick } = props;

    // ChartViewButton 클릭

    const handleClick = () => {
        console.log("click")
      }


    return (
        <div>

        <Link href="/ChartView">
        <button type="button" class="btn btn-info btn-lg" style={{ fontFamily : 'NanumSquare' }}>키워드 정정</button>
        </Link>
  

      </div>
    )
  }
  
  export default KeywordModifyButton;


