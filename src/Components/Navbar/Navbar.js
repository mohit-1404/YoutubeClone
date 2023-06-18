import React, { useState, useRef, useEffect } from 'react';
import logo from '../../images/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const inputRef = useRef(null);

  function handleSearch() {
    const inputValue = inputRef.current.value;
    props.onSearch(inputValue);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  }

  return (
    <>
      <div className='d-flex justify-content-between align-items-center p-4 bg-black sticky-top'>
        <Link to='/'>
          <img src={logo} alt='Error' className='pe-2' srcSet='' width={'70px'} />
        </Link>
        <div>
          <form className='d-flex'>
            <input
              ref={inputRef}
              className='me-2 ps-3 input rounded-pill'
              type='search'
              placeholder='Search...'
              style={{ width: '450px' }}
              aria-label='Search'
              onKeyPress={handleKeyPress}
            />

            <Link to='/'  onClick={handleSearch}>
              <button className='btn btn-outline-success' type='button' >
                <i className='fa fa-search' style={{ fontSize: '30px' }} aria-hidden='true'></i>
              </button>
            </Link>
            
          </form>
        </div>
      </div>
    </>
  );
}