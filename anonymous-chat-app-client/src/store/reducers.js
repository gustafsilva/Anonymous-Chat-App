import { combineReducers } from "redux";

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

function contextUserReducer(context=null, action) {
    switch (action.type) {
        case 'SET_CONTEXT':
            return action.payload;
        default:
            return context;
    }
}

function channelsReducer(channels=CHANNELS) {
    return channels;
}

function selectChannelsReducer(channel=CHANNELS[0], action) {
    switch (action.type) {
        case 'CHANGE_CHANNEL':
            return action.payload;
        default:
            return channel;
    }
}

function messagesReducer(messages=[], action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return messages.concat([action.payload]);
        case 'RESET_MESSAGES':
            return [];
        default:
            return messages;
    }
}

export default combineReducers({
    contextUser: contextUserReducer,
    channels: channelsReducer,
    selectChannel: selectChannelsReducer,
    messages: messagesReducer,
});
