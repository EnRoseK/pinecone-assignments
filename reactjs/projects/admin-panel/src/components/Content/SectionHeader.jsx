import { Button } from './Button';
import { SlPlus } from 'react-icons/sl';

export const SectionHeader = ({ title }) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <h1>{title}</h1>
            <Button type='btn btn-primary' size='md'>
                Create <SlPlus />
            </Button>
        </div>
    );
};
