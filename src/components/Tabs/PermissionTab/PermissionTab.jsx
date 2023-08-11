import { hasPermissions } from '../../../utils/Auth';
import { Tab } from '@mui/material';
import PropTypes from 'prop-types';

export const PermissionTab = ({ user, has, ...props }) => {
  if (!hasPermissions(user, has)) return null;

  return <Tab {...props} />;
};

PermissionTab.propTypes = {
  has: PropTypes.object,
  user: PropTypes.object,
};
