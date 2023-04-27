function Countries(props){
    const type= props.type;
    const className= props.className;
    const country= props.country;

    const handleSelect = () => {
        props.onSelect(country);
    } 

    async function setFavorites() {
        try{
           const res = await fetch('http://localhost:3001/api/fav', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({country: props.country})
           });
           const country = await res.json();
           console.log(country);
        }catch(err){
            console.error(err);
        }
    }
    
    return(
        <div className={className}>
            <h2 type={type}> <button onClick={setFavorites}>+</button> {country}</h2> 
            <button type="button" className={className} onClick={handleSelect}>Learn more</button>  
        </div>
    )
}

export default Countries;