import React from 'react';
import s from'./Dialogs.module.css';
import DialogItem from'./DialogItem/DialogItem';
import MessagesItem from'./MessagesItem/MessagesItem';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/state';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData
    .map(el => <DialogItem name={el.name} id={el.id} ava={el.avatar} />
    );

    let messageElements = state.messageData
    .map(el => <MessagesItem message={el.message} />
    );

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
            { dialogsElements }
        </div>
        <div className={s.messages}>
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