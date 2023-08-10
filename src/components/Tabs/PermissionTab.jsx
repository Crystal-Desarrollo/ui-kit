import {useAuth} from '@/hooks/useAuth/useAuth';
import {hasPermissions} from '@/utils/Auth/Auth';
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
