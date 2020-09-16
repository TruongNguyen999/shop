import * as TypesMessage from './../contants/Message';

export const changeMessage = message => {
    return {
        type: TypesMessage.MESSAGE_UPDATE,
        message
    }
}

export const changeMessage_Dispatch = message => {
    return dispatch => {
        dispatch(changeMessage(message))
    }
}

export const changeMessageDelete = message => {
    return {
        type: TypesMessage.MESSAGE_DELETE,
        message
    }
}

export const changeMessageDelete_Dispatch = message => {
    return dispatch => {
        dispatch(changeMessageDelete(message))
    }
}

export const changeMessagePay = message => {
    return {
        type: TypesMessage.MESSAGE_PAY,
        message
    }
}

export const changeMessagePay_Dispatch = message => {
    return dispatch => {
        dispatch(changeMessagePay(message))
    }
}

export const changeMessage_refert = () => {
    return {
        type: TypesMessage.MESSAGE_REFERT
    }
}

export const changeMessage_Dispatch_refert = () => {
    return dispatch => {
        dispatch(changeMessage_refert())
    }
}

export const changeMessage_add = message => {
    return {
        type: TypesMessage.MESSAGE_ADD,
        message
    }
}

export const changeMessage_add_dispatch = message => {
    return dispatch => {
        dispatch(changeMessage_add(message))
    }
}