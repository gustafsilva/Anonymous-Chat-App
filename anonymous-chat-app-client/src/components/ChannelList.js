import React from "react";
import { connect } from "react-redux";

import { changeChannel } from "../store/actions";

function ChannelList({ channels, selectChannel, changeChannel }) {
    const channelListRendered = channels.map(channel => (
        <div
            className={`chat_list ${selectChannel.title === channel.title ? 'chat_active': '' }`}
            key={channel.value}
            onClick={() => changeChannel(channel) }
        >
            <div className="chat_people">
                <div className="chat_ib">
                    <h5>{channel.title}</h5>
                    <p>{channel.description}</p>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="inbox_people">
            <div className="headind_srch">
                <div className="recent_heading">
                    <h4>Channels</h4>
                </div>
            </div>
            <div className="inbox_chat">
                {channelListRendered}
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
    selectChannel: state.channel,
});

const mapDispatchToProps = {
    changeChannel,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

