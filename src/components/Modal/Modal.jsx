import './Modal.css';

    const Modal = ({ isOpen, title, message, type, onClose}) => {
        if (!isOpen) return null;
    const icon = type === "success"? "✅": "❌";

        return(
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2 className="modal-title">{title}</h2>
                    <p className="modal-message">{icon} {message}</p>
                    <button className={`modal-button ${type}`} onClick={onClose}>Close</button>
                </div>
            </div>
        )
    }
    export default Modal;