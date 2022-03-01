import React from "react";
import { Link } from "react-router-dom";
import "./character.css"

const Character = (props) =>{
    const { character } = props
    return(
        <React.Fragment>
 <span className='fw-bold'>
     <div className= 'row align-items-center'>
     <div className='container d-flex justify-content-center mb-4'>
         <div className = "Character__container" className='card' style= {{minWidth: '200'}}>
                <Link 
                    className="Character__image"
                    to={`/character/${character.id}`}
                >
                    <img 
                        className= "Character__image"
                        src={props.character.image} 
                        alt={props.character.name}
                    />
                </Link>
                <div className="Character__Data">
                    <h2 className = "Color red">{props.character.name}</h2>
                    <p className = "Character__species">{props.character.species}</p>
                    <p className = "Character__status">{props.character.status}</p>
                    <small>{props.character.gender}</small>
                </div>
            </div>
         </div>
     </div>

     </span>
        </React.Fragment>
    );
};

export default Character;
