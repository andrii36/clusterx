import React from 'react';
import logo from '../../Assets/logo-clusterx.png';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from '../../Redux/auth-reducer';
import userLogo from '../../Assets/userLogo.jpg';
import { Container, Nav, Navbar } from 'react-bootstrap';

class Header extends React.Component {

    render() {
        let logout = () => {
            this.props.logoutThunk();
        }
        return (
            <div>
                <Navbar variant="light" bg="light">
                    <Container>
                        <Navbar.Brand><NavLink style={{textDecoration: "none"}} to="/">My app</NavLink></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link><NavLink style={{textDecoration: "none", color: "inherit"}} to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink style={{textDecoration: "none", color: "inherit"}} to="/">Account</NavLink></Nav.Link>
                            <Nav.Link><NavLink style={{textDecoration: "none", color: "inherit"}} to="/">About</NavLink></Nav.Link>
                            <Nav.Link><NavLink style={{textDecoration: "none", color: "inherit"}} to="/add-new-listing">Post for rent</NavLink></Nav.Link>
                            <div className="mr-auto">
                            {!this.props.isAuth &&
                                <div>
                                    <NavLink to='/create-account'>SignUp</NavLink>
                                    <NavLink to='/login'>SignIn</NavLink>
                                </div>}
                        </div>
                        </Nav>
                        <div>
                            <div className={styles.profile__block}>
                                {this.props.isAuth &&
                                    <div>
                                        <NavLink to='/my-profile'><img className={styles.userLogo} src={userLogo} /></NavLink>
                                        <div>{this.props.name}</div>
                                    </div>}
                            </div>
                            <div>
                                {this.props.isAuth &&
                                    <div className={styles.profile__block__logout} onClick={logout}>Logout</div>}
                            </div>
                        </div>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    name: state.auth.name
})

export default connect(mapStateToProps, { logoutThunk })(Header);