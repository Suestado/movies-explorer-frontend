import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';


function AuthForm(props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    watch,
  } = useForm(
    {
      mode: 'onChange',
    },
  );

  function handleSubmitForm() {
    navigate(props.navigateTo, { replace: true });
  }

  return <div className="authForm">
    <Header
      authFormClass="header__authForm"
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
          className="authForm__input"
          id="authFormPassword"
          name="password"
          type="text"
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
            {errors?.password?.message}
        </span>
      </label>

      <button
        className="authForm__submitBtn"
        type="submit"
        id={`submit-${props.formName}`}
        name={`submit-${props.formName}`}
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
