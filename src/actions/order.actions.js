import { requests } from '../services/';

export const orderAction = {
    createOrder,
    getOrders,
    getOrderById,
    editOrderInfo,
    deleteOrderById,
    onChangeProps,
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

function createOrder(payload) {
    return dispatch => {
        let apiEndpoint = 'orders';
        requests.post(apiEndpoint, payload)
            .then((response) => {
                dispatch(createUserInfo());
            })
    }
}

function getOrderById(id) {
    return dispatch => {
        let apiEndpoint = 'orders/' + id;
        requests.get(apiEndpoint)
            .then((response) => {
                dispatch(editOrderDetails(response.data));
            })
    };
}

function onChangeProps(props, event) {
    return dispatch => {
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editOrderInfo(id, payload) {
    return dispatch => {
        let apiEndpoint = 'orders/' + id;
        requests.put(apiEndpoint, payload)
            .then((response) => {
                dispatch(updatedUserInfo());
            })
    }
}

function deleteOrderById(id) {
    return dispatch => {
        let apiEndpoint = 'orders/' + id;
        requests.remove(apiEndpoint)
            .then((response) => {
                dispatch(deleteOrdersDetails());
                dispatch(orderAction.getOrders());
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
export function updatedUserInfo() {
    return {
        type: "USER_UPDATED"
    }
}
export function createUserInfo() {
    return {
        type: "USER_CREATED_SUCCESSFULLY"
    }
}
export function deleteOrdersDetails() {
    return {
        type: "DELETED_ORDER_DETAILS"
    }
}