import React from 'react';
import logo from '../../Assets/logo-clusterx.png';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    
    render(){
        return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo}/>
            <div className={styles.login}>
                {!this.props.isAuth &&
                    <div>
                        <button>SignUp</button>
                        <button>SignIn</button>
                    </div>}
                {this.props.isAuth &&
                <NavLink to="/post-for-rent"><button>post for rent</button></NavLink>}
                {this.props.isAuth &&
                <span>{this.props.name}</span>}
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    name: state.auth.name
})
export default connect(mapStateToProps, null) (Header);