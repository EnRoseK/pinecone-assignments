import { SlPlus } from 'react-icons/sl';
import Button from 'react-bootstrap/Button';
import { PostCreate } from '../Post/PostCreate';

export const SectionHeader = ({
    title,
    handleShow,
    setModalTitle,
    setModalContent,
    blogPosts,
    setBlogPosts,
    handleClose,
}) => {
    return (
        <>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>{title}</h1>
                <Button
                    variant='primary'
                    size='md'
                    onClick={() => {
                        setModalTitle('Create post');
                        setModalContent(
                            <PostCreate posts={blogPosts} setBlogPosts={setBlogPosts} handleClose={handleClose} />
                        );
                        handleShow();
                    }}
                >
                    Create <SlPlus />
                </Button>
            </div>
        </>
    );
};
