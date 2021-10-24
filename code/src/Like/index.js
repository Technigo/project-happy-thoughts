import React from 'react'
import './like.css'

export const Like = ({ hearts, id, thougth, setThougths }) => {

    const handleOnClickLike = () => {
        console.log("enviar tercer fetch")
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
            method: 'POST'
        })
            .then((res) => res.json())
            .catch(error => console.error('Error:', error))
            .then((newTLike) => {
                console.log("newTLike", newTLike)
                console.log(thougth)
                // const updateLike = thougth.find(thougth._id === id)
                thougth.hearts++
                console.log(thougth)
                //la pregunta aqui es como actualizar el like cuando la persona lo da like sin tener que cargar la pagina
                //probablemente es con useeffect pero no se como 
            })
    }


    return (
        <div className="like-content">
            <button className={`heart-circle ${hearts > 0 ? "red" : "gray"} `} onClick={handleOnClickLike}>
                <i className="fas fa-heart"></i>
            </button>
            <p className="like-counter">x {hearts}</p>
        </div>
    )
}
