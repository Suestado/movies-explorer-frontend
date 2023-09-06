import AuthForm from '../AuthForm/AuthForm';

function SignIn({ setCurrentUser, setIsLoggedIn }) {

  return <>
    <AuthForm
      header="Рады видеть!"
      formName="signInForm"
      submitText="Войти"
      navigateTo="/movies"
      setCurrentUser={setCurrentUser}
      setIsLoggedIn={setIsLoggedIn}
    />
  </>;
}

export default SignIn;
