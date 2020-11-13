export const addMessage = message => ({
    type: 'ADD_MESSAGE',
    payload: message,
})

export const resetMessages = () => ({
    type: 'RESET_MESSAGES',
})

export const setContextUser = newContext => ({
    type: 'SET_CONTEXT',
    payload: newContext,
})

export const changeChannel = channel => ({
    type: 'CHANGE_CHANNEL',
    payload: channel,
})


