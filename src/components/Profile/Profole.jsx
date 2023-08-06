import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Profile() {
  const currentUser = {
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  }; // тестовый пользователь

  const [isChangeUserData, setIsChangeUserData] = useState(false);


  useEffect(() => {
    reset({
      name: currentUser.name,
      email: currentUser.email,
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

  function handleChangeUserData() {
    setIsChangeUserData(!isChangeUserData);
  }

  return <section className="profile">
    <form
      className="profile__info"
      id="profileForm"
      action="#"
      method="post"
      name="profileForm"
      noValidate
    >
      <h2 className="profile__header">Привет, Виталий!</h2>
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
        <Link to="/signin" className="profile__logOut">Выйти из аккаунта</Link>
      </div>}

    {isChangeUserData && <span className="profile__submitWrapper">
      <button
        className={`profile__submit ${!isValid && 'profile__submit_disabled'}`}
        type="submit"
        value="Сохранить"
        name="submitForm"
        id="submitForm"
      >Сохранить
      </button>
      <p
        className="profile__backBtn"
        onClick={handleChangeUserData}
      >Назад</p>
    </span>
    }
  </section>;
}

export default Profile;
