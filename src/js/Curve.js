import React from 'react';

export default class Curve extends React.Component {
  render() {
    return (
      <svg height='100' width='200'>
        <path
          d='M0,100 L25,90 C160,50 200,90 200,0'
          style={{
            stroke: '#999',
            strokeWidth: 2,
            fill: 'none',
            strokeDasharray: '5,2'
          }} />
        <p>This is a curve.</p>
      </svg>
    );
  }
}