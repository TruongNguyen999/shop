import * as Types from './../contants/Message';

const initialState = '';

const MessagePay = (state = initialState, action) => {
    switch(action.type){
        case Types.MESSAGE_PAY:
            return action.message
        case Types.MESSAGE_REFERT:
            return state = ''
        default:
            return state
    }
}

export default MessagePay;