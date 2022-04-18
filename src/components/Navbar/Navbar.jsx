import React from 'react'
import './Navbar.css'
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    render() {

        const { location } = this.props;

        const homeClass = location.pathname === '/' ? 'active-item' : '';
        const aboutClass = location.pathname === '/about' ? 'active-item' : '';
        const projectClass = location.pathname === '/projects' ? 'active-item' : '';
        const skillsClass = location.pathname === '/skills' ? 'active-item' : '';
        const contactClass = location.pathname === '/contact' ? 'active-item' : '';

        return (
            <div>
                <Menu>
                    <Link id="home" className={`menu-item ${homeClass}`} to="/">Home</Link>
                    <Link id="about" className={`menu-item ${aboutClass}`} to="/about">About</Link>
                    <Link id="projects" className={`menu-item ${projectClass}`} to="/projects">Projects</Link>
                    <Link id="skills" className={`menu-item ${skillsClass}`} to="/skills">Skills</Link>
                    <Link id="contact" className={`menu-item ${contactClass}`} to="/contact">Contact</Link>
                </Menu>
            </div>
        );
    }

}

export default withRouter(Navbar);