import React, { useEffect, useState } from 'react';
import './Index.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import IndexCard from './IndexCard';
import { useParams } from 'react-router-dom';

export default function Index({searchValue}) {
  // const { searchValue } = useParams();
  const [data, setData] = useState([]);
   const [search, setSearch] = useState(searchValue ? '' : 'New');
  const [isLoading, setIsLoading] = useState(false);
  const [searchvalue, setSearchvalue] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue) {
        setSearch('')
        setIsLoading(true);
        const url = `https://youtube-v38.p.rapidapi.com/search/?q=${searchValue}&hl=en&gl=IN`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '470ca0bc06msh85fec00c7e9c73ap1fb980jsn0f9b2e0902fd',
            'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setData(result.contents);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
        setSearchvalue(true)
      }
    };

    fetchData();
  }, [searchValue]);

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        setIsLoading(true);
        const url = `https://youtube-v38.p.rapidapi.com/search/?q=${search}&hl=en&gl=IN`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '470ca0bc06msh85fec00c7e9c73ap1fb980jsn0f9b2e0902fd',
            'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setData(result.contents);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
        setSearchvalue(false)
      }
    };

    fetchData();
  }, [search]);

  const handleClick = (text) => {
    setSearch(text);
  };

  return (
    <div className='container-flex pt-3'>
      <div className='d-flex flex-wrap justify-content-between'>
        <div className='categories'>
          <ul>
            <li
              onClick={() => handleClick('New')}
              className={search === 'New' ? 'active' : ''}
            >
              <HomeIcon className='icon' style={{ color: 'red' }} />
              New
            </li>
            <li
              onClick={() => handleClick('Music')}
              className={search === 'Music' ? 'active' : ''}
            >
              <MusicNoteIcon className='icon' style={{ color: 'red' }} />
              Music
            </li>
            <li
              onClick={() => handleClick('Game')}
              className={search === 'Game' ? 'active' : ''}
            >
              <SportsEsportsIcon className='icon' style={{ color: 'red' }} />
              Game
            </li>
            <li
              onClick={() => handleClick('Coding')}
              className={search === 'Coding' ? 'active' : ''}
            >
              <CodeIcon className='icon' style={{ color: 'red' }} />Coding
            </li>
            <li
              onClick={() => handleClick('ReactJS')}
              className={search === 'ReactJS' ? 'active' : ''}
            >
              <OndemandVideoIcon className='icon' style={{ color: 'red' }} />ReactJS
            </li>
            <li
              onClick={() => handleClick('Live')}
              className={search === 'Live' ? 'active' : ''}
            >
              <LiveTvIcon className='icon' style={{ color: 'red' }} />Live
            </li>
            <li
              onClick={() => handleClick('Education')}
              className={search === 'Education' ? 'active' : ''}
            >
              <SchoolIcon className='icon' style={{ color: 'red' }} />Education
            </li>
            <li
              onClick={() => handleClick('Beauty')}
              className={search === 'Beauty' ? 'active' : ''}
            >
              <FaceRetouchingNaturalIcon className='icon' style={{ color: 'red' }} />Beauty
            </li>
            <li
              onClick={() => handleClick('Fashion')}
              className={search === 'Fashion' ? 'active' : ''}
            >
              <CheckroomIcon className='icon' style={{ color: 'red' }} />Fashion
            </li>
            <li
              onClick={() => handleClick('Podcast')}
              className={search === 'Podcast' ? 'active' : ''}
            >
              <GraphicEqIcon className='icon' style={{ color: 'red' }} />Podcast
            </li>
            <li
              onClick={() => handleClick('Comedy')}
              className={search === 'Comedy' ? 'active' : ''}
            >
              <TheaterComedyIcon className='icon' style={{ color: 'red' }} />Comedy
            </li>
            <li
              onClick={() => handleClick('Gym')}
              className={search === 'Gym' ? 'active' : ''}
            >
              <FitnessCenterIcon className='icon' style={{ color: 'red' }} />Gym
            </li>
            <li
              onClick={() => handleClick('Crypto')}
              className={search === 'Crypto' ? 'active' : ''}
            >
              <DeveloperModeIcon className='icon' style={{ color: 'red' }} />Crypto
            </li>
          </ul>
        </div>

        <div className='text-white pt-3 text' style={{ width: '80%' }}>
          {searchvalue ? (
            <h2 className='heading ps-2'>
              Search Result: <span style={{ color: 'red' }}>{searchValue}</span>
            </h2>
          ) : (
            <h2 className='heading ps-2'>
              {search} <span style={{ color: 'red' }}>Video</span>
            </h2>
          )}

          <div className='d-flex flex-wrap justify-content-around'>
            {isLoading ? (
              <div className='loader'></div>
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((item) => {
                if (
                  item.video &&
                  item.video.thumbnails &&
                  item.video.thumbnails.length > 0
                ) {
                  return (
                    <IndexCard
                      id={item.video.videoId}
                      img={item.video.thumbnails[0].url}
                      title={item.video.title}
                      channelname={item.video.author?.title}
                    />
                  );
                }
                return null;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}