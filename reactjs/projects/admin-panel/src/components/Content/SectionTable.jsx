import { CiEdit, CiTrash } from 'react-icons/ci';
import { PostEdit } from '../Post/PostEdit';

const TableRow = ({ post, index, posts, setBlogPosts, handleClose, handleShow, setModalContent, setModalTitle }) => {
    const rowStyle = {
        whiteSpace: 'nowrap',
    };

    const editBtnHandler = () => {
        setModalTitle('Edit post');
        setModalContent(
            <PostEdit posts={posts} setBlogPosts={setBlogPosts} handleClose={handleClose} singlePost={post} />
        );
        handleShow();
    };

    const deleteBtnHandler = () => {
        setBlogPosts(posts.filter((curPost) => curPost.id !== post.id));
    };

    return (
        <tr key={`blog-post-${index}`}>
            <th scope='row'>{post.id}</th>
            <td style={rowStyle}>{post.title}</td>
            <td>{post.description}</td>
            <td style={rowStyle}>
                <button className='btn btn-sm btn-outline-primary me-2' onClick={editBtnHandler}>
                    Edit <CiEdit />
                </button>
                <button className='btn btn-sm btn-outline-danger' onClick={deleteBtnHandler}>
                    Delete <CiTrash />
                </button>
            </td>
        </tr>
    );
};

export const SectionTable = ({ posts, setBlogPosts, handleClose, handleShow, setModalContent, setModalTitle }) => {
    const tableFields = ['#', 'Name', 'Description', 'Actions'];

    return (
        <div className='mt-3'>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        {tableFields.map((field, index) => (
                            <th key={`table-field-${index}`}>{field}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <TableRow
                            post={post}
                            index={index}
                            posts={posts}
                            setBlogPosts={setBlogPosts}
                            handleShow={handleShow}
                            setModalTitle={setModalTitle}
                            setModalContent={setModalContent}
                            handleClose={handleClose}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
