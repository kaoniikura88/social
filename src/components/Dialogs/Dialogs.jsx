import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {NavLink} from "react-router-dom";



const Dialogs = (props) => {
    
    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem name ={dialog.name} id={dialog.id} />)

    let messageElements = props.state.messagesData.map(message => <Message message ={message.message} id={message.id}/>)


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
               {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs