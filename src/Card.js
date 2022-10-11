import React from 'react';
import './Card.css';

const Card = ( { quote, by, id, date, deleteEntry } ) => {
    return (
        <div className="card">
            <h3>{quote}</h3>
            <p>-{by}</p>
            <p>on {date}</p>
            <button onClick={() => deleteEntry(id)}>🗑</button>
        </div>
    )
}

export default Card;