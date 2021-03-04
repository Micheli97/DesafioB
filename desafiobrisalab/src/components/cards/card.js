import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="description">
          <div className="image">
            <img src={this.props.img} alt=""></img>
          </div>

          {/* <p className="title">Pikachu</p> */}
          <p className="title">{this.props.name}</p>

          {/* <p className="idCard">id101</p> */}
          <p className="idCard">{this.props.id}</p>

          <div className="categoryCard1">Eletric</div>

          <button className="seeDetails">Ver detalhes</button>
        </div>
      </div>
    );
  }
}

export default Card;
