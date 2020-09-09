import * as Types from './../contants/Types';

const initialState = [];

const Products_Hot = (state = initialState, action) => {
    switch (action.type) {
        case Types.AXIOS_API_PRODUCT_HOT:
            state = action.product
            return [...state];
        default:
            return [...state];
    }
}

export default Products_Hot;