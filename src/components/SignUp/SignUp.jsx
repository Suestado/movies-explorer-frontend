import AuthForm from '../AuthForm/AuthForm';

function SignUp({ setIsLoggedIn }) {

  return <>
    <AuthForm
      header="Добро пожаловать!"
      formName="signUpForm"
      submitText="Зарегистрироваться"
      navigateTo="/signin"
      setIsLoggedIn={setIsLoggedIn}
    />
  </>;
}

export default SignUp;
