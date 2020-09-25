import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fillter_Name_dispatch, search_Price_dispatch } from './../../actions/index';
import { seemore_dispatch } from './../../actions/index';

const MessageType = props => {

    const { search_Price, seemore, onShowProduct } = props

    const [name, setName] = useState('')

    useEffect(() => {
        onShowProduct(name)
    }, [onShowProduct, name])

    const onShowPrice = number => {
        search_Price(number)
        seemore(4)
    }

    return (
        <div className="container-fluid padding">
            <div className="col-12 padding message-lable">
                <span className="label label-danger col-md-3">Danh Sách Các Sản Phẩm</span>
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
                    <button className='btn btn-outline-success' onClick={() => onShowPrice(1)}>Giá: {'<='} 500 $</button>
                </span>
                <span className='col-md-2'>
                    <button className='btn btn-outline-info' onClick={() => onShowPrice(2)}>Giá: {'>='} 500 $</button>
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
        seemore: number => {
            dispatch(seemore_dispatch(number))
        },
        onShowProduct: name => {
            dispatch(fillter_Name_dispatch(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageType);