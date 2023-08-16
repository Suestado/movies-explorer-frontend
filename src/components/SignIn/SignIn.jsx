import AuthForm from '../AuthForm/AuthForm';

function SignIn({ setCurrentUser }) {

  return <>
    <AuthForm
      header="Рады видеть!"
      formName="signInForm"
      submitText="Войти"
      navigateTo="/movies"
      setCurrentUser={setCurrentUser}
    />
  </>;
}

export default SignIn;
