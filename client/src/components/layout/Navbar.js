import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <Link to='/profiles'>
                    <span>IT Svet</span>
                </Link>
            </li>
            <li>
                <Link to='/posts'>
                    <span>Objave</span>
                </Link>
            </li>
            <li>
                <Link to='/dashboard'>
                    <i className='fa fa-user'></i>{' '}
                    <span className='hide-sm'>O meni</span>
                </Link>
            </li>
            <li>
                <Link onClick={logout} to='#!'>
                    <i className='fas fa-sign-out-alt'></i>{' '}
                    <span className='hide-sm'>Odjavi se</span>
                </Link>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to='/profiles'>
                    <span>IT Svet</span>
                </Link>
            </li>
            <li>
                <Link to='/register'>Registruj se</Link>
            </li>
            <li>
                <Link to='/login'>Prijavi se</Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                     Klik do posla
                </Link>
            </h1>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
