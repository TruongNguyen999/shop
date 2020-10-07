import { combineReducers } from 'redux';
import Products from './Products';
import CartProduct from './CartProduct';
import Menus from './Menus';
import Footer from './Footer';
import Products_Hot from './Products_Hot';
import Products_Discount from './Products_Discount';
import Message from './Message';
import MessagePay from './MessagePay';
import ProductDetail from './ProductDetail';
import SeeMore from './SeeMore';
import SearchPrice from './SearchPrice';
import FillterName from './FillterName';
import FillterNameHot from './FillterNameHot';
import FillterNameDiscount from './FillterNameDiscount';
import Users from './Users';

const myReducers = combineReducers({
    Products,
    CartProduct,
    Menus,
    Footer,
    Products_Hot,
    Products_Discount,
    Message,
    MessagePay,
    ProductDetail,
    SeeMore,
    SearchPrice,
    FillterName,
    FillterNameHot,
    FillterNameDiscount,
    Users
})

export default myReducers;