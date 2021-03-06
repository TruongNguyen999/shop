import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { search_Price_dispatch, fillter_Name_dispatch_discount } from './../../actions/index';

const MessageProductDiscount = props => {

    const { search_Price, onShowProductDiscount } = props;

    const [name, setName] = useState('');

    useEffect(() => {
        onShowProductDiscount(name);
    }, [onShowProductDiscount, name])

    const onShowPrice = number => {
        search_Price(number);
    }

    return (
        <div className="container-fluid padding">
            <div className="col-12 padding message-lable">
                <span className="label label-danger col-md-3">Sản Phẩm Giảm Giá</span>
                <div className="input-group col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Bạn tìm gì ...."
                        name="keywork"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <span className='col-md-2'>
                    <Link to='/product-cart' className='btn btn-outline-dark mb-5-meg line-height-10 text-white h-75'><i className="fa fa-shopping-cart mr-2 text-white" aria-hidden="true"></i>Giỏ hàng</Link>
                </span>
                <span className='col-md-2'>
                    <button className='btn btn-outline-success' onClick={() => onShowPrice(5)}>Giá: {'<='} 500 $</button>
                </span>
                <span className='col-md-2'>
                    <button className='btn btn-outline-info' onClick={() => onShowPrice(6)}>Giá: {'>='} 500 $</button>
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        search_Price: number => {
            dispatch(search_Price_dispatch(number))
        },
        onShowProductDiscount: name => {
            dispatch(fillter_Name_dispatch_discount(name))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageProductDiscount);