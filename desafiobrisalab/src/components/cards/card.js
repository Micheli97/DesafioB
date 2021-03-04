import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="image">
          <img src={this.props.img} alt=""></img>
        </div>

        <span className="title">{this.props.name.toUpperCase()}</span>

        <span className="idCard">{this.props.id}</span>

        <div className="types-list">
          {this.props.types.map((type) => {
            return <span className="category">{type.type.name.toUpperCase()}</span>;
          })}
        </div>

        <button className="details">Ver detalhes</button>
      </div>
    );
  }
}

export default Card;
