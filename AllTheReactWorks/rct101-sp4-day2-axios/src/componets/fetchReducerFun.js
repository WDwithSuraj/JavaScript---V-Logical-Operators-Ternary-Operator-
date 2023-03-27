export const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING_DATA": {
            return {
                loading: true,
                data: [],
                err: false
            }
        }
        case "FETCH_DONE": {
            return {
                loading: false,
                data: action.payload,
                err: false
            }
        }
        case "GOT_ERROR": {
            return {
                loading: false,
                data: [],
                err: true
            }
        }
        default: {
            throw new Error('Invalid action')
        }
    }
}