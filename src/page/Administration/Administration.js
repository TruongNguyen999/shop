import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ChartMain from './Chart/ChartMain';
import News from './News/News';
import Products from './Products/Products';
import Setting from './Setting/Setting';
import Users from './Users/Users';

const Button = styled.button`
    text-decoration: none;
    color: white;
    display: flex;
    background: none;
    border: none;
`;

const Title = styled.h3`
    color: white;
    text-align: center;
    margin-top: 1.5rem
`;

const Administration = props => {

    const { history } = props;

    const [admin, setAdmin] = useState(true);
    const [product, setProduct] = useState(false);
    const [news, setNews] = useState(false);
    const [users, setUsers] = useState(false);
    const [cog, setCog] = useState(false);
    const [adm, setAdm] = useState('');


    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (!user) history.push({ pathname: '/login' });
        setAdm(user);
    }, [history])

    return (
        <>
            <div className='administration'>
                <div className='menu'>
                    <Title >SHOP PHONE</Title>
                    <hr className='my-3' />
                    <ul>
                        <li style={{ backgroundColor: `${product ? 'rgb(55, 16, 83)' : ''}` }}
                            onClick={() => { setProduct(true); setAdmin(false); setNews(false); setUsers(false); setCog(false) }}>
                            <Button ><i className="fa fa-cart-plus mr-3 " aria-hidden="true"></i> Sản Phẩm</Button>
                        </li>
                        <hr className='my-1' />
                        <li style={{ backgroundColor: `${news ? 'rgb(55, 16, 83)' : ''}` }}
                            onClick={() => { setNews(true); setAdmin(false); setProduct(false); setUsers(false); setCog(false) }}>
                            <Button><i className="fa fa-newspaper-o mr-3 " aria-hidden="true"></i> Tin Tức</Button>
                        </li>
                        <hr className='my-1' />
                        <li style={{ backgroundColor: `${users ? 'rgb(55, 16, 83)' : ''}` }}
                            onClick={() => { setUsers(true); setAdmin(false); setNews(false); setNews(false); setCog(false) }}>
                            <Button ><i className="fa fa-user mr-3 " aria-hidden="true"></i> Người Dùng</Button>
                        </li>
                        <hr className='my-1' />
                        <li style={{ backgroundColor: `${admin ? 'rgb(55, 16, 83)' : ''}` }}
                            onClick={() => { setAdmin(true); setProduct(false); setNews(false); setUsers(false); setCog(false) }}>
                            <Button ><i class="fa fa-building mr-3" aria-hidden="true"></i> Thống Kê</Button>
                        </li>
                        <hr className='my-1' />
                        <li style={{ backgroundColor: `${cog ? 'rgb(55, 16, 83)' : ''}` }}
                            onClick={() => { setCog(true); setProduct(false); setNews(false); setUsers(false); setAdmin(false) }}>
                            <Button ><i class="fa fa-cog mr-3" aria-hidden="true"></i> Cài Đặt</Button>
                        </li>
                    </ul>
                </div>
                <div className='content'>
                    <div className="navbar">
                        <Link className="navbar-brand" to="/">Nguyên Nhựt Trường</Link>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <label className='text-white'>Tài khoản : {adm}</label>
                            </li>
                        </ul>
                    </div>
                    <div className='main-content'>
                        {admin ? <ChartMain /> : null}
                        {product ? <Products /> : null}
                        {news ? <News /> : null}
                        {users ? <Users /> : null}
                        {cog ? <Setting /> : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Administration;
