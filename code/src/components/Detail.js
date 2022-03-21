import React, {useState, useEffect} from 'react'

export const Detail = (props) => {
    const [details, setDetails] = useState('');
	const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(props.url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setDetails(json)
            })
            .finally(() => setLoading(false))
            
        }, [props])
    
    if (loading) {
        return <p>loading...</p>
    }

    return (
        <div>
            <h1>{props.name}</h1>
            {details && (
                <img src={details.sprites.front_default} alt='pokemon' />
            )}
        </div>
    )
}
