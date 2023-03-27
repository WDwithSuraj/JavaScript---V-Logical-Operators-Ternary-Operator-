import {useReducer,useEffect, useState} from 'react'
import ResturantCard from './ResturantCard';
import {getData,addRestaurants, deleteResturants} from '../api/api'
import { reducer } from './fetchReducerFun';
import { AddResturants } from './AddResturants';
import axios from 'axios';
const initState = {
    loading : false,
    data : [],
    err : false
}

function Resturant(){
    const [state, dispatch] = useReducer(reducer, initState);
    const {loading, data, err} = state;
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [sortBy, setSortBy] = useState("")
    const [sortTo, setSortTo] = useState("")
  
const fetchAndUpdate = (page,sortBy,sortTo) => {
    dispatch({type:"LOADING_DATA"})
        getData({page:page, limit:4, sort: sortBy, order:sortTo})
        .then((res)=> {
            dispatch({type:"FETCH_DONE", payload : res?.data})
            setTotalPage(res.headers["x-total-count"])
        } )
        .catch((err)=> dispatch({type:'GOT_ERROR'}))
}

    useEffect(()=> {
         fetchAndUpdate(page,sortBy,sortTo)
    },[page,sortBy,sortTo]);

const handleAdd = (resturantData) => {
    addRestaurants(resturantData)
    fetchAndUpdate(page,sortBy, sortTo)
}

const handleDelete = (id) => {
    deleteResturants(id)
    fetchAndUpdate(page,sortBy, sortTo)
}

    if(loading){
        return <h1>....Loading</h1>
    }else if(err){
        return <h1>Something went wrong..</h1> 
    }

    return <div>
        <h1>Resturant </h1>
        <AddResturants handleAdd={handleAdd}/>
        <br /><br />
        <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
            <option>Sort by </option>
            <option value="rating">Rating</option>
            <option value="price_starts_from">Price</option>
        </select>
        <select value={sortTo} onChange={(e)=> setSortTo(e.target.value) }>
            <option>Choose Option</option>
            <option value="asc">Assend</option>
            <option value="desc">Dessend</option>
        </select>
        {data.map((item)=> (<ResturantCard key={item.id} {...item} handleDelete={handleDelete} />))}
        <div>
            <button disabled={page==1} onClick={()=> setPage(page-1)}>Prev</button>
            <button>{page}</button>
            <button disabled={(totalPage/4) == page} onClick={()=> setPage(page+1)}>Next</button>
        </div>
    </div>
}

export default Resturant;