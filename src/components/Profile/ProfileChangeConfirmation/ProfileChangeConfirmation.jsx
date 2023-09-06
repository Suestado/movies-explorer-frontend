import Popup from '../../Popup/Popup';
import union from '../../../images/union.svg';
import unionFailed from '../../../images/unionFailed.svg';

function ProfileChangeConfirmation(
  {
    confirmPopupOpened,
    setConfirmPopupOpened,
    errorWhileUpdating,
    onClosePopup,
  }) {

  return (
    <Popup
      baseClass="profileChangeConfirmation"
      isOpen={confirmPopupOpened}
      onClose={onClosePopup}
    >
      <img
        className="profileChangeConfirmation__union"
        src={errorWhileUpdating ? unionFailed : union}
        alt="Галочка"/>
      <h2 className="profileChangeConfirmation__register-confirmation">
        {!errorWhileUpdating ? 'Изменения успешно сохранены в профиле!' : 'Что-то пошло не так!\n' +
          'Попробуйте ещё раз.'}
      </h2>
    </Popup>
  );
}

export default ProfileChangeConfirmation;
