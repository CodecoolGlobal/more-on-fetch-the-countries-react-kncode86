import { useState } from "react";

function Countries(props){
    const type= props.type;
    const className= props.className;
    const country= props.country;
    const onSelect = props.onSelect;

    const [buttonSign, setButtonSign] = useState("+");

    const handleSelect = () => {
        onSelect(country);
    } 

    async function setFavorites() {
        buttonSign === "+" ? setButtonSign("-") : setButtonSign("+");
        if(buttonSign === "+"){
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
    }

    return(
        <div className={className}>
            <h2 type={type}> <button onClick={setFavorites}>{buttonSign}</button> {country}</h2> 
            <button type="button" className={className} onClick={handleSelect}>Learn more</button>  
        </div>
    )
}

export default Countries;