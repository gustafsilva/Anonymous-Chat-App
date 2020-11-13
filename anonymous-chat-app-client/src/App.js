import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import './App.css';

import ChannelList from "./components/ChannelList";
import Chat from "./components/Chat";
import { addMessage, resetMessages } from "./store/actions";

const CHANNELS = [
    {
        title: 'General',
        description: 'Here you can talk about general subjects, feel free!',
        value: 'general',
    },
    {
        title: 'Cats',
        description: 'Here you can only talk about cats, aren\'t cats adorable?',
        value: 'cats',
    },
    {
        title: 'Random',
        description: 'Here you can talk about anything, open the imagination.',
        value: 'random',
    },
];

function App(props) {
    const {
        centrifuge,
        addMessage,
        resetMessages,
        selectChannel,
    } = props;

    useEffect(() => {
        // Subscribe to a channel.
        centrifuge.subscribe(selectChannel.value, ({ data }) => {
            const message = {
                ...data,
                isReceived: true,
            }

            addMessage(message);
        });
        console.log('Subscribe channel', selectChannel.title)

        centrifuge.connect();
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
                    <ChannelList channels={CHANNELS} />
                    <Chat />
                </div>
            </div>


            <p className="text-center top_spac">
                Design by <a target="_blank" href="https://bootsnipp.com/snippets/1ea0N">Sunil Rajput</a>
            </p>
        </div>
    );
}

const mapStateToProps = state => ({
    selectChannel: state.channel,
});

const mapDispatchToProps = {
    addMessage,
    resetMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
