import axios from "axios";

export const getData = (params = {}) => {
    return axios.get(`http://localhost:8080/restaurants`, {
        params: {
            _page: params.page,
            _limit: params.limit,
            _sort: params.sort,
            _order: params.order

        }
    })
}

export const addRestaurants = (resturantData) => {
    return axios.post(`http://localhost:8080/restaurants`, resturantData)
}


export const deleteResturants = (id) => {
    return axios.delete(`http://localhost:8080/restaurants/${id}`)
}

export const updateResturant = (id, data) => {
    return axios({
        method: 'put',
        url: `http://localhost:8080/restaurants/${id}`,
        data: data
    })
}
