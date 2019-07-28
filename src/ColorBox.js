import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
<<<<<<< HEAD
    const newValue = this.props.opacity - 0.1;
    if(this.props.opacity >= 0.2){
      return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
       <ColorBox opacity = {newValue} />
=======
    return (
      <div className="color-box" style={{opacity: {this.props.opacity}}}>
        {this.props.opacity}
>>>>>>> c01557538d06224c3cd0b2698309968427a46a9e
      </div>
    )
    }else {
      return null;
    }
  }
  
}
