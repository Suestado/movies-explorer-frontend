import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { userNameRegexp, emailRegExp } from '../../utils/Constants';
import MainApi from '../../utils/MainApi';

function AuthForm(props) {
  const [isAuthError, setIsAuthError] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    watch,
  } = useForm(
    {
      mode: 'onChange',
    },
  );

  function processAuthErr(err) {
    setIsAuthError(true);
    console.log(`Произошла ошибка при аутентефикации пользователя - ${err}`);
  }

  function handleSubmitForm() {
    setIsAuthError(false);

    if (pathname === '/signup') {
      MainApi.signupUser(watch('email'), watch('password'), watch('name'))
        .then(() => {
          props.setIsLoggedIn(true);
          navigate(props.navigateTo, { replace: true });
        })
        .catch(processAuthErr);
    } else {
      MainApi.signinUser(watch('email'), watch('password'))
        .then((res) => {
          props.setCurrentUser({
            //TODO добавить ID юзера в глобальный стейт
            email: res.data.email,
            name: res.data.name,
          });
          props.setIsLoggedIn(true);
          navigate(props.navigateTo, { replace: true });
        })
        .catch(processAuthErr);
    }
  }

  return <div className="authForm">
    <Header
      authFormClass="header_authFormMode"
    />
    <h2 className="authForm__header">{props.header}</h2>
    <form
      className="authForm__form"
      id={props.formName}
      action="#"
      method="post"
      name={props.formName}
      onSubmit={handleSubmit(handleSubmitForm)}
      noValidate
    >
      {pathname === '/signup' &&
        <label className="authForm__inputGroup">
          <h3 className="authForm__inputName">Имя</h3>
          <input
            className="authForm__input"
            id="authFormName"
            name="name"
            type="text"
            placeholder="Введите имя"
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
          <span className="authForm__error">
            {errors?.name?.message}
          </span>
        </label>
      }

      <label className="authForm__inputGroup">
        <h3 className="authForm__inputName">E-mail</h3>
        <input
          className="authForm__input"
          id="authFormEmail"
          name="email"
          type="text"
          placeholder="Введите E-mail"
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
        <span className="authForm__error">
            {errors?.email?.message}
          </span>
      </label>

      <label className="authForm__inputGroup">
        <h3 className="authForm__inputName">Пароль</h3>
        <input
          className={`authForm__input ${isAuthError && 'authForm__input_authErrOn'}`}
          id="authFormPassword"
          name="password"
          type="password"
          placeholder="Введите пароль"
          {...register(
            'password',
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
        <span className="authForm__error">
            {isAuthError ? 'Что-то пошло не так...' : errors?.password?.message}
        </span>
      </label>

      <button
        className={`authForm__submitBtn ${!isValid && 'authForm__submitBtn_inactive'}`}
        type="submit"
        disabled={!isValid}
        id={`submit-${props.formName}`}
        name={`submit-${props.formName}`
        }
      >
        {props.submitText}
      </button>

    </form>

    {pathname === '/signup' &&
      <span className="authForm__logInOption">
        Уже зарегистрированы? <Link to="/signin" className="authForm__redirectLink">Войти</Link>
      </span>
    }
    {pathname === '/signin' &&
      <span className="authForm__logInOption">
        Ещё не зарегистрированы? <Link to="/signup" className="authForm__redirectLink">Регистрация</Link>
      </span>
    }

  </div>;
}

export default AuthForm;
