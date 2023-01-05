import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const PostCreate = ({ posts, setBlogPosts, handleClose }) => {
    const [descValue, setDescValue] = useState('');
    const [nameValue, setNameValue] = useState('');

    const createHandler = () => {
        const newPost = {
            id: posts[posts.length - 1].id + 1,
            title: nameValue,
            description: descValue,
        };

        setBlogPosts([...posts, newPost]);
        handleClose();
    };

    return (
        <Form>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Post name'
                    onChange={(e) => {
                        setNameValue(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formDescription'>
                <Form.Label>Description</Form.Label>
                <ReactQuill theme='snow' value={descValue} onChange={setDescValue} />
            </Form.Group>

            <Button variant='primary' onClick={createHandler}>
                Submit
            </Button>
        </Form>
    );
};
