import * as Types from './../contants/Types';

const initialState = [];

const Users = (state = initialState, action) => {
    switch(action.type){    
        case Types.GET_USER:
            state = action.users;
            return [...state];
        default: 
            return [...state];
    }
}

export default Users;