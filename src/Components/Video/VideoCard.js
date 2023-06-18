import React from 'react'
import {Link} from 'react-router-dom'
import './Video.css'

export default function VideoCard(props) {
    return (
        <>
            <Link to={`/stream/${props.id}`} className='link-text'>
                <div className="card bg-dark text-light m-2 card-info" style={{ width: '24rem' }}>
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
