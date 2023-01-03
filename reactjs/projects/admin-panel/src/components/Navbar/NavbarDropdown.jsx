import { useState } from 'react';

export const NavbarDropdown = ({ picture = '', items = [] }) => {
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div>
            <div className='dropdown text-end'>
                <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        setShowDropDown(!showDropDown);
                    }}
                    className='d-block link-light text-decoration-none dropdown-toggle'
                >
                    <img src={picture} alt='mdo' width='32' height='32' className='rounded-circle' />
                </a>
                <ul className={`dropdown-menu text-small end-0 ${showDropDown && 'show'}`}>
                    {items.map((item, index) =>
                        index !== items.length - 1 ? (
                            <li>
                                <a className='dropdown-item' href={item.link}>
                                    {item.label}
                                </a>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <hr className='dropdown-divider' />
                                </li>
                                <li>
                                    <a className='dropdown-item' href={item.link}>
                                        {item.label}
                                    </a>
                                </li>
                            </>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};
