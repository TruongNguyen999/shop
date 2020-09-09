import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { axios_API_dispatch_menus } from '../../actions';

const Menu = props => {

    const { menus, fetch_menus } = props;

    useEffect(() => {
        fetch_menus();
    }, [fetch_menus])

    const onShowMenus = menus => {
        let result = null;
        if (menus && menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink key={index} lable={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
            })
        }
        return result;
    }
    
    const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
        return (
            <Route
                path={to}
                exact={activeOnlyWhenExact}
                children={({ match }) => {
                    let active = match ? 'active' : '';
                    return (
                        <li className={`nav-item`}>
                            <Link to={to} className={`nav-link ${active}`}>
                                {lable}
                            </Link>
                        </li>
                    );
                }} />
        );
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg_light sticky-top" id="top">
            <div className="container-fluid">
                <Link className="navbar-branch" to='/'>
                    <i className="fa fa-home mr-10"></i>Nguyễn Nhựt Trường
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <i className="fa fa-bars cl-wh" aria-hidden="true"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {onShowMenus(menus)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = state => {
    return {
        menus: state.Menus
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetch_menus: () => {
            dispatch(axios_API_dispatch_menus())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);


