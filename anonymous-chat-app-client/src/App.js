import React, { useEffect } from "react";
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
    useEffect(() => {
        // Subscribe to a channel just for testing.
        centrifuge.subscribe("news", message => {
            console.log(message);
        });
        centrifuge.connect();

        return () => {
            centrifuge.disconnect();
        }
    });

    return (
        <div className="container">
            <h3 className=" text-center">Anonymous Chat App</h3>
            <div className="messaging">
                <div className="inbox_msg">
                    <ChannelList channels={CHANNELS} />
                    <Chat />
                </div>
            </div>


            <p className="text-center top_spac"> Design by <a target="_blank" href="https://bootsnipp.com/snippets/1ea0N">Sunil Rajput</a></p>
        </div>
    );
}

export default App;
