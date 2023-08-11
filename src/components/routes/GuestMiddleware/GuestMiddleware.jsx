import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const GuestMiddleware = ({ user }) => {
  const location = useLocation();
  const route = location.state?.path || '';

  if (user) {
    return <Navigate to={route} />;
  }

  return <Outlet />;
};

let PropTypes;
GuestMiddleware.propTypes = {
  user: PropTypes.object,
};
