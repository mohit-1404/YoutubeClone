import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import './Video.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Video() {
    const { id } = useParams();
    const [data, Setdata] = useState([]);
    const [data1, Setdata1] = useState([]);
    const [comment, Setcomment] = useState([]);
    const countryCodes = 'IN,US';

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://youtube-v38.p.rapidapi.com/video/related-contents/?id=${id}&hl=en&gl=${countryCodes}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '470ca0bc06msh85fec00c7e9c73ap1fb980jsn0f9b2e0902fd',
                    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                Setdata(result.contents);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchdata1 = async () => {
            const url = `https://youtube-v38.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=${countryCodes}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '470ca0bc06msh85fec00c7e9c73ap1fb980jsn0f9b2e0902fd',
                    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                Setdata1(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchdata1();
    }, [id]);

    useEffect(() => {
        const fetchComments = async () => {
            const url = `https://youtube-v38.p.rapidapi.com/video/comments/?id=${id}&hl=en&gl=${countryCodes}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '470ca0bc06msh85fec00c7e9c73ap1fb980jsn0f9b2e0902fd',
                    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                Setcomment(result.comments);
            } catch (error) {
                console.error(error);
            }
        };

        fetchComments();
    }, [id]);


    return (
        <>
            <div className='container-flex p-3'>
                <div className='d-flex justify-content-around reponsive'>
                    <div className='cont' style={{ width: '70%' }}>
                        <div className='ratio ratio-16x9'>
                            <iframe
                                src={`https://www.youtube.com/embed/${id}`}
                                title='YouTube video player'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            ></iframe>
                        </div>

                        {data1 && (
                            <div className='text-white' id='text'>
                                <h3>{data1.title}</h3>
                                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                    <div>
                                        <Link to={`/video/${data1.author?.channelId}`}>
                                                <p>{data1.author?.title}</p>
                                        </Link>
                                    </div>
                                    <p>
                                        {data1.stats && data1.stats.views} views
                                        <span className='p-5'>{data1.stats && data1.stats.likes} likes</span>

                                    </p>
                                </div>
                                <p>{data1.description}</p>
                            </div>
                        )}

                        {/* Comments */}
                        {comment ? (
                            <div className='text-white'>
                                <h3>
                                    <span>{comment.length}</span> Comments
                                </h3>
                                <hr />
                                {comment.map((commentItem) => (
                                    <div className='comment-text'>
                                        <p>
                                            {commentItem.author.title}{' '}
                                            <span className='text-danger'>{commentItem.publishedTimeText}</span>
                                        </p>
                                        <p>{commentItem.content}</p>
                                        <p className='pb-3'>
                                            <i className="fa fa-thumbs-up" aria-hidden="true"></i> {commentItem.stats.votes} Likes
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='text-white'>
                                <h3>
                                    No Comments ...
                                </h3>
                            </div>
                        )}

                    </div>

                    <div className='videocard'>
                        <h1 className='text-white'>Related Videos</h1>
                        {Array.isArray(data) && data.length > 0 && (
                            data.map((item) => {
                                if (
                                    item.video &&
                                    item.video.thumbnails &&
                                    item.video.thumbnails.length > 0
                                ) {
                                    return (
                                        <VideoCard
                                            id={item.video.videoId}
                                            img={item.video.thumbnails[0]?.url}
                                            title={item.video.title}
                                            channelname={item.video.author.title}
                                        />
                                    );
                                }
                                return null;
                            })
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}