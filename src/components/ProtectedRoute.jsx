import { Navigate } from 'react-router-dom';

function ProtectedRouteElement({element: Component, ...props}) {
  return(
    props.isLoggedIn ? Component : <Navigate to="/signin"/>
  )
}

export default ProtectedRouteElement;
