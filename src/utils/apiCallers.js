import axios from 'axios';
import * as config from './../contants/config';

const callApi = (endPoint, method = 'GET', body) => {
    return (
        axios({
            method: method,
            url: `${config.URL_API}/${endPoint}`,
            data: body
        }).catch(err => {
            console.log(err);
        })
    )
}

export default callApi;