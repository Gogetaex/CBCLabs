/**
*
* Grid
*
*/

import React from 'react';

import './style.css';
import './styleM.css';



export default class Grid extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      images: ['https://img00.deviantart.net/8ed5/i/2009/334/2/f/flamel__s_cross_by_chrono_strife.png', 'https://orig00.deviantart.net/9c6f/f/2013/222/a/8/flamel_s_cross_design_by_the_fishman-d6hla48.png']
    }
  }


  render() {
    return (
      <div>
        <div className="grid">
          {this.state.images.map((image, index) => (
          <div className="gridItem" key={index}>
          <img src= {(image)} className="gridImage" />
          
          </div>
          ))}
        </div>
      </div>
    );
  }
}
