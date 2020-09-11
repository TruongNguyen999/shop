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