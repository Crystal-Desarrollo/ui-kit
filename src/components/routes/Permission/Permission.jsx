import { hasPermissions } from '../../../utils/Auth';
import PropTypes from 'prop-types';

export const Permission = ({ user, children, fallback, has = {} }) => {
  if (!hasPermissions(user, has)) {
    return fallback;
  }

  return children;
};

Permission.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.oneOfType([PropTypes.node, null]),
  has: PropTypes.object,
};
