import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const DynamicModal = ({ show, handleClose, title = '', content = '' }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{content}</Modal.Body>
        </Modal>
    );
};
