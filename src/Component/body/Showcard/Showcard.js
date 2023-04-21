import React, { Component } from "react";
class Showcard extends Component {
  haveNewPrice = () => this.props.newprice > 0;
  render() {
    return (
        <div className="product">
          <img src={this.props.image} alt=""/>
          <h3>{this.props.name}</h3>
          <p>{this.props.des}</p>
          <div className="price-row">
          {this.haveNewPrice() ? (
            <div>
              <p>{this.props.newprice}</p>
              <p className="old-price">{this.props.oldprice}</p>
            </div>
          ) : (
            <div>
              <p>{this.props.oldprice}</p>
            </div>
          )}
          </div>
        </div>
    );
  }
}

export default Showcard;