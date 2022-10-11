import React from 'react';
import './Ideas.css';
import Card from './Card';

const Ideas = ({entries, deleteEntry }) => {
    const entryCards = entries.map(entry => {
        return (
            <Card 
                id={entry.id}
                quote={entry.quote}
                by={entry.by}
                date={entry.date}
                key={entry.id}
                deleteEntry={deleteEntry}
            />
        )
    })
    return (
        <div className="card-container">
            {entryCards}
        </div>
    )
}

export default Ideas;