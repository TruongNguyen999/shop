import { combineReducers } from 'redux';
import Products from './Products';
import CartProduct from './CartProduct';
import Menus from './Menus';
import Footer from './Footer';
import Products_Hot from './Products_Hot';
import Products_Discount from './Products_Discount';

const myReducers = combineReducers({
    Products,
    CartProduct,
    Menus,
    Footer,
    Products_Hot,
    Products_Discount
})

export default myReducers;