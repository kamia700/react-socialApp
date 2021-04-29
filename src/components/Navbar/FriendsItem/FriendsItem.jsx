import React from 'react';
import s from'./FriendsItem.module.css';

const FriendsItem = (props) => {
    // debugger;
    return (
        // <div className={s.friendsBar}>
        //     <h2>Friends</h2>
            <div className={s.item}>
                <img src={props.avatar}></img>
                <p>{ props.name }</p>
            </div>
        // </div>
    )
}

export default FriendsItem;