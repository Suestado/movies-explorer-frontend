import AuthForm from '../AuthForm/AuthForm';

function SignIn() {

  return <>
    <AuthForm
      header="Рады видеть!"
      formName="signInForm"
      submitText="Войти"
      navigateTo="/movies"
    />
  </>;
}

export default SignIn;
