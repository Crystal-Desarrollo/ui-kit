import {useAuth} from '../../hooks';
import {hasPermissions} from '../../utils';
import {Tab} from '@mui/material';
import PropTypes from 'prop-types';

export const PermissionTab = ({has, ...props}) => {
  const {user} = useAuth();

  if (!hasPermissions(user, has)) return null;

  return <Tab {...props} />;
};

PermissionTab.propTypes = {
  has: PropTypes.object,
};
