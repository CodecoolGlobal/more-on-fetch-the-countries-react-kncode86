function Countries(props){
    const type= props.type;
    const className= props.className;
    const country= props.country;

    const handleSelect = () => {
        props.onSelect(country);
    }
    
    return(
        <div className={className}>
            <h2 type={type}><span>+</span> {country}</h2> 
            <button type="button" className={className} onClick={handleSelect}>Learn more</button>  
        </div>
    )
}

export default Countries;