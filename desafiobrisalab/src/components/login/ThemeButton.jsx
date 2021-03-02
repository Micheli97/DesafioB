import React from "react";
import BsMoon from "@react-icons/all-files/bs/BsMoon";

import "./Login.css";
class ThemeButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    return (
      <button 
      
      onClick={() => this.handleClick()}>
          <BsMoon></BsMoon>
          
        Tema escuro
      </button>
    );
  }
}

export default ThemeButton
