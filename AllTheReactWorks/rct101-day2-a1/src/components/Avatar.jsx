function Avatar({src,alt, rounded,name}){
    const style = {
        borderRadius : rounded ? "50%": "20px",
        width: "300px"
    }
    return(
        <div>
            <img src={src} alt={alt}
            style={style}
            />
            <h1>{name}</h1>

        </div>
    )
}

export default Avatar;