import React from "react";

function Message({ text, isMessageReceived }) {
    if (isMessageReceived) {
        return (
            <div className="incoming_msg">
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{text}</p>
                        <span className="time_date"></span>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="outgoing_msg">
                <div className="sent_msg">
                    <p>{text}</p>
                    <span className="time_date"></span>
                </div>
            </div>
        );
    }

}

export default Message;
