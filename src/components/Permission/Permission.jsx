import {useAuth} from '../../hooks';
import {hasPermissions} from '../../utils';
import PropTypes from 'prop-types';

export const Permission = ({children, fallback, has = {}}) => {
  const {user} = useAuth();

  if (!hasPermissions(user, has)) {
    return fallback;
  }

  return children;
};

Permission.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
  has: PropTypes.object,
};
