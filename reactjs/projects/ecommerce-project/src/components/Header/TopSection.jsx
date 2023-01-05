import { GrLocation } from 'react-icons/gr';
import { BsTruck } from 'react-icons/bs';

export const TopSection = () => {
    return (
        <div className='container topSection'>
            <p>Need help? Call us: (+98) 0234 456 789</p>
            <div className='right'>
                <div>
                    <GrLocation size={22} />
                    <a href='/'>Our Store</a>
                </div>
                <div>
                    <BsTruck size={22} />
                    <a href='/'>Track your order</a>
                </div>
            </div>
        </div>
    );
};
