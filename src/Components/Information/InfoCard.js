import React from 'react'
import './InfoCard.css'
import { Link } from 'react-router-dom';

export default function InfoCard(props) {
    return (
        <>
            <div className="card m-5 bg-dark card-info" style={{width:'22rem'}}>
        <Link to={`/stream/${props.id}`} className='link-text'>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body text-white">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.channelname}</p>
                </div>
        </Link>
            </div>
        </>
    )
}
