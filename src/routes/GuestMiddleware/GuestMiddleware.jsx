import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {useAuth} from '@/hooks/useAuth/useAuth.js';

export const GuestMiddleware = () => {
  const {user} = useAuth();
  const location = useLocation();
  const route = location.state?.path || '';

  if (user) {
    return <Navigate to={route} />;
  }

  return <Outlet />;
};
