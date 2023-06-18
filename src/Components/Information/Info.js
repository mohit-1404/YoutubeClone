import React, { useEffect, useState } from 'react';
import './Info.css';
import InfoCard from './InfoCard';
import { useParams } from 'react-router-dom';

export default function Info() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [channelDetails, setChannelDetail] = useState([]);
  const [channelName, setChannelName] = useState('');

  useEffect(() => {
    const fetchChannelVideo = async () => {
      const url = `https://youtube-v38.p.rapidapi.com/channel/videos/?id=${id}&hl=en&gl=US`;
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
        setData(result.contents);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChannelVideo();
  }, [id]);

  useEffect(() => {
    const fetchChannelDetails = async () => {
      const url = `https://youtube-v38.p.rapidapi.com/channel/details/?id=${id}&hl=en&gl=US`;
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
        setChannelDetail(result);
        setChannelName(result.title);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChannelDetails();
  }, []);

  return (
    <>
      <div className='bg-container'></div>
      {channelDetails && (
      <div>
        {channelDetails.avatar && (
            <div className='logo-cont'>
                <img src={channelDetails.avatar[2]?.url} className='logo-img' alt="" srcSet="" />
            </div>
            )}

        <div className='text-center text-white text-info text-capitalize'>
          <p>{channelDetails.title}</p>
          {channelDetails.stats && <p>{channelDetails.stats.subscribersText}</p>}
        </div>
      </div>
    )}

      <div className='d-flex flex-wrap justify-content-around align-items-center pt-5'>
        {data &&
          data.map((item) => (
            <InfoCard
              id={item.video.videoId}
              title={item.video.title}
              img={item.video.thumbnails[1].url}
              channelname={channelName}
            />
          ))}
      </div>
    </>
  );
}
