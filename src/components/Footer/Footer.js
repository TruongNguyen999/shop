import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { axios_API_dispatch_footer } from '../../actions';
import FooterItem from './FooterItem';

const Footer = props => {

    const { fetchFooter, footers } = props;

    useEffect(() => {
        fetchFooter();
    }, [fetchFooter])

    const onShowFooter = footers => {
        let result = null;
        if(footers && footers.length > 0){
            result = footers.map((footer, index) => {
                return <FooterItem key={index} footer={footer} />
            })
        }
        return result;
    }

    return (
        <>
            <footer>
                <div className="container-fluid padding">
                    <div className="row text-center">
                        {onShowFooter(footers)}
                        <div className="col-12">
                            <hr className="light-100" />
                            <h5>&copy; Thế Giới Của Di Động</h5>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        footers: state.Footer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchFooter: () => {
            dispatch(axios_API_dispatch_footer())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);