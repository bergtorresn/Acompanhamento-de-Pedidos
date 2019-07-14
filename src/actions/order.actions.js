import { requests } from '../services/';
import { history } from '../helpers';

export const orderAction = {
    createOrder,
    getOrders,
    getOrderById,
    editOrderStatus,
    deleteOrderById,
    onChangeProps,
};

function getOrders() {
    return dispatch => {
        let apiEndpoint = 'orders';
        requests.get(apiEndpoint)
            .then((response) => {
                console.log("***** GETED");
                dispatch(changeOrdersList(response.data));
            }).catch((err) => {
                console.log('***** ERROR ' + err);
            })
    };
}

function createOrder(payload) {
    return dispatch => {
        let apiEndpoint = 'orders';
        requests.post(apiEndpoint, payload)
            .then((response) => {
                dispatch(createANewOrder());
                console.log("***** CREATED");
                history.push('/orders')
            }).catch((err) => {
                console.log('***** ERROR ' + err);
            })
    };
}

function deleteOrderById(id) {
    return dispatch => {
        let apiEndpoint = 'orders/' + id;
        requests.remove(apiEndpoint)
            .then((response) => {
                console.log("***** DELETED");
                dispatch(deleteOrdersDetails());
                dispatch(orderAction.getOrders());
            }).catch((err) => {
                console.log('***** ERROR ' + err);
            })
    };
}

function getOrderById(id) {
    return dispatch => {
        let apiEndpoint = 'orders/' + id;
        requests.get(apiEndpoint)
            .then((response) => {
                dispatch(editOrderDetails(response.data));
                console.log('***** RESPONSE ' + editOrderDetails(response.data))
            }).catch((err) => {
                console.log('***** ERROR ' + err);
            })
    };
}

function onChangeProps(props, event) {
    return dispatch => {
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editOrderStatus(id) {

    let payload = getOrderById(id)

    if (payload.orderstatus === 0) {
        payload.orderstatus = 1
    } else if (payload.orderstatus === 0) {
        payload.orderstatus = 2
    } else if (payload.orderstatus === 0) {
        payload.orderstatus = 3
    } else {
        payload.orderstatus = 4
    }

    return dispatch => {
        let apiEndpoint = 'orders/' + id;
        requests.put(apiEndpoint, payload)
        .then((response) => {
            dispatch(updateOrdersDetails());
            dispatch(orderAction.getOrders());
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

export function handleOnChangeProps(props, value) {
    return {
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}
export function editOrderDetails(order) {
    return {
        type: "ORDER_DETAIL",
        id: order.id,
        customerName: order.customerName,
        customerCPF: order.customerCPF,
        orderstatus: order.orderstatus,
        orderDescription: order.orderDescription
    }
}
export function createANewOrder() {
    return {
        type: "ORDER_CREATED_SUCCESSFULLY"
    }
}
export function deleteOrdersDetails() {
    return {
        type: "DELETED_ORDER_DETAILS"
    }
}
export function updateOrdersDetails() {
    return {
        type: "UPDATE_ORDER_DETAILS"
    }
}