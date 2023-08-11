import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const GuestMiddleware = ({ user }) => {
  const location = useLocation();
  const route = location.state?.path || '';

  if (user) {
    return <Navigate to={route} />;
  }

  return <Outlet />;
};

GuestMiddleware.propTypes = {
  user: PropTypes.object,
};
