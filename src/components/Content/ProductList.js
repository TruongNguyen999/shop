import React from 'react';
import { connect } from 'react-redux';
import { seemore_dispatch } from './../../actions/index';

const ProductList = props => {
    const { seemore } = props

    const SeeMore = number => {
        seemore(number)
    }

    return (
        <>
            <div className="container-fluid padding product_list" id='product_list'>
                <div className="row padding">
                    {props.children}
                </div>
                <div className='row padding text-center my-2'>
                    <div className='col-12'>
                        <a href='#product_list' className='btn btn-outline-primary' onClick={() => SeeMore(4)}>Xem Thêm {'>>>'} </a>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, prosp) => {
    return {
        seemore: number => {
            dispatch(seemore_dispatch(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);