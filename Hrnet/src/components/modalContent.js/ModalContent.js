export default function ModalContent({ showModal, onClose, message }) {
  if (!showModal) {
    return null;
  }
  // showModal and onClose are empty props you can customize the names here but you need to define what they do in your parent component, message allow you to define the text you want to display
  return (
    <div className="modal">
      <div className="modal-content">
        <p className="modal-message">{message}</p>
        <button className="modal-close" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}
