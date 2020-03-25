import React, {useEffect, useState} from 'react'

import 'components/design/messagebox.css'


export const Happythoughts = () => {

const messages_URL = "https://technigo-thoughts.herokuapp.com/"
const [thoughts, setThoughts] = useState([]) 

    useEffect(() => {

        fetch(messages_URL) 
        .then((res) => {
            return res.json();
        })
        .then(data => {
        setThoughts(data);

        });

    }, []);

    return (

        <div>

        <article>
            {thoughts.map(text => ( 

            <section className="thoughtBox">
            <p>{text.message}</p>
            </section>
            
            ))
            
            }
        </article>
 

        </div>
    )

   
}
