import * as Types from './../contants/Types';

const initialState = [];

const Footer = (state = initialState, action) => {
    switch(action.type){
        case Types.AXIOS_API_FOOTER:
            state = action.footer; 
            return [...state];
        default:
            return [...state];
    }
}

export default Footer;