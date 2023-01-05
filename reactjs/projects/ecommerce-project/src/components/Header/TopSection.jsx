import { GrLocation } from 'react-icons/gr';
import { BsTruck } from 'react-icons/bs';

export const TopSection = () => {
    return (
        <div className='d-flex justify-content-between align-items-center py-3 container'>
            <div>
                <p>Need help? Call us: (+98) 0234 456 789</p>
            </div>
            <div className='d-flex' style={{ gap: 40 }}>
                <a className='text-reset text-decoration-none' href='/'>
                    <GrLocation size={22} className='me-2' /> Our Store
                </a>
                <a className='text-reset text-decoration-none' href='/'>
                    <BsTruck size={22} className='me-2' /> Track your order
                </a>
            </div>
        </div>
    );
};
