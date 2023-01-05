import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const PostEdit = ({ posts, setBlogPosts, singlePost, handleClose }) => {
    const [descValue, setDescValue] = useState(singlePost.description);
    const [nameValue, setNameValue] = useState(singlePost.title);

    const editHandler = () => {
        const newPosts = posts.map((post) => {
            if (post.id === singlePost.id) {
                post.title = nameValue;
                post.description = descValue;

                return post;
            }

            return post;
        });
        setBlogPosts(newPosts);
        handleClose();
    };
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Post name'
                    value={nameValue}
                    onChange={(e) => {
                        setNameValue(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formDescription'>
                <Form.Label>Description</Form.Label>
                <ReactQuill theme='snow' value={descValue} onChange={setDescValue} />
            </Form.Group>

            <Button variant='primary' onClick={editHandler}>
                Submit
            </Button>
        </Form>
    );
};
