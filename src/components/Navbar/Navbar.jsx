import React from 'react';
import s from'./Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
    <nav className={s.nav}>
        <div className={s.wrap}>
            <div className={`${s.menu}`}>
                <div className={`${s.item}`}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dictionary' activeClassName={s.activeLink}>Dictionary</NavLink>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;