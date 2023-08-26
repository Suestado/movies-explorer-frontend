import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import { emailRegExp, userNameRegexp } from '../../utils/Constants';
import MainApi from '../../utils/MainApi';
import ProfileChangeConfirmation from '../Profile/ProfileChangeConfirmation/ProfileChangeConfirmation';

function Profile({ setIsLoggedIn, currentUser, setCurrentUser }) {
  const currentUserContext = useContext(CurrentUserContext);
  const [isChangeUserData, setIsChangeUserData] = useState(false);
  const [isInputDiff, setIsInputDiff] = useState(false);
  const [confirmPopupOpened, setConfirmPopupOpened] = useState(false);
  const [errorWhileUpdating, setErrorWhileUpdating] = useState(false);

  useEffect(() => {
    reset({
      name: currentUserContext.name,
      email: currentUserContext.email,
    });
  }, []);

  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    reset,
    watch,
  } = useForm(
    {
      mode: 'onChange',
    },
  );

  useEffect(() => {
    watch((name) => {
      if (name.name !== currentUserContext.name || name.email !== currentUserContext.email) {
        setIsInputDiff(true);
      } else {
        setIsInputDiff(false);
      }
    });
  }, [watch, isChangeUserData, currentUser]);

  function handleChangeUserData() {
    setIsChangeUserData(!isChangeUserData);
  }

  function handleLogOut() {
    MainApi.logOut();
    localStorage.clear();
    setIsLoggedIn(false);
  }

  function handleSubmitForm() {
    MainApi.updateUser(watch('email'), watch('name'))
      .then((user) => {
        setCurrentUser({
            id: user._id,
            name: user.name,
            email: user.email,
          });
        setConfirmPopupOpened(true);
      })
      .catch((err) => {
        setErrorWhileUpdating(true);
        setConfirmPopupOpened(true);
        console.log(`При обновлении профиля произошла ошибка: ${err}`);
      });
  }

  function onClosePopup() {
    setConfirmPopupOpened(false);
    setErrorWhileUpdating(false);
    setIsChangeUserData(false);
  }


  return <section className="profile">
    <form
      className="profile__info"
      id="profileForm"
      action="#"
      method="post"
      name="profileForm"
      noValidate
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <h2 className="profile__header">Привет, {currentUserContext.name}!</h2>
      <fieldset className="profile__dataSet">
        <label className="profile__dataItem">
          <p className="profile__dataName">Имя</p>
          <input
            className="profile__dataInput"
            id="name-input"
            type="text"
            name="name"
            placeholder="Введите свое имя"
            disabled={!isChangeUserData}
            {...register(
              'name',
              {
                required: 'Текст должен содержать не менее 2-х символов',
                maxLength: {
                  value: 40,
                  message: 'Текст должен содержать не более 40 символов',
                },
                minLength: {
                  value: 2,
                  message: 'Текст должен содержать не менее 2-х символов',
                },
                pattern: {
                  value: userNameRegexp,
                  message: 'Поле должно содержать только латиницу, кириллицу, пробел или дефис',
                },
              },
            )}
          />
          <span className="profile__input-error">
            {errors?.name?.message}
          </span>
        </label>

        <label className="profile__dataItem">
          <p className="profile__dataName">E-mail</p>
          <input
            className="profile__dataInput"
            id="email-input"
            type="text"
            name="email"
            placeholder="Введите свою почту"
            disabled={!isChangeUserData}
            {...register(
              'email',
              {
                required: 'Текст должен содержать не менее 2-х символов',
                maxLength: {
                  value: 40,
                  message: 'Текст должен содержать не более 40 символов',
                },
                minLength: {
                  value: 2,
                  message: 'Текст должен содержать не менее 2-х символов',
                },
                pattern: {
                  value: emailRegExp,
                  message: 'Введите корректный адресс электронной почты',
                },
              },
            )}
          />
          <span className="profile__input-error">
            {errors?.email?.message}
          </span>
        </label>
      </fieldset>
    </form>

    {!isChangeUserData &&
      <div className="profile__navigation">
        <p
          className="profile__change"
          onClick={handleChangeUserData}
        >Редактировать</p>
        <Link to="/signin"
              className="profile__logOut"
              onClick={handleLogOut}
        >Выйти из аккаунта</Link>
      </div>}

    {isChangeUserData && <span className="profile__submitWrapper">
      <button
        className={`profile__submit ${(isValid && isInputDiff) && 'profile__submit_enabled'}`}
        type="submit"
        form="profileForm"
        value="Сохранить"
        name="submitForm"
        id="submitForm"
        disabled={!isValid}
      >Сохранить
      </button>
      <p
        className="profile__backBtn"
        onClick={handleChangeUserData}
      >Назад</p>
    </span>
    }

    <ProfileChangeConfirmation
      confirmPopupOpened={confirmPopupOpened}
      setConfirmPopupOpened={setConfirmPopupOpened}
      errorWhileUpdating={errorWhileUpdating}
      onClosePopup={onClosePopup}
    />
  </section>;
}

export default Profile;
