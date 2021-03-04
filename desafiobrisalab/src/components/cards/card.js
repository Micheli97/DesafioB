import React from "react";
import "./card.css";
import { MdFavorite } from "react-icons/md";

class Card extends React.Component {
  
  render() {
    return (
      <div className="card">

        <button className="icon">
          <MdFavorite size="24"></MdFavorite>
        </button>

        <div className="image">
          <img src={this.props.img} alt=""></img>
        </div>

        <span className="title">{(this.props.name).toUpperCase()}</span>

        <span className="idCard">{this.props.id}</span>

        <div className="types-list">
        {this.props.types.map((type) => {
          return  <span className="categoryCard1">{type.type.name}</span>
        })}
        </div>

        <button className="seeDetails">Ver detalhes</button>
      </div>
    );
  }
}

export default Card;
