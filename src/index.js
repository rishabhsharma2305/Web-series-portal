// var react= require('react');
// var reactDom= require('react-dom');    for old js. Now we rite accordingly to es

import react from 'react';
import reactDom from 'react-dom';
import App from './App';
import './index.css';
import Mycard from './MyCard';
import MyHeading from './MyHeading';
import series from './SeriesList';
// render(what to show, where to show, ())
// reactDom.render(
//   <App></App>,
//   document.getElementById('root'),
//   ()=>{}
// )

function netfilxCard(val) {
  return (
    <Mycard image={val.image} title={val.title} redirect={val.redirect}/>
  )
}

reactDom.render(
  <>
  <MyHeading />
  {series.map(netfilxCard)}
  </>,
  document.getElementById('root'),
  ()=>{}
)

