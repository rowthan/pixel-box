import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const CSS_PSEDUO_NAMESPACE = 'pixel-box-';
class App extends Component {
  render() {
    return (
        <svg width="676" height="104" className="js-calendar-graph-svg">
          <g transform="translate(16, 20)">
            <g transform="translate(0, 0)">
              <rect className="day" width="10" height="10" x="13" y="0" fill="#ebedf0" ></rect>
              <rect className="day" width="10" height="10" x="13" y="12" fill="#ebedf0" ></rect>
              <rect className="day" width="10" height="10" x="13" y="24" fill="#c6e48b" ></rect>
              <rect className="day" width="10" height="10" x="13" y="36" fill="#ebedf0" ></rect>
              <rect className="day" width="10" height="10" x="13" y="48" fill="#ebedf0" ></rect>
              <rect className="day" width="10" height="10" x="13" y="60" fill="#ebedf0" ></rect>
              <rect className="day" width="10" height="10" x="13" y="72" fill="#ebedf0" ></rect>
            </g>
            <text x="25" y="0" className="month">Feb</text>
            <text x="73" y="0" className="month">Mar</text>
            <text x="121" y="0" className="month">Apr</text>
            <text x="181" y="0" className="month">May</text>
            <text x="229" y="0" className="month">Jun</text>
            <text x="277" y="0" className="month">Jul</text>
            <text x="337" y="0" className="month">Aug</text>
            <text x="385" y="0" className="month">Sep</text>
            <text x="433" y="0" className="month">Oct</text>
            <text x="493" y="0" className="month">Nov</text>
            <text x="541" y="0" className="month">Dec</text>
            <text x="601" y="0" className="month">Jan</text>
            <text text-anchor="start" className="wday" dx="-14" dy="20">Mon</text>
            <text text-anchor="start" className="wday" dx="-14" dy="44">Wed</text>
            <text text-anchor="start" className="wday" dx="-14" dy="69">Fri</text>
          </g>
        </svg>
    );
  }
}

export default App;
