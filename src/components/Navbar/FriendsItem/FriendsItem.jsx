import React from 'react';
import s from'./FriendsItem.module.css';

const FriendsItem = (props) => {
    return (
        <div className={s.item}>
            <img src={props.avatar}></img>
            <p>{ props.name }</p>
        </div>
    )
}

export default FriendsItem;