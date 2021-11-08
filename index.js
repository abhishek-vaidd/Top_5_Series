import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css'
import Heading from './Heading';
import Data from "./Data";

ReactDOM.render(
  <>
    <Heading />
    {Data.map((varr)=>{
      return(
      <Card imgsrc= {varr.imgsrc}
            title= {varr.title}
            sname= {varr.sname}
            link= {varr.link}
      />
    );
})}
  </>,
  document.getElementById('root')
);