import React from 'react';
import s from'./Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsItem from './FriendsItem/FriendsItem';



const Navbar = (props) => {
    // debugger;
    let friendsElements = props.data.friends
    .map(el => <FriendsItem name={el.name} id={el.id} avatar={el.avatar} />
    );
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
                    <NavLink to='/grammar' activeClassName={s.activeLink}>Grammar</NavLink>
                </div>
                {/* <div className={s.item}>
                    <a href='/links'>Links</a>
                </div>
                <div className={s.item}>
                    <a href='/videos'>Videos</a>
                </div>
                <div className={s.item}>
                    <a href='/humor'>Humor</a>
                </div> */}
                <div className={s.item}>
                    <NavLink to='/dictionary' activeClassName={s.activeLink}>Dictionary</NavLink>
                </div>
            </div>
            
            <div className={`${s.friends}`}>
                <h2>Friends</h2>
                <div className={s.friendsList}>
                    { friendsElements }
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;