import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {NavLink} from "react-router-dom";
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/State';



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage
    
    let dialogElements = state.dialogsData.map(dialog => <DialogItem name ={dialog.name} id={dialog.id} />)

    let messageElements = state.messagesData.map(message => <Message message ={message.message} id={message.id}/>)

    let newMessageBody = state.newMessageBody


let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
}

let onNewMessageChange = (e) => {
    let body = e.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
}

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
               {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
                <div>
                <div> 
                    <textarea value = {newMessageBody} 
                                onChange = {onNewMessageChange}>
                                    </textarea>
                                    </div>
                <div><button onClick={onSendMessageClick}>Send Message</button></div>
            </div>
            </div>
        </div>
    )
}

export default Dialogs