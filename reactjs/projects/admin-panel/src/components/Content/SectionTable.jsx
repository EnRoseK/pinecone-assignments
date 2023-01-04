import { useState } from 'react';
import { Button } from './Button';
import { CiEdit, CiTrash } from 'react-icons/ci';

const TableWrapper = ({ children }) => {
    return (
        <div className='mt-3'>
            <table className='table table-bordered table-hover'>{children}</table>
        </div>
    );
};

const TableHead = () => {
    const tableFields = ['#', 'Name', 'Description', 'Actions'];

    return (
        <thead>
            <tr>
                {tableFields.map((field, index) => (
                    <th key={`table-field-${index}`}>{field}</th>
                ))}
            </tr>
        </thead>
    );
};

const TableBody = () => {
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

    const rowStyle = {
        whiteSpace: 'nowrap',
    };

    return (
        <tbody>
            {blogPosts.map((post, index) => (
                <tr key={`blog-post-${index}`}>
                    <th scope='row'>{post.id}</th>
                    <td style={rowStyle}>{post.title}</td>
                    <td>{post.description}</td>
                    <td style={rowStyle}>
                        <button className='btn btn-sm btn-outline-primary me-2'>
                            Edit <CiEdit />
                        </button>
                        <button
                            className='btn btn-sm btn-outline-danger'
                            onClick={() => {
                                setBlogPosts(blogPosts.filter((curPost) => curPost.id !== post.id));
                            }}
                        >
                            Delete <CiTrash />
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export const SectionTable = () => {
    return (
        <TableWrapper>
            <TableHead />
            <TableBody />
        </TableWrapper>
    );
};
