const initialState = {
    anchor: 'left',
    vendor: [],
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
        default:
            return state
    }
}