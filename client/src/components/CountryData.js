function CountryData(props){

    const data = props.data;
    const onBack = props.onBack;

    return(
        <div>
            <p>Capital: {data.capital}</p>
            <p>Area: {data.area} km2</p>
            <p>Continent: {data.continents}</p>
            <p>Flag: {data.flag}</p>
            <p>Start of Week: {data.startOfWeek}</p>
            <p>Subregion: {data.subregion}</p>
            <p>unMember: {data.unMember.toString()}</p>
            <p>landlocked: {data.landlocked.toString()}</p>
            <p>Status: {data.status}</p>
            <p>fifa: {data.fifa}</p>
            <button type="button" onClick={onBack}>Back</button>
        </div>
    )
}

export default CountryData;