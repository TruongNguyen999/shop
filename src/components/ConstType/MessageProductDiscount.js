import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
                <span className='col-md-3'>
                    <button className='btn btn-outline-success' onClick={() => onShowPrice(5)}>Giá: Từ 100 $ - Đến 500 $</button>
                </span>
                <span className='col-md-3'>
                    <button className='btn btn-outline-info' onClick={() => onShowPrice(6)}>Giá: Từ 500 $ - Đến Trên 1000 $</button>
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