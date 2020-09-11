import * as Types from './../contants/Message';

const initialState = 'Chào mừng Bạn đến với giỏ hàng!';

const Message = (state = initialState, action) => {
    switch(action.type){
        case Types.MESSAGE_UPDATE:
            return action.message
        case Types.MESSAGE_DELETE:
            return action.message
        default:
            return state
    }
}

export default Message;