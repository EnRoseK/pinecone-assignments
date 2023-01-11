import smallLogo from '../images/logo-small.svg';
import searchIcon from '../images/magnify-glass.svg';
import writeIcon from '../images/write-icon.svg';
import profilePic from '../images/profile.png';
import { MainButton } from './MainButton';
import { useState } from 'react';

export const SlimNav = () => {
    const [dropDown, setDropDown] = useState(false);

    return (
        <div className='d-flex justify-content-between align-items-center py-2 px-4 slim-nav'>
            <div className='d-flex'>
                <img src={smallLogo} alt='' className='me-3' />
                <form className='position-relative'>
                    <button type='submit' className='btn search-button '>
                        <img src={searchIcon} alt='' />
                    </button>
                    <input type='text' className='form-control search-input' placeholder='Search Medium' />
                </form>
            </div>
            <div>
                <ul className='d-flex align-items-center slim-nav-menu'>
                    <li>
                        <a href='#' className='slim-nav-link'>
                            <img src={writeIcon} alt='' className='me-2' />
                            Write
                        </a>
                    </li>
                    <li>
                        <MainButton href='#'>Sign Up</MainButton>
                    </li>
                    <li>
                        <a href='#' className='slim-nav-link'>
                            Sign In
                        </a>
                    </li>
                    <li>
                        <div className='dropdown text-end'>
                            <a
                                style={{ cursor: 'pointer' }}
                                className='d-block link-dark text-decoration-none dropdown-toggle'
                                onClick={() => {
                                    setDropDown(!dropDown);
                                }}
                            >
                                <img
                                    src={profilePic}
                                    alt='mdo'
                                    width='32'
                                    height='32'
                                    className='rounded-circle border'
                                />
                            </a>
                            <ul className={`dropdown-menu text-small end-0 ${dropDown && 'show'}`}></ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
