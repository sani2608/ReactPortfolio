import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';

import './GoHome.css';

class GoHome extends Component {
    navigateToHome = () => {
        const { history } = this.props;
        history.push('/');

    }
    render() {
        console.log('IM IN GOHOME');
        const { location } = this.props;
        const whiteBtn = location.pathname === '/';
        return (
            <div className='btn'>
                <button
                    onClick={this.navigateToHome}
                    className={`go-home-btn ${whiteBtn ? 'white-bkg' : 'gradient-bkg'
                        }`}>
                    <img
                        className='home-icon'
                        src={whiteBtn ? homeIconBlack : homeIconWhite}
                        alt='home-icon' />
                </button>
            </div>
        )
    }
}


export default withRouter(GoHome);
