import React from 'react';
import logo from '../../Assets/logo-clusterx.png';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from '../../Redux/auth-reducer';
import userLogo from '../../Assets/userLogo.jpg';

class Header extends React.Component {

    render() {
        let logout = () => {
            this.props.logoutThunk();
        }
        return (
            <div className={styles.header}>
                <div className={styles.header__raw}>
                    <div className={styles.header__column}>
                        <div className={styles.header__logo}>
                            <NavLink to='/'><img src={logo} /></NavLink>
                        </div>
                    </div>
                    <div className={styles.header__column}>
                        <div className={styles.header__menu}>
                            <div className={styles.menu__column}>
                                <div className={styles.menu__item}>
                                    <NavLink className={styles.item__link} to="/">Home</NavLink>
                                </div>
                            </div>
                            <div className={styles.menu__column}>
                                <div className={styles.menu__item}>
                                    <NavLink className={styles.item__link} to="/post-for-rent">Account</NavLink>
                                </div>
                            </div>
                            <div className={styles.menu__column}>
                                <div className={styles.menu__item}>
                                    <NavLink className={styles.item__link} to="/post-for-rent">About</NavLink>
                                </div>
                            </div>
                            <div className={styles.menu__column}>
                                <div className={styles.menu__item}>
                                    <NavLink className={styles.item__link} to="/add-new-listing">Post for rent</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.header__column}>
                        <div className={styles.dropdown}>
                            <div className={styles.dropbtn}>Account</div>
                            <div className={styles.dropdown_content}>
                                <NavLink to="/login">Sign In</NavLink>
                                <NavLink to="/create-account">Sign Up</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={styles.header__column}>
                        <div className={styles.login}>
                            {!this.props.isAuth &&
                                <div>
                                    <NavLink to='/create-account'>SignUp</NavLink>
                                    <NavLink to='/login'>SignIn</NavLink>
                                </div>}
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
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    name: state.auth.name
})

export default connect(mapStateToProps, { logoutThunk })(Header);