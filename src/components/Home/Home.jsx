import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css";
import homeAnime from "./../../assets/home_anime.gif";
import Modal from "../Modal/Modal";
class Home extends Component {
  state = { showModal: false };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ showModal: true });
    // }, 1000); ! TEMPORARY COMMENT
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    console.log("IM IN HOME");
    return (
      <div className="home-container">
        {this.state.showModal && <Modal  closeModal={this.closeModal}/>}
        <div>
          <div className="header-text">
            <h1>Welcome to my portfolio!</h1>
            <p>This is Sanikumar Sahani, a front end dev</p>
          </div>

          <div className="head-btns">
            <Link to="/about" className="btn btn-white">
              <p className="btn-text">Know more about me </p>
            </Link>
            <Link to="/contact" className="btn btn-transparent">
              <p className="btn-text">Connect with me </p>
            </Link>
          </div>

          <div className="splash-image">
            <img src={homeAnime} alt="animation" className="home-anime" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
