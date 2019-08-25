
import React from 'react';

function Card({character}){

    return(
        <div className="col-md-4 my-3">
            <div className="card" >
            <img src={character.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <ul>
                    <li>Status:{character.status}</li>
                    <li>Specie:{character.species}</li>
                    <li>Gender:{character.gender}</li>
                    <li>Origin:{character.origin.name}</li>
                </ul>
            </div>
            </div>
        </div>

    )

}


export default Card;