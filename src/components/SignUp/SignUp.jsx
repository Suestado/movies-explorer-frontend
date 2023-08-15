import AuthForm from '../AuthForm/AuthForm';

function SignUp() {

  return <>
    <AuthForm
      header="Добро пожаловать!"
      formName="signUpForm"
      submitText="Зарегистрироваться"
      navigateTo="/signin"
    />
  </>;
}

export default SignUp;
