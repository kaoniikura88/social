import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {NavLink} from "react-router-dom";



const Dialogs = (props) => {
    
    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem name ={dialog.name} id={dialog.id} />)

    let messageElements = props.state.messagesData.map(message => <Message message ={message.message} id={message.id}/>)

let newMessageElement = React.createRef()
let sendMessage = () => {
let text = newMessageElement.current.value
alert(text)
}

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
               {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
            <div className={styles.textarea}>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs