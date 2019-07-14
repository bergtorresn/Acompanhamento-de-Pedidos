import { userService } from '../services/';

export const orderAction = {
    getOrders
};
function getOrders() {
    return dispatch => {
        let apiEndpoint = 'orders';
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(changeOrdersList(response.data.data));
            }).catch((err) => {
                console.log(err);
            })
    };
}
export function changeOrdersList(order) {
    return {
        type: "FETECHED_ALL_ORDERS",
        order: order
    }
}