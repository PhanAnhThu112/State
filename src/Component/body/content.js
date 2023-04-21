import React, { Component } from "react";
import { Data } from "./data";
import Showcard from "./Showcard/Showcard";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: <div>Trang chu</div>,
    };
  }
  home = () => {
    let data = Data();
    data = data.map(key => {
      return (
        <Showcard
          image={key.image}
          name={key.name}
          oldprice={key.oldprice}
          newprice={key.newprice}
          des={key.des}
        />
      );
    });
    this.setState({home:data});
  };

  nam = () => {
    let data = Data();
    data = data.filter(e => e.type === "M").map((key) => (
      <Showcard
        key={key.id}
        image={key.image}
        name={key.name}
        oldprice={key.oldprice}
        newprice={key.newprice}
        des={key.des}
      />
    ));
    this.setState({ home: data });
  };
  nu = () => {
    let data = Data();
    data = data.filter(e => e.type === "F").map((key) => (
      <Showcard
        key={key.id}
        image={key.image}
        name={key.name}
        oldprice={key.oldprice}
        newprice={key.newprice}
        des={key.des}
      />
    ));
    this.setState({ home: data });
  };
  child = () => {
    let data = Data();
    data = data.filter(e => e.type === "C").map((key) => (
      <Showcard
        key={key.id}
        image={key.image}
        name={key.name}
        oldprice={key.oldprice}
        newprice={key.newprice}
        des={key.des}
      />
    ));
    this.setState({ home: data });
  };

  render() {
    return (
      <div>
        <div className="button-row">
          <button onClick={this.home}>Home</button>
          <button onClick={this.nam}>Thoi Trang Nam</button>
          <button onClick={this.nu}>Thoi Trang Nu</button>
          <button onClick={this.child}>Thoi Trang Tre em</button>
        </div>
        <div className="items">
          {this.state.home}
        </div>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
}

export default Content;
