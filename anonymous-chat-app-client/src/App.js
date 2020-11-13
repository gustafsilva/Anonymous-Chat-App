import React, { useEffect } from "react";
import { connect } from "react-redux";

import './App.css';

import ChannelList from "./components/ChannelList";
import Chat from "./components/Chat";
import { addMessage, resetMessages, setContextUser } from "./store/actions";

function App(props) {
    const {
        centrifuge,
        addMessage,
        resetMessages,
        selectChannel,
        setContextUser,
    } = props;

    const sendMessage = message => {
        centrifuge.publish(selectChannel.value, {"data": { text: message.text} }).then(function(res) {
            console.log('successfully published');
            //addMessage(message);
        }, function(err) {
            console.log('publish error', err);
        })
    }

    useEffect(() => {
        // Subscribe to a channel.
        centrifuge.subscribe(selectChannel.value, response => {
            console.log('New message: ', response);
            addMessage(response);
        });
        console.log('Subscribe channel', selectChannel.title)

        centrifuge.connect();

        centrifuge.on('connect', newContext => {
            setContextUser(newContext);
        });

        console.log('Connect channel', selectChannel.title)
        return () => {
            resetMessages();

            centrifuge.disconnect();
            console.log('Disconnect channel', selectChannel.title)
        }
    }, [selectChannel]);

    return (
        <div className="container">
            <h3 className=" text-center">Anonymous Chat App #{selectChannel.title}</h3>
            <div className="messaging">
                <div className="inbox_msg">
                    <ChannelList />
                    <Chat sendMessage={sendMessage}/>
                </div>
            </div>


            <p className="text-center top_spac">
                Design by <a target="_blank" href="https://bootsnipp.com/snippets/1ea0N">Sunil Rajput</a>
            </p>
        </div>
    );
}

const mapStateToProps = state => ({
    selectChannel: state.selectChannel,
});

const mapDispatchToProps = {
    addMessage,
    resetMessages,
    setContextUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
