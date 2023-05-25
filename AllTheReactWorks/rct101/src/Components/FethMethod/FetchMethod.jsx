import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const dataFromApi = (limit,sortBy,sortTo,query,limitEx) => {
    return fetch(`https://shy-puce-binturong-ring.cyclic.app/mensProduct?${query? `q=${query}` : ""}${limit && limitEx?`_limit=${limit}` : ""}${sortBy && sortTo? `&_sort=${sortTo}&_order=${sortBy}` : ""}`)
    .then((res)=> res.json())
 }
export default function FetchMethod() {
    // const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [err ,setError] = useState(false);
    const [limit, setLimit] = useState(5)
    const [sortTo, setSortTo] = useState("price")
    const [sortBy, setSortBy] = useState("")
    const [limitEx, setLimitEx] = useState(true)
    const [query, setQuery] = useState("jacket")
    const fetchAndUpdateData =  async (limit,sortBy,sortTo,query,limitEx) => {
        try {
            const res = await dataFromApi(limit, sortBy,sortTo,query,limitEx);
           
            setData(res)
           
        } catch (error) {
             setError(true)
         
        }

    }
 
const handleSearch =  () =>{
    console.log(query)
    fetchAndUpdateData(query,limitEx)
}


  useEffect(()=>{
     fetchAndUpdateData(limit,sortBy,sortTo)
  },[limit,sortBy,sortTo])

  return (
        <div className="App">
            
            <div>
                <select onChange={(e)=> setSortBy(e.target.value)}>
                <option value="">Choose</option>
                <option value="asc">Assending</option>
                <option value="desc">Dessending</option>
                </select>
            </div>
            <dir>
                <input type='text' placeholder='Search here' onChange={(e)=> setQuery(e.target.value)} /> 
                    <button onClick={handleSearch}>Search</button>
            </dir>
            <div className="productContainer" >
                {
                    data.map((item)=> <ProductsCard {...item}/> )
                }
            </div>
        </div>
  )
}


