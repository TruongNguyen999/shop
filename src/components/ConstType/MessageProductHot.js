import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { search_Price_dispatch, fillter_Name_dispatch_hot } from './../../actions/index';

const MessageProductHot = props => {

    const { search_Price, onShowProductHot } = props;

    const [name, setName] = useState('');

    useEffect(() => {
        onShowProductHot(name);
    }, [onShowProductHot, name])

    const onShowPrice = number => {
        search_Price(number);
    }

    return (
        <div className="container-fluid padding">
            <div className="col-12 padding message-lable">
                <span className="label label-danger col-md-3">Sản Phẩm Mới</span>
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
                    <button className='btn btn-outline-success' onClick={() => onShowPrice(3)}>Giá: Từ 100 $ - Đến 500 $</button>
                </span>
                <span className='col-md-3'>
                    <button className='btn btn-outline-info' onClick={() => onShowPrice(4)}>Giá: Từ 500 $ - Đến Trên 1000 $</button>
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
        onShowProductHot: name => {
            dispatch(fillter_Name_dispatch_hot(name))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageProductHot);