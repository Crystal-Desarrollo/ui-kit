import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth';
import {hasPermissions} from '@/context/AuthProvider';

export const PrivateRoute = ({has, element}) => {
  const {user} = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{
          path: location.pathname,
        }}
      />
    );
  }

  if (!hasPermissions(user, has)) {
    return 'No tiene permiso';
  }

  return element;
};
