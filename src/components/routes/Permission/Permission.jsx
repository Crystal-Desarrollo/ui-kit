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
  fallback: PropTypes.elementType,
  has: PropTypes.object,
};
