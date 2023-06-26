import React from "react";
import '../Styles/list.css'
const List=({people})=>{
    return(
        <>
        {people.map((person)=>{
            const {id,name,age,image}=person;
            return(
                <article className="data-container" key={id}>
                    <img src={image} alt={name} />
                    <section className="introduction-container">
                        <h3>{name}</h3>
                        <p>{age}</p>
                    </section>
                </article>

            )
        })}
        </>
    )
}
export default List ;