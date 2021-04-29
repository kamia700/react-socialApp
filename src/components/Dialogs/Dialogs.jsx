import React from 'react';
import s from'./Dialogs.module.css';
import DialogItem from'./DialogItem/DialogItem';
import MessagesItem from'./MessagesItem/MessagesItem';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/state';

// import Avatar from'./Avatars/Avatar';


// let dialogsData = [
//     {id: 1, name: 'Dmitry'},
//     {id: 2, name: 'Viktor'},
//     {id: 3, name: 'Sonya'},
//     {id: 4, name: 'Andry'},
//     {id: 5, name: 'Lisa'}
// ]

// let messageData = [
//     {id: 1, message: 'Lorem ipsum dolor sit amet consectetur'},
//     {id: 2, message: 'adipisicing elit. Illum, voluptatum natus.'},
//     {id: 3, message: 'sit amet consectetur'},
//     {id: 4, message: 'Illum, voluptatum natus.'},
//     {id: 5, message: 'Ad est cum ratione repudiandae,'},
//     {id: 6, message: 'nihil quis quia, fugiat pariatur distinctio'}
// ]

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    // debugger;
    // получаем jsx элемент-DialogItem, на базе объекта dialogsData и заполняем его пропсы-{el.name} и {el.id}
    let dialogsElements = state.dialogsData
    .map(el => <DialogItem name={el.name} id={el.id} ava={el.avatar} />
    );

    let messageElements = state.messageData
    .map(el => <MessagesItem message={el.message} />
    );

    // let dialogsAvatar = props.data.avatars
    // .map(el => <Avatar ava={el.avatar} />
    // );

    let newMessageBody = state.newMessageText;

    let omNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> */}
            {/* { dialogsAvatar } */}
            { dialogsElements }
        </div>
        <div className={s.messages}>
            {/* <MessagesItem message={messageData[0].message} />
            <MessagesItem message={messageData[1].message} />
            <MessagesItem message={messageData[2].message} />
            <MessagesItem message={messageData[3].message} />
            <MessagesItem message={messageData[4].message} />
            <MessagesItem message={messageData[5].message} /> */}
            { messageElements }

            <div className={s.newMessage}>
                <div>
                    <textarea value={ newMessageBody } onChange={ omNewMessageChange } placeholder='Enter your message' name="" id="" cols="50" rows="2"></textarea>
                </div>
                <div>
                    <button onClick={ onSendMessageClick }>Send</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dialogs;