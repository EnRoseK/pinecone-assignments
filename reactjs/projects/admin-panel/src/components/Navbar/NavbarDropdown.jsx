import { useState } from 'react';

const DropdownItem = ({ item }) => {
    return (
        <li>
            <a className='dropdown-item' href={item.link}>
                {item.label}
            </a>
        </li>
    );
};

const DropdownDivider = () => {
    return (
        <li>
            <hr className='dropdown-divider' />
        </li>
    );
};

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
                    {items.map((item, index) => {
                        if (item.label === '---') return <DropdownDivider key={`dropdown-item-${index}`} />;
                        return <DropdownItem item={item} key={`dropdown-item-${index}`} />;
                    })}
                </ul>
            </div>
        </div>
    );
};
