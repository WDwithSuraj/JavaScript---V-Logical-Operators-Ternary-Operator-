import {Link} from 'react-router-dom'

function ResturantCard({id,name,type,rating,number_of_votes,price_starts_from,image, handleDelete}){
        return <div style={{border:"1px solid black", margin : "15px"}}>
            <img src={image} alt={name} />
            <p>{name}{id}</p>
            <p>{type}</p>
            <p>{rating}</p>
            <p>{number_of_votes}</p>
            <p>{price_starts_from}</p>
            <button onClick={()=> handleDelete(id)}>Delete</button>
            <Link to={`/restaurant/edit/${id}`}  >
            <button>Edit</button>
            </Link>
        </div>
}

export default ResturantCard;