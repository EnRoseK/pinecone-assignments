import { ContentWrapper } from './Content/ContentWrapper';
import { SectionHeader } from './Content/SectionHeader';
import { SectionTable } from './Content/SectionTable';
import { useState } from 'react';
import { DynamicModal } from './Utils/DynamicModal';
import { PostCreate } from './Post/PostCreate';

export const Content = () => {
    const [blogPosts, setBlogPosts] = useState([
        {
            id: 1,
            title: 'Post 1',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate suscipit est nam, architecto perferendis ipsum.',
        },
        {
            id: 2,
            title: 'Post 2',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate suscipit est nam, architecto perferendis ipsum.',
        },
        {
            id: 3,
            title: 'Post 3',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate suscipit est nam, architecto perferendis ipsum.',
        },
        {
            id: 4,
            title: 'Post 4',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate suscipit est nam, architecto perferendis ipsum.',
        },
        {
            id: 5,
            title: 'Post 5',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate suscipit est nam, architecto perferendis ipsum.',
        },
    ]);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <ContentWrapper>
            <DynamicModal show={show} handleClose={handleClose} title={modalTitle} content={modalContent} />
            <SectionHeader
                title='Blog Posts'
                handleShow={handleShow}
                setModalTitle={setModalTitle}
                setModalContent={setModalContent}
                posts={blogPosts}
                setBlogPosts={setBlogPosts}
                handleClose={handleClose}
            />
            <SectionTable
                posts={blogPosts}
                setBlogPosts={setBlogPosts}
                handleShow={handleShow}
                setModalTitle={setModalTitle}
                setModalContent={setModalContent}
                handleClose={handleClose}
            />
        </ContentWrapper>
    );
};
