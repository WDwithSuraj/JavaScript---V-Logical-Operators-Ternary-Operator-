import { useMyuseReducer } from "../hooks/useMyuseReducer"




const inital = {
    name : "",
    age : "",
}

const reducer = (state, {type, payload}) => {
    switch(type) {
      case "NAME" : {
        return {
          ...state, 
          name : payload
        }
      }

      case "AGE" : {
        return  {
          ...state,
          age : payload
        }
      }
      default : return state;
    }
}

export default function FormManage() {

  const [state, dispatch] = useMyuseReducer(reducer, inital)

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(state)

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name : <input type='text' name='name' onChange={(e)=> dispatch({type : "NAME", payload : e.target.value})}/><br /><br />
        Age : <input type='text' name='age' onChange={(e)=> dispatch({type : "AGE", payload : e.target.value})} /><br /><br />
        <input type="submit" />
      </form>
    </div>
     
  )
}
