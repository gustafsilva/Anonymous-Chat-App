import React from "react";

import Message from "./Message";

function Chat({ messages }) {
    const messagesRendered = messages.map((message, index) => (
        <Message
            isMessageReceived={message.isReceived}
            text={message.text}
            key={index}
        />
    ));

    return (
        <div className="mesgs">
            <div className="msg_history">
                {messagesRendered}
            </div>
            <div className="type_msg">
                <div className="input_msg_write">
                    <input type="text" className="write_msg" placeholder="Type a message"/>
                    <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o"
                                                                      aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
