import { requests } from '../services/';

export const orderAction = {
    getOrders
};
function getOrders() {
    return dispatch => {
        let apiEndpoint = 'orders';
        requests.get(apiEndpoint)
            .then((response) => {
                console.log(response.data);
                dispatch(changeOrdersList(response.data));
            }).catch((err) => {
                console.log('***** ERROR ' + err);
            })
    };
}
export function changeOrdersList(order) {
    return {
        type: "FETECHED_ALL_ORDERS",
        order: order
    }
}