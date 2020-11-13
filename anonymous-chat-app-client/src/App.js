import React, { useState, useEffect } from "react";
import Centrifuge from "centrifuge";
import SockJS from 'sockjs-client'
import Jwt from 'jsonwebtoken';


import './App.css';

import ChannelList from "./components/ChannelList";
import Chat from "./components/Chat";

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

function App({ centrifuge }) {
    const [messages, setMessages] = useState([]);
    const [selectChannel, setSelectChannel] = useState(CHANNELS[0]);

    console.log('MESSAGES: ', messages);

    useEffect(() => {
        // Subscribe to a channel just for testing.
        centrifuge.subscribe(selectChannel.value, ({ data }) => {
            console.log('DATA RECEIVE: ', data);
            const message = {
                ...data,
                isReceived: true,
            }

            const newMessages = messages.concat([message]);
            setMessages(newMessages);
        });
        console.log('Subscribe channel', selectChannel.title)

        centrifuge.connect();
        console.log('Connect channel', selectChannel.title)

        return () => {
            setMessages([]);

            centrifuge.disconnect();
            console.log('Disconnect channel', selectChannel.title)
        }
    }, [selectChannel]);

    return (
        <div className="container">
            <h3 className=" text-center">Anonymous Chat App</h3>
            <div className="messaging">
                <div className="inbox_msg">
                    <ChannelList
                        channels={CHANNELS}
                        changeChannel={setSelectChannel}
                    />
                    <Chat messages={messages} />
                </div>
            </div>


            <p className="text-center top_spac">
                Design by <a target="_blank" href="https://bootsnipp.com/snippets/1ea0N">Sunil Rajput</a>
            </p>
        </div>
    );
}

export default App;
