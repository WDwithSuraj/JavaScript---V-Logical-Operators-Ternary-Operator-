import {useEffect, useReducer} from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
import {updateResturant} from '../api/api'
const iniState ={
    name : "",
    type : "",
    rating : "",
    number_of_votes : "",
    price_starts_from : "",
    image : ""
}

const formReducer = (state,action) =>{
    switch(action.type){
        case "CHANGE_INPUT" : {
            return { 
                ...state,
                [action.payload.name] : action.payload.value
            }
        }
        case "FILL_INPUT" : {
            return {
                ...state,
                ...action.payload
            }
        }
        default : return state
    }
}

export const EditRestaurant = () => {
const {id} = useParams();
const navigate = useNavigate()
const [state, dispatch] = useReducer(formReducer, iniState)
const {name,type,rating,number_of_votes, price_starts_from, image} = state
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResturant(id,state)
        navigate('/')
    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        const payload = {};
        payload.name = name;
        payload.value = value
        if(name == "number_of_votes" || name == "price_starts_from" || name == "rating" ){
            payload.value = Number(value)
        }
        dispatch({type:"CHANGE_INPUT", payload : payload})
    }
useEffect(()=>{
    axios({
        method : 'get',
        url : `http://localhost:8080/restaurants/${id}`,
    }).then((res)=> dispatch({type : 'FILL_INPUT', payload : res?.data}) )
},[id])


    return <div>
        <h1>Add Restaurants</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:
                <input type="text" value={name} name="name" placeholder="Add Name" onChange={handleChange}/>
             </label><br />
             <label htmlFor="type">
                Type: <select name="type" value={type} onChange={handleChange}>
                    <option value="fine_dining">Fine Dining</option>
                    <option value="ethnic">Ethnic</option>
                    <option value="fast_food">Fast Food</option>
                    <option value="cafe">Cafe</option>
                    <option value="casual_dining">Casual Dining</option>
                </select>
             </label><br />
             <label htmlFor="rating">
                Rating: <select name="rating" value={rating} onChange={handleChange}>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
             </label><br />
             <label htmlFor="votes">
                Votes: <input type="text" name="number_of_votes" value={number_of_votes} onChange={handleChange} placeholder="Submit Votes"/>
             </label><br />
             <label htmlFor="price">
                Price: <input type="text" name="price_starts_from" value={price_starts_from} onChange ={handleChange} placeholder="Enter Price"/>
             </label><br />
             <label htmlFor="image">
                Image: <input type="text" value={image} onChange={handleChange} name="image" placeholder="Image link" />
             </label><br />
             <input type="submit"  value="Edit Resturants" />
        </form>
        <button onClick={()=> navigate(`/`)}>BACK TO HOME</button>
    </div>
}