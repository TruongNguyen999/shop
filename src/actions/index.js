import * as Types from './../contants/Types';
import callApi from '../utils/apiCallers';

// featch products
export const axios_API = product => {
    return {
        type: Types.AXIOS_API,
        product
    }
}

export const axios_API_dispatch = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(axios_API(res.data))
        })
    }
}
// featch menus
export const axios_API_menus = menus => {
    return {
        type: Types.AXIOS_API_MENUS,
        menus
    }
}

export const axios_API_dispatch_menus = () => {
    return dispatch => {
        return callApi('menus', 'GET', null).then(res => {
            dispatch(axios_API_menus(res.data))
        })
    }
}

// add card product
export const Product_Cart = product => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const Product_Cart_dispatch = product => {
    return dispatch => {
        dispatch(Product_Cart(product))
    }
}

// featch footer
export const axios_API_footer = footer => {
    return {
        type: Types.AXIOS_API_FOOTER,
        footer
    }
}

export const axios_API_dispatch_footer = () => {
    return dispatch => {
        return callApi('footer', 'GET', null).then(res => {
            dispatch(axios_API_footer(res.data))
        })
    }
}

// fetch product hot
export const axios_API_product_hot = product => {
    return {
        type: Types.AXIOS_API_PRODUCT_HOT,
        product
    }
}

export const axios_API_dispatch_product_hot = () => {
    return dispatch => {
        return callApi('product_hot', 'GET', null).then(res => {
            dispatch(axios_API_product_hot(res.data))
        })
    }
}

// fetch product discount
export const axios_API_product_discount = product => {
    return {
        type: Types.AXIOS_API_PRODUCT_DISCOUNT,
        product
    }
}

export const axios_API_dispatch_product_discount = () => {
    return dispatch => {
        return callApi('product_discount', 'GET', null).then(res => {
            dispatch(axios_API_product_discount(res.data))
        })
    }
}

// delete product
export const axios_API_delete_product = id => {
    return {
        type: Types.AXIOS_API_DELETE_PRODUCT,
        id
    }
}

export const axios_API_dispatch_product_delete = product => {
    return dispatch => {
        dispatch(axios_API_delete_product(product.id))
    }
}

// update product
export const axios_API_update_product_card = (id, quantity) => {
    return {
        type: Types.AXIOS_API_UPDATE_PRODUCT_CARD,
        id,
        quantity
    }
}

export const axios_API_disptch_update_product_card = (product, quantity) => {
    return dispatch => {
        dispatch(axios_API_update_product_card(product.id, quantity))
    }
}

export const axios_clear_card = () => {
    return {
        type: Types.AXIOS_API_CLEAR_CARD
    }
}

export const axios_API_clear_dispatch = () => {
    return dispatch => {
        dispatch(axios_clear_card())
    }
}

// set product detail

export const axios_set_product_detail = product => {
    return {
        type: Types.AXIOS_API_SET_PRODUCT_DETAIL,
        product
    }
}

export const axios_API_dispatch_product_detail = product => {
    return dispatch => {
        dispatch(axios_set_product_detail(product))
    }
}

// see more

export const seemore = number => {
    return {
        type: Types.SEEMORE,
        number
    }
}

export const seemore_dispatch = number => {
    return dispatch => {
        dispatch(seemore(number))
    }
}

// search one

export const search_Price = number => {
    return {
        type: Types.SEARCH_ONE,
        number
    }
}

export const search_Price_dispatch = number => {
    return dispatch => {
        dispatch(search_Price(number))
    }
}

// fillter Name

export const fillter_Name = name => {
    return {
        type: Types.FILLTER_NAME,
        name
    }
}

export const fillter_Name_dispatch = name => {
    return dispatch => {
        dispatch(fillter_Name(name))
    }
}

// filter Name hot

export const fillter_Name_hot = name => {
    return {
        type: Types.FILLTER_NAME_HOT,
        name
    }
}

export const fillter_Name_dispatch_hot = name => {
    return dispatch => {
        dispatch(fillter_Name_hot(name))
    }
}

// fillter Name discount

export const fillter_Name_discount = name => {
    return {
        type: Types.FILLTER_NAME_DISCOUNT,
        name
    }
}

export const fillter_Name_dispatch_discount = name => {
    return dispatch => {
        dispatch(fillter_Name_discount(name))
    }
}

// add customer

export const add_customer = customer => {
    return {
        type: Types.ADD_CUSTOMER,
        customer
    }
}

export const add_customer_dispatch = customer => {
    return dispatch => {
        return callApi('customer', 'POST', customer).then(res => {
            dispatch(add_customer(res.data))
        })
    }
}

// get user

export const get_user = users => {
    return {
        type: Types.GET_USER,
        users
    }
}

export const get_user_dispatch = () => {
    return dispatch => {
        return callApi('users', 'GET', null).then(res => {
            dispatch(get_user(res.data))
        })
    }
}