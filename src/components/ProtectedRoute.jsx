import { Navigate } from 'react-router-dom';

function ProtectedRouteElement({element: Component, ...props}) {
  return(
    props.isLoggedIn ? Component : <Navigate to="/"/>
  )
}

export default ProtectedRouteElement;
