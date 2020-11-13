import React, { useState } from "react";
import { connect } from "react-redux";

import Message from "./Message";

function Chat({ messages, sendMessage, contextUser }) {
    const [newMessageText, setNewMessageText] = useState('');

    const onSubmitnewMessageText = event => {
        event.preventDefault();
        
        const message = {
            text: newMessageText,
            isReceived: false,
        };
        
        sendMessage(message);
        setNewMessageText('');
    };

    const messagesRendered = messages.map(message => {
        const { data, info } = message;
        const isReceivedMessage = info.client == contextUser.client;

        return (
            <Message
                isMessageReceived={isReceivedMessage}
                text={data.data.text}
                key={message.seq}
            />
        );
    });

    return (
        <div className="mesgs">
            <div className="msg_history">
                {messagesRendered}
            </div>
            <form className="type_msg" onSubmit={onSubmitnewMessageText}>
                <div className="input_msg_write">
                    <input
                        type="text"
                        className="write_msg"
                        placeholder="Type a message"
                        value={newMessageText}
                        onChange={event => setNewMessageText(event.target.value)}
                    />
                    <button className="msg_send_btn" type="submit" >
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = state => ({
    messages: state.messages,
    contextUser: state.contextUser,
});

export default connect(mapStateToProps)(Chat);
