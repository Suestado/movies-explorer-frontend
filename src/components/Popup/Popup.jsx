import { useEffect } from 'react';

function Popup(props) {
  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return (
      document.addEventListener('keydown', handleEscClose)
    );
  }, []);

  function handleOverlayClose(evt) {
    if(evt.target.classList.contains('popup')) {
      props.onClose();
    }
  }

  function handleEscClose(evt) {
    if(evt.key === 'Escape') {
      props.onClose();
    }
  }

  return (
    <div
      className={`popup ${props.isOpen && 'popup_opened'}`}
      onClick={handleOverlayClose}
    >
      <div className={`popup__container ${props.baseClass}`}>

        {props.children}

        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default Popup;
