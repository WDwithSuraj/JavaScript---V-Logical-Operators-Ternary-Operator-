import axios from 'axios';
import {useReducer,useEffect} from 'react'
import ResturantCard from './ResturantCard';
const getData = (url) =>{
   return axios.get(url)
}


const initState = {
    loading : false,
    data : [],
    err : false
}

const reducer = (state, action) => {
    switch(action.type){
        case "LOADING_DATA" : {
            return {
                loading : true,
                data : [],
                err : false
            }
        }
        case "FETCH_DONE" : {
            return {
                loading : false,
                data : action.payload,
                err : false
            }
        }
        case "GOT_ERROR" : {
            return {
                loading : false,
                data : [],
                err : true
            }
        }
        default:{
            throw new Error('Invalid action')
        }
    }
}



function Resturant(){
    const [state, dispatch] = useReducer(reducer, initState);
    const {loading, data, err} = state;
    const fetchAndUpdateData = async (url) => {
        try {
            dispatch({type:"LOADING_DATA"})
            const res = await getData(url)
            dispatch({type:"FETCH_DONE", payload : res?.data})
        } catch (error) {
            dispatch({type:'GOT_ERROR'})
        }
    }

    useEffect(()=> {
        fetchAndUpdateData(`http://localhost:8080/restaurants`)
    },[])
    if(loading){
        return <h1>....Loading</h1>
    }else if(err){
        return <h1>Something went wrong..</h1>
    }

    return <div>
        <h1>Resturant </h1>
        {data.map((item)=> (<ResturantCard key={item.id} {...item}/>))}
    </div>
}

export default Resturant;