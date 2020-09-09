import React from 'react';

const FooterItem = props => {

    const { footer } = props;

    if (footer.icone === 1) {
        return (
            <div className="col-md-4">
                <i className="fa fa-home"></i>
                <hr className="light" />
                <p>{footer.name}</p>
                <hr className="light" />
            </div>
        );
    } if (footer.icone === 2) {
        return (
            <div className="col-md-4">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <hr className="light" />
                <p>{footer.name}</p>
                <hr className="light" />
                <p>{footer.phone}</p>
            </div>
        );
    } else {
        return (
            <div className="col-md-4 footer-address">
                <i className="fa fa-address-card" aria-hidden="true"></i>
                <hr className="light" />
                <p>{footer.decscription}</p>
                <hr className="light" />
                <p>{footer.address}</p>
            </div>
        );
    }


}

export default FooterItem;