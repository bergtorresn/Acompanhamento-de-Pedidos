const initialState = {
    anchor: 'left',
    order: [],
    open: false,
    id: '',
    customerName: '',
    customerCPF: '',
    orderDescription: ''
};

export function order(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_ORDERS':
            return {
                ...state,
                order: action.order
            };
        case 'ORDER_DETAIL':
            return {
                ...state,
                id: action.id,
                customerName: action.customerName,
                customerCPF: action.customerCPF,
                orderstatus: action.orderstatus,
                orderDescription: action.orderDescription
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };
        default:
            return state
    }
}