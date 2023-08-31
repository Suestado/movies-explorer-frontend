import AuthForm from '../AuthForm/AuthForm';

function SignUp({ setIsLoggedIn, setCurrentUser }) {

  return <>
    <AuthForm
      header="Добро пожаловать!"
      formName="signUpForm"
      submitText="Зарегистрироваться"
      navigateTo="/movies"
      setIsLoggedIn={setIsLoggedIn}
      setCurrentUser={setCurrentUser}
    />
  </>;
}

export default SignUp;
