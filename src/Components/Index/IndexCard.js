import React from 'react'
import './IndexCard.css'
import { Link } from 'react-router-dom';

export default function IndexCard(props) {
    return (
        <>
            <Link to={`/stream/${props.id}`} className='link-text m-2'>
                <div className="card bg-dark text-light card-info" style={{ width: '20rem' }}>
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.channelname}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}
