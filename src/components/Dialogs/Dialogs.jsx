import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {NavLink} from "react-router-dom";



const Dialogs = (props) => {

  /*   let dialogsData = [
        {id: 1, name: 'zeliboba' },
        {id: 2, name: 'zhenuaria' },
        {id: 3, name: 'hyo ya' }
        ]

        let messagesData = [
            {id: 1, message: 'hey' },
            {id: 2, message: 'sup' },
            {id: 3, message: 'what is new' }
            ]
     */
    
    let dialogElements = props.dialogsData.map(dialog => <DialogItem name ={dialog.name} id={dialog.id} />)

    let messageElements = props.messagesData.map(message => <Message message ={message.message} id={message.id}/>)
    

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