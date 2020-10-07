import React, { useEffect } from 'react';

const Administration = props => {

    const { history } = props;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) history.push({pathname: '/'});
    }, [history])

    return (
        <>
            <div className='administration'>
                <div className='menu'>
                    <h3 className='text-white text-center mt-4'>SHOP PHONE</h3>
                    <hr className='my-3' />
                    <ul>
                        <li>
                            <a href='#'><i className="fa fa-cart-plus mr-3 " aria-hidden="true"></i> Sản Phẩm</a>
                        </li>
                        <hr className='my-1' />
                        <li>
                            <a href='#'><i className="fa fa-newspaper-o mr-3 " aria-hidden="true"></i> Tin Tức</a>
                        </li>
                        <hr className='my-1' />
                        <li>
                            <a href='#'><i className="fa fa-user mr-3 " aria-hidden="true"></i> Người Dùng</a>
                        </li>
                    </ul>
                </div>
                <div className='content'>

                    <div className="navbar">
                        <a className="navbar-brand" href="#">Nguyên Nhựt Trường</a>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#">tài khoản : Trường    </a>
                            </li>
                        </ul>
                    </div>
                    <div className='main-content'>
                        <ul className="list-group">
                            <li className="list-group-item">Item 1</li>
                            <li className="list-group-item">Item 2</li>
                            <li className="list-group-item">Item 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Administration;