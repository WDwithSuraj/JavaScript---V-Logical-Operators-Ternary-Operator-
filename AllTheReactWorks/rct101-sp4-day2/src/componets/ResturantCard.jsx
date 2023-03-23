function ResturantCard({id,name,type,rating,number_of_votes,price_start_from,image}){
        return <div style={{border:"1px solid black", margin : "15px"}}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{type}</p>
            <p>{rating}</p>
            <p>{number_of_votes}</p>
            <h3>{price_start_from}</h3>
        </div>
}

export default ResturantCard;