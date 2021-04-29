import React from 'react';
import s from'./../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    // debugger;

    let path = '/dialogs/' + props.id;

    return (
        // <div className={s.dialog + ' ' + s.active}>
        <div className={s.dialog}>
            <img src={props.ava}></img>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;